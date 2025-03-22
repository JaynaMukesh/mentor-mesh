import { expect } from "chai";
import { ethers } from "hardhat";

describe("EduMentorPlatform", function () {
    let EduMentorPlatform;
    let eduMentorPlatform;
    let owner;
    let student;
    let mentor;

    beforeEach(async function () {
        EduMentorPlatform = await ethers.getContractFactory("EduMentorPlatform");
        [owner, student, mentor] = await ethers.getSigners();
        eduMentorPlatform = await EduMentorPlatform.deploy();
        await eduMentorPlatform.deployed();
    });

    it("should register a student", async function () {
        await eduMentorPlatform.connect(student).registerStudent("Student Name", "React");
        const studentInfo = await eduMentorPlatform.getStudentInfo(student.address);
        expect(studentInfo.name).to.equal("Student Name");
        expect(studentInfo.subject).to.equal("React");
    });

    it("should register a mentor", async function () {
        await eduMentorPlatform.connect(mentor).registerMentor("Mentor Name", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00", "10:00"]);
        const mentorInfo = await eduMentorPlatform.getMentorInfo(mentor.address);
        expect(mentorInfo.name).to.equal("Mentor Name");
        expect(mentorInfo.skills).to.include("React");
        expect(mentorInfo.price).to.equal(ethers.utils.parseEther("0.1"));
    });

    it("should book a session", async function () {
        await eduMentorPlatform.connect(student).registerStudent("Student Name", "React");
        await eduMentorPlatform.connect(mentor).registerMentor("Mentor Name", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00", "10:00"]);
        
        await eduMentorPlatform.connect(student).bookSession(mentor.address, "9:00", { value: ethers.utils.parseEther("0.1") });
        const sessions = await eduMentorPlatform.getStudentSessions(student.address);
        expect(sessions.length).to.equal(1);
    });

    it("should return the correct mentor list based on subject", async function () {
        await eduMentorPlatform.connect(mentor).registerMentor("Mentor Name", ["React"], ethers.utils.parseEther("0.1"), "beginner", ["9:00", "10:00"]);
        const mentors = await eduMentorPlatform.getMentorsBySubject("React");
        expect(mentors.length).to.equal(1);
        expect(mentors[0].name).to.equal("Mentor Name");
    });
});