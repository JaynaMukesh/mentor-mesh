const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the contracts
    const MentorRegistry = await ethers.getContractFactory("MentorRegistry");
    const mentorRegistry = await MentorRegistry.deploy();
    await mentorRegistry.deployed();
    console.log("MentorRegistry deployed to:", mentorRegistry.address);

    const StudentRegistry = await ethers.getContractFactory("StudentRegistry");
    const studentRegistry = await StudentRegistry.deploy();
    await studentRegistry.deployed();
    console.log("StudentRegistry deployed to:", studentRegistry.address);

    const SessionBooking = await ethers.getContractFactory("SessionBooking");
    const sessionBooking = await SessionBooking.deploy(mentorRegistry.address, studentRegistry.address);
    await sessionBooking.deployed();
    console.log("SessionBooking deployed to:", sessionBooking.address);

    // Seed initial data
    const mentors = [
        { name: "Alice", skills: ["React", "JavaScript"], price: ethers.utils.parseEther("0.1"), level: "beginner", timeSlots: ["10:00", "11:00"] },
        { name: "Bob", skills: ["PHP", "MySQL"], price: ethers.utils.parseEther("0.2"), level: "intermediate", timeSlots: ["12:00", "13:00"] },
        { name: "Charlie", skills: ["DSA", "Algorithms"], price: ethers.utils.parseEther("0.3"), level: "expert", timeSlots: ["14:00", "15:00"] },
    ];

    for (const mentor of mentors) {
        const tx = await mentorRegistry.registerMentor(mentor.name, mentor.skills, mentor.price, mentor.level, mentor.timeSlots);
        await tx.wait();
        console.log(`Mentor ${mentor.name} registered.`);
    }

    console.log("Seeding completed.");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });