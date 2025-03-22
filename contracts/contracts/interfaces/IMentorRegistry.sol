// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMentorRegistry {
    struct Mentor {
        string name;
        string[] skills;
        uint256 pricePerSession;
        string level; // beginner, intermediate, expert
        string[] availableTimeSlots;
        string meetingLink;
        bool isActive;
    }

    function registerMentor(
        string calldata name,
        string[] calldata skills,
        uint256 pricePerSession,
        string calldata level,
        string[] calldata availableTimeSlots,
        string calldata meetingLink
    ) external;

    function updateMentorAvailability(
        address mentorAddress,
        string[] calldata newAvailableTimeSlots
    ) external;

    function getMentorDetails(address mentorAddress) external view returns (Mentor memory);

    function getAllMentors() external view returns (Mentor[] memory);

    function setMentorActiveStatus(address mentorAddress, bool status) external;
}