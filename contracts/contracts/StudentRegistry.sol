// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        string subject;
        uint8 quizScore;
        uint8 level; // 0: Beginner, 1: Intermediate, 2: Expert
        bool exists;
    }

    mapping(address => Student) public students;

    event StudentRegistered(address indexed studentAddress, string name, string subject);
    event QuizTaken(address indexed studentAddress, uint8 score, uint8 level);

    address public owner;
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwnerOrPlatform() {
        require(msg.sender == owner || authorizedPlatforms[msg.sender], "Not authorized");
        _;
    }
    
    mapping(address => bool) public authorizedPlatforms;
    
    function authorizePlatform(address platformAddress) external {
        require(msg.sender == owner, "Only owner can authorize platforms");
        authorizedPlatforms[platformAddress] = true;
    }
    
    function registerStudentOnBehalf(address studentAddress, string memory _name, string memory _subject) public onlyOwnerOrPlatform {
        require(!students[studentAddress].exists, "Student already registered");
        
        students[studentAddress] = Student({
            name: _name,
            subject: _subject,
            quizScore: 0,
            level: 0,
            exists: true
        });

        emit StudentRegistered(studentAddress, _name, _subject);
    }

    function registerStudent(string memory _name, string memory _subject) public {
        require(!students[msg.sender].exists, "Student already registered");
        
        students[msg.sender] = Student({
            name: _name,
            subject: _subject,
            quizScore: 0,
            level: 0,
            exists: true
        });

        emit StudentRegistered(msg.sender, _name, _subject);
    }

    function isStudent(address studentAddress) public view returns (bool) {
        return students[studentAddress].exists;
    }

    function takeQuiz(uint8 _score) public {
        require(students[msg.sender].exists, "Student not registered");
        require(_score <= 5, "Score must be between 0 and 5");

        students[msg.sender].quizScore = _score;

        if (_score <= 1) {
            students[msg.sender].level = 0; // Beginner
        } else if (_score <= 3) {
            students[msg.sender].level = 1; // Intermediate
        } else {
            students[msg.sender].level = 2; // Expert
        }

        emit QuizTaken(msg.sender, _score, students[msg.sender].level);
    }

    function getStudentInfo(address _studentAddress) public view returns (string memory, string memory, uint8, uint8) {
        require(students[_studentAddress].exists, "Student not registered");
        
        Student memory student = students[_studentAddress];
        return (student.name, student.subject, student.quizScore, student.level);
    }
}