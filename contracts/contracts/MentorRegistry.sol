// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IMentorRegistry.sol";

contract MentorRegistry is IMentorRegistry {
    struct Mentor {
        string name;
        string[] skills;
        uint256 pricePerSession;
        string level;
        bool isAvailable;
        mapping(uint256 => string) timeSlots; // mapping of time slot index to time slot string
        uint256 timeSlotCount;
    }

    mapping(address => Mentor) public mentors;
    address[] public mentorAddresses;

    event MentorRegistered(address indexed mentorAddress, string name, string[] skills, uint256 pricePerSession, string level);
    event MentorUpdated(address indexed mentorAddress, string[] skills, uint256 pricePerSession, string level);
    event MentorAvailabilityUpdated(address indexed mentorAddress, bool isAvailable);
    event TimeSlotAdded(address indexed mentorAddress, string timeSlot);
    
    modifier onlyMentor() {
        require(bytes(mentors[msg.sender].name).length > 0, "Not a registered mentor");
        _;
    }

    function registerMentor(string memory _name, string[] memory _skills, uint256 _pricePerSession, string memory _level) external {
        require(bytes(_name).length > 0, "Name is required");
        require(_skills.length > 0, "At least one skill is required");
        require(_pricePerSession > 0, "Price must be greater than zero");

        Mentor storage mentor = mentors[msg.sender];
        mentor.name = _name;
        mentor.skills = _skills;
        mentor.pricePerSession = _pricePerSession;
        mentor.level = _level;
        mentor.isAvailable = true;
        mentor.timeSlotCount = 0;

        mentorAddresses.push(msg.sender);
        emit MentorRegistered(msg.sender, _name, _skills, _pricePerSession, _level);
    }

    function updateMentor(string[] memory _skills, uint256 _pricePerSession, string memory _level) external onlyMentor {
        Mentor storage mentor = mentors[msg.sender];
        mentor.skills = _skills;
        mentor.pricePerSession = _pricePerSession;
        mentor.level = _level;

        emit MentorUpdated(msg.sender, _skills, _pricePerSession, _level);
    }

    function setAvailability(bool _isAvailable) external onlyMentor {
        mentors[msg.sender].isAvailable = _isAvailable;
        emit MentorAvailabilityUpdated(msg.sender, _isAvailable);
    }

    function addTimeSlot(string memory _timeSlot) external onlyMentor {
        Mentor storage mentor = mentors[msg.sender];
        mentor.timeSlots[mentor.timeSlotCount] = _timeSlot;
        mentor.timeSlotCount++;

        emit TimeSlotAdded(msg.sender, _timeSlot);
    }

    function getMentor(address _mentorAddress) external view returns (Mentor memory) {
        return mentors[_mentorAddress];
    }

    function getAllMentors() external view returns (address[] memory) {
        return mentorAddresses;
    }
}