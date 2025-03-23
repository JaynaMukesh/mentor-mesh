// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IMentorRegistry.sol";
import "./interfaces/IStudentRegistry.sol";

contract SessionBooking {
    struct Session {
        address mentor;
        address student;
        uint256 price;
        uint256 timestamp;
        bool isBooked;
    }

    IMentorRegistry public mentorRegistry;
    IStudentRegistry public studentRegistry;

    mapping(uint256 => Session) public sessions;
    uint256 public sessionCount;
    // Add mappings to track sessions by mentor and student
    mapping(address => uint256[]) private mentorSessions;
    mapping(address => uint256[]) private studentSessions;

    event SessionBooked(uint256 sessionId, address indexed student, address indexed mentor, uint256 price, uint256 timestamp);
    event SessionCancelled(uint256 sessionId);

    constructor(address _mentorRegistry, address _studentRegistry) {
        mentorRegistry = IMentorRegistry(_mentorRegistry);
        studentRegistry = IStudentRegistry(_studentRegistry);
    }

    function bookSession(address mentor, uint256 price) external {
        require(mentorRegistry.isMentor(mentor), "Not a valid mentor");
        require(studentRegistry.isStudent(msg.sender), "Not a valid student");

        sessionCount++;
        sessions[sessionCount] = Session({
            mentor: mentor,
            student: msg.sender,
            price: price,
            timestamp: block.timestamp,
            isBooked: true
        });

        // Add session to mentor and student session lists
        mentorSessions[mentor].push(sessionCount);
        studentSessions[msg.sender].push(sessionCount);

        emit SessionBooked(sessionCount, msg.sender, mentor, price, block.timestamp);
    }

    function cancelSession(uint256 sessionId) external {
        Session storage session = sessions[sessionId];
        require(session.isBooked, "Session not booked");
        require(session.student == msg.sender, "Only the student can cancel the session");

        session.isBooked = false;

        emit SessionCancelled(sessionId);
    }

    function getSessionDetails(uint256 sessionId) external view returns (Session memory) {
        return sessions[sessionId];
    }

    // Add new functions to get mentor sessions
    function getMentorSessionCount(address mentor) external view returns (uint256) {
        return mentorSessions[mentor].length;
    }

    function getMentorSessionIds(address mentor) external view returns (uint256[] memory) {
        return mentorSessions[mentor];
    }

    function getMentorSessions(address mentor) external view returns (Session[] memory) {
        uint256[] memory sessionIds = mentorSessions[mentor];
        Session[] memory result = new Session[](sessionIds.length);

        for (uint256 i = 0; i < sessionIds.length; i++) {
            result[i] = sessions[sessionIds[i]];
        }

        return result;
    }

    // Add new functions to get student sessions
    function getStudentSessionCount(address student) external view returns (uint256) {
        return studentSessions[student].length;
    }

    function getStudentSessionIds(address student) external view returns (uint256[] memory) {
        return studentSessions[student];
    }

    function getStudentSessions(address student) external view returns (Session[] memory) {
        uint256[] memory sessionIds = studentSessions[student];
        Session[] memory result = new Session[](sessionIds.length);

        for (uint256 i = 0; i < sessionIds.length; i++) {
            result[i] = sessions[sessionIds[i]];
        }

        return result;
    }
}