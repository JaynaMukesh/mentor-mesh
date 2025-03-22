# Edu Mentor Platform

## Overview
The Edu Mentor Platform is a decentralized application built on the Edu chain testnet that connects students with mentors in various subjects. The platform leverages smart contracts to manage user registrations, mentor-student matching, and session bookings, ensuring a secure and efficient learning environment.

## Features
- **User Registration**: Users can register as either students or mentors.
- **AI-Generated Quizzes**: Students take quizzes to determine their skill level in a chosen subject.
- **Mentor Matching**: Based on quiz results, students are matched with suitable mentors.
- **Session Booking**: Students can book sessions with mentors and make payments securely.
- **Meeting Management**: Both students and mentors can view and manage their upcoming meetings.

## Project Structure
```
edu-mentor-platform
├── contracts
│   ├── EduMentorPlatform.sol
│   ├── MentorRegistry.sol
│   ├── StudentRegistry.sol
│   ├── SessionBooking.sol
│   └── interfaces
│       ├── IMentorRegistry.sol
│       └── IStudentRegistry.sol
├── scripts
│   ├── deploy.js
│   └── seed.js
├── test
│   ├── EduMentorPlatform.test.js
│   ├── MentorRegistry.test.js
│   └── StudentRegistry.test.js
├── migrations
│   └── 1_initial_migration.js
├── .env.example
├── hardhat.config.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd edu-mentor-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

## Deployment
To deploy the smart contracts, run the following script:
```
npm run deploy
```

## Testing
To run the test cases for the smart contracts, use:
```
npm run test
```

## Usage
- Connect your wallet to the Edu chain testnet.
- Choose to register as a student or mentor.
- Follow the prompts to complete your profile and start using the platform.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.