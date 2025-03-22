const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StudentRegistry", function () {
    let StudentRegistry;
    let studentRegistry;
    let owner;
    let studentAddress;

    beforeEach(async function () {
        StudentRegistry = await ethers.getContractFactory("StudentRegistry");
        [owner, studentAddress] = await ethers.getSigners();
        studentRegistry = await StudentRegistry.deploy();
        await studentRegistry.deployed();
    });

    it("should register a new student", async function () {
        const studentName = "John Doe";
        const subject = "React";

        await studentRegistry.registerStudent(studentName, subject);
        const student = await studentRegistry.getStudent(studentAddress.address);

        expect(student.name).to.equal(studentName);
        expect(student.subject).to.equal(subject);
    });

    it("should return the correct student details", async function () {
        const studentName = "Jane Doe";
        const subject = "PHP";

        await studentRegistry.registerStudent(studentName, subject);
        const student = await studentRegistry.getStudent(studentAddress.address);

        expect(student.name).to.equal(studentName);
        expect(student.subject).to.equal(subject);
    });

    it("should not allow duplicate student registration", async function () {
        const studentName = "John Doe";
        const subject = "DSA";

        await studentRegistry.registerStudent(studentName, subject);
        await expect(studentRegistry.registerStudent(studentName, subject)).to.be.revertedWith("Student already registered");
    });

    it("should allow students to take a quiz and store results", async function () {
        const studentName = "Alice";
        const subject = "React";
        const quizResults = [1, 2, 3, 4, 5]; // Example results

        await studentRegistry.registerStudent(studentName, subject);
        await studentRegistry.submitQuizResults(quizResults);

        const results = await studentRegistry.getQuizResults(studentAddress.address);
        expect(results).to.deep.equal(quizResults);
    });
});