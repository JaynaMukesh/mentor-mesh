// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStudentRegistry {
    struct Student {
        string name;
        string subject;
        uint8 level; // 0: Beginner, 1: Intermediate, 2: Expert
        uint256 quizScore;
        bool exists;
    }

    function registerStudent(string calldata name, string calldata subject) external;
    function getStudent(address studentAddress) external view returns (Student memory);
    function updateQuizScore(address studentAddress, uint256 score) external;
    function getStudentLevel(address studentAddress) external view returns (uint8);
}