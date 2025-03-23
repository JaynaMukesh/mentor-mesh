// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IMentorRegistry.sol";

contract MentorRegistry is IMentorRegistry {
    mapping(address => Mentor) public mentors;
    address[] public mentorAddresses;
    address public owner;

    event MentorRegistered(address indexed mentorAddress, string name, string[] skills, uint256 pricePerSession, string level);
    event MentorUpdated(address indexed mentorAddress, string[] skills, uint256 pricePerSession, string level);
    event MentorAvailabilityUpdated(address indexed mentorAddress, bool isAvailable);
    event TimeSlotAdded(address indexed mentorAddress, string timeSlot);
    
    modifier onlyMentor() {
        require(bytes(mentors[msg.sender].name).length > 0, "Not a registered mentor");
        _;
    }

    constructor() {
        owner = msg.sender;
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

    function getMentorDetails(address mentorAddress) public view returns (string memory name, string[] memory skills, uint256 pricePerSession, string memory level){
        Mentor storage mentor = mentors[mentorAddress];
        return (
            mentor.name,
            mentor.skills,
            mentor.pricePerSession,
            mentor.level
        );
    }

    function getAllMentors() external view returns (MentorInfo[] memory) {
        MentorInfo[] memory allMentors = new MentorInfo[](mentorAddresses.length);
        for (uint256 i = 0; i < mentorAddresses.length; i++) {
            address mentorAddress = mentorAddresses[i];
            Mentor storage mentor = mentors[mentorAddress];
            allMentors[i] = MentorInfo({
                mentorAddress: mentorAddress,  // Add this line
                name: mentor.name,
                skills: mentor.skills,
                pricePerSession: mentor.pricePerSession,
                level: mentor.level,
                isAvailable: mentor.isAvailable,
                timeSlotCount: mentor.timeSlotCount
            });
        }
        return allMentors;
    }

    function isMentor(address mentorAddress) public view returns(bool) {
        return bytes(mentors[mentorAddress].name).length > 0;
    }

    function setMentorActiveStatus(address mentorAddress, bool status) external {
        mentors[mentorAddress].isAvailable = status;
    }

    function updateMentorAvailability(bool _isAvailable) public {
        require(msg.sender == owner, "Only owner can update availability for all mentors");
        
        for (uint256 i = 0; i < mentorAddresses.length; i++) {
            if (mentorAddresses[i] == msg.sender) {
                mentors[mentorAddresses[i]].isAvailable = _isAvailable;
                emit MentorAvailabilityUpdated(msg.sender, _isAvailable);
            }
        }
    }

    function getMentorTimeSlot(address mentorAddress, uint256 slotIndex) external view returns (string memory) {
        require(slotIndex < mentors[mentorAddress].timeSlotCount, "Time slot index out of bounds");
        return mentors[mentorAddress].timeSlots[slotIndex];
    }
}