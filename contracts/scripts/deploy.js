const hre = require("hardhat");

async function main() {
    // Deploy the contracts
    const EduMentorPlatform = await hre.ethers.getContractFactory("EduMentorPlatform");
    const eduMentorPlatform = await EduMentorPlatform.deploy();
    await eduMentorPlatform.deployed();
    console.log("EduMentorPlatform deployed to:", eduMentorPlatform.address);

    const MentorRegistry = await hre.ethers.getContractFactory("MentorRegistry");
    const mentorRegistry = await MentorRegistry.deploy();
    await mentorRegistry.deployed();
    console.log("MentorRegistry deployed to:", mentorRegistry.address);

    const StudentRegistry = await hre.ethers.getContractFactory("StudentRegistry");
    const studentRegistry = await StudentRegistry.deploy();
    await studentRegistry.deployed();
    console.log("StudentRegistry deployed to:", studentRegistry.address);

    const SessionBooking = await hre.ethers.getContractFactory("SessionBooking");
    const sessionBooking = await SessionBooking.deploy();
    await sessionBooking.deployed();
    console.log("SessionBooking deployed to:", sessionBooking.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });