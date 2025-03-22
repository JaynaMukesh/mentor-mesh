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
}