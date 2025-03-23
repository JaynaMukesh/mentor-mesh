// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MentorRegistry.sol";
import "./StudentRegistry.sol";
import "./SessionBooking.sol";

contract EduMentorPlatform {
    MentorRegistry public mentorRegistry;
    StudentRegistry public studentRegistry;
    SessionBooking public sessionBooking;
    
    // Add events for tracking operations
    event StudentRegistered(address student, string name, string subject);
    event MentorRegistered(address mentor, string name, string[] skills);
    event SessionBooked(address student, address mentor, uint256 sessionId);

    constructor(address _mentorRegistry, address _studentRegistry, address _sessionBooking) {
        mentorRegistry = MentorRegistry(_mentorRegistry);
        studentRegistry = StudentRegistry(_studentRegistry);
        sessionBooking = SessionBooking(_sessionBooking);
        
        // Authorize this platform with the StudentRegistry
        try studentRegistry.authorizePlatform(address(this)) {} catch {}
    }

    function registerStudent(string memory name, string memory subject) public {
        // Call the new function that takes the student's address
        studentRegistry.registerStudentOnBehalf(msg.sender, name, subject);
        emit StudentRegistered(msg.sender, name, subject);
    }

    function registerMentor(string memory name, string[] memory skills, uint256 price, string memory level) public {
        mentorRegistry.registerMentor(name, skills, price, level);
        emit MentorRegistered(msg.sender, name, skills);
    }

    function bookSession(address mentor, uint256 sessionId) public payable {
        // Get mentor price from details
        (,, uint256 mentorPrice,) = mentorRegistry.getMentorDetails(mentor);
        require(msg.value >= mentorPrice, "Insufficient payment");
        
        // Make sure your SessionBooking contract has a matching function signature
        sessionBooking.bookSession(msg.sender, sessionId);
        emit SessionBooked(msg.sender, mentor, sessionId);
    }

    function getMentorDetails(address mentor) public view returns (string memory, string[] memory, uint256, string memory) {
        return mentorRegistry.getMentorDetails(mentor);
    }

    // Using the correct function name from StudentRegistry
    function getStudentInfo() public view returns (string memory, string memory, uint8, uint8) {
        return studentRegistry.getStudentInfo(msg.sender);
    }

    // function getUpcomingSessions() public view returns (uint256[] memory) {
    //     return sessionBooking.getUserSessions(msg.sender);  // assuming this is the correct name
    // }
}