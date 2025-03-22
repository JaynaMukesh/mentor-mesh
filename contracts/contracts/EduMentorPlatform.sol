pragma solidity ^0.8.0;

import "./MentorRegistry.sol";
import "./StudentRegistry.sol";
import "./SessionBooking.sol";

contract EduMentorPlatform {
    MentorRegistry public mentorRegistry;
    StudentRegistry public studentRegistry;
    SessionBooking public sessionBooking;

    constructor(address _mentorRegistry, address _studentRegistry, address _sessionBooking) {
        mentorRegistry = MentorRegistry(_mentorRegistry);
        studentRegistry = StudentRegistry(_studentRegistry);
        sessionBooking = SessionBooking(_sessionBooking);
    }

    function registerStudent(string memory name, string memory subject) public {
        studentRegistry.registerStudent(msg.sender, name, subject);
    }

    function registerMentor(string memory name, string[] memory skills, uint256 price, string memory level, string memory availability) public {
        mentorRegistry.registerMentor(msg.sender, name, skills, price, level, availability);
    }

    function bookSession(address mentor, uint256 sessionId) public payable {
        require(msg.value >= mentorRegistry.getMentorPrice(mentor), "Insufficient payment");
        sessionBooking.bookSession(msg.sender, mentor, sessionId);
    }

    function getMentorDetails(address mentor) public view returns (string memory, string[] memory, uint256, string memory, string memory) {
        return mentorRegistry.getMentorDetails(mentor);
    }

    function getStudentProfile() public view returns (string memory, string memory) {
        return studentRegistry.getStudentProfile(msg.sender);
    }

    function getUpcomingSessions() public view returns (uint256[] memory) {
        return sessionBooking.getUpcomingSessions(msg.sender);
    }
}