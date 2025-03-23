// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMentorRegistry {
    // Create a new struct without mappings for external returns
    struct MentorInfo {
        address mentorAddress;  // Add this line
        string name;
        string[] skills;
        uint256 pricePerSession;
        string level;
        bool isAvailable;
        uint256 timeSlotCount;
    }
    
    // Keep original struct for internal storage
    struct Mentor {
        string name;
        string[] skills;
        uint256 pricePerSession;
        string level;
        bool isAvailable;
        mapping(uint256 => string) timeSlots;
        uint256 timeSlotCount;
    }

    function registerMentor(
        string memory _name, 
        string[] memory _skills, 
        uint256 _pricePerSession, 
        string memory _level
    ) external;

    function updateMentor(
        string[] memory _skills, 
        uint256 _pricePerSession, 
        string memory _level
    ) external;

    function setAvailability(bool _isAvailable) external;
    
    function addTimeSlot(string memory _timeSlot) external;
    
    function getMentorDetails(address mentorAddress) external view returns (
        string memory name, 
        string[] memory skills, 
        uint256 pricePerSession, 
        string memory level
    );
    
    // Changed return type to MentorInfo
    function getAllMentors() external view returns (MentorInfo[] memory);
    
    function isMentor(address mentorAddress) external view returns (bool);
    
    function setMentorActiveStatus(address mentorAddress, bool status) external;
    
    function updateMentorAvailability(bool _isAvailable) external;
    
    // Add a function to get time slots individually
    function getMentorTimeSlot(address mentorAddress, uint256 slotIndex) external view returns (string memory);
}