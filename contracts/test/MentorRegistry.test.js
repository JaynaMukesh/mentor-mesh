const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MentorRegistry", function () {
    let MentorRegistry;
    let mentorRegistry;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        MentorRegistry = await ethers.getContractFactory("MentorRegistry");
        [owner, addr1, addr2] = await ethers.getSigners();
        mentorRegistry = await MentorRegistry.deploy();
        await mentorRegistry.deployed();
    });

    describe("Registration", function () {
        it("Should register a mentor", async function () {
            await mentorRegistry.registerMentor("Alice", ["React", "Node.js"], ethers.utils.parseEther("0.1"), "beginner", ["9:00", "10:00"]);
            const mentor = await mentorRegistry.mentors(addr1.address);
            expect(mentor.name).to.equal("Alice");
            expect(mentor.skills).to.deep.equal(["React", "Node.js"]);
            expect(mentor.pricePerSession.toString()).to.equal(ethers.utils.parseEther("0.1").toString());
            expect(mentor.level).to.equal("beginner");
            expect(mentor.availableTimeSlots).to.deep.equal(["9:00", "10:00"]);
        });

        it("Should not allow duplicate registration", async function () {
            await mentorRegistry.registerMentor("Alice", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00"]);
            await expect(
                mentorRegistry.registerMentor("Alice", ["Node.js"], ethers.utils.parseEther("0.2"), "intermediate", ["10:00"])
            ).to.be.revertedWith("Mentor already registered");
        });
    });

    describe("Mentor Management", function () {
        it("Should update mentor availability", async function () {
            await mentorRegistry.registerMentor("Alice", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00"]);
            await mentorRegistry.updateAvailability(["10:00", "11:00"]);
            const mentor = await mentorRegistry.mentors(addr1.address);
            expect(mentor.availableTimeSlots).to.deep.equal(["10:00", "11:00"]);
        });

        it("Should retrieve mentor details", async function () {
            await mentorRegistry.registerMentor("Alice", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00"]);
            const mentor = await mentorRegistry.getMentorDetails(addr1.address);
            expect(mentor.name).to.equal("Alice");
        });
    });
});