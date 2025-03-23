const mentorRegistryAddress = "0x099C16080Def8A57a828d405E1baef49cffbc4Dd";
const mentorRegistryABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isAvailable",
                "type": "bool"
            }
        ],
        "name": "MentorAvailabilityUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "skills",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pricePerSession",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "level",
                "type": "string"
            }
        ],
        "name": "MentorRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "skills",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pricePerSession",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "level",
                "type": "string"
            }
        ],
        "name": "MentorUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "timeSlot",
                "type": "string"
            }
        ],
        "name": "TimeSlotAdded",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_timeSlot",
                "type": "string"
            }
        ],
        "name": "addTimeSlot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "_skills",
                "type": "string[]"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerSession",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_level",
                "type": "string"
            }
        ],
        "name": "registerMentor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_isAvailable",
                "type": "bool"
            }
        ],
        "name": "setAvailability",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setMentorActiveStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string[]",
                "name": "_skills",
                "type": "string[]"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerSession",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_level",
                "type": "string"
            }
        ],
        "name": "updateMentor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_isAvailable",
                "type": "bool"
            }
        ],
        "name": "updateMentorAvailability",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllMentors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "skills",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerSession",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "level",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAvailable",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timeSlotCount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IMentorRegistry.MentorInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            }
        ],
        "name": "getMentorDetails",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "skills",
                "type": "string[]"
            },
            {
                "internalType": "uint256",
                "name": "pricePerSession",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "level",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "slotIndex",
                "type": "uint256"
            }
        ],
        "name": "getMentorTimeSlot",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentorAddress",
                "type": "address"
            }
        ],
        "name": "isMentor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mentorAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "mentors",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "pricePerSession",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "level",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isAvailable",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "timeSlotCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const studentRegistryAddress = "0xD82995b9B4353599b9C92E582Ce2044351de79D7";
const studentRegistryABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "studentAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "score",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            }
        ],
        "name": "QuizTaken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "studentAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "subject",
                "type": "string"
            }
        ],
        "name": "StudentRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "platformAddress",
                "type": "address"
            }
        ],
        "name": "authorizePlatform",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "authorizedPlatforms",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_studentAddress",
                "type": "address"
            }
        ],
        "name": "getStudentInfo",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "studentAddress",
                "type": "address"
            }
        ],
        "name": "isStudent",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            }
        ],
        "name": "registerStudent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "studentAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_subject",
                "type": "string"
            }
        ],
        "name": "registerStudentOnBehalf",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "students",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "subject",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "quizScore",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "level",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_score",
                "type": "uint8"
            }
        ],
        "name": "takeQuiz",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const sessionBookingAddress = "0xf8ac026B42739fb210449676382708a4b98C942c";
const sessionBookingABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_mentorRegistry",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_studentRegistry",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "SessionBooked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "SessionCancelled",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "bookSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "cancelSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            }
        ],
        "name": "getMentorSessionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            }
        ],
        "name": "getMentorSessionIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            }
        ],
        "name": "getMentorSessions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "mentor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "student",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isBooked",
                        "type": "bool"
                    }
                ],
                "internalType": "struct SessionBooking.Session[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "getSessionDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "mentor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "student",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isBooked",
                        "type": "bool"
                    }
                ],
                "internalType": "struct SessionBooking.Session",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "getStudentSessionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "getStudentSessionIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "student",
                "type": "address"
            }
        ],
        "name": "getStudentSessions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "mentor",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "student",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isBooked",
                        "type": "bool"
                    }
                ],
                "internalType": "struct SessionBooking.Session[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mentorRegistry",
        "outputs": [
            {
                "internalType": "contract IMentorRegistry",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sessionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "sessions",
        "outputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isBooked",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "studentRegistry",
        "outputs": [
            {
                "internalType": "contract IStudentRegistry",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const eduPlatformAddress = "0xAc9425CaA060Bf1e8f301128b0d15e994f536938";
const eduPlatformABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "skills",
                "type": "string[]"
            }
        ],
        "name": "MentorRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "SessionBooked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "student",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "subject",
                "type": "string"
            }
        ],
        "name": "StudentRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "sessionId",
                "type": "uint256"
            }
        ],
        "name": "bookSession",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "skills",
                "type": "string[]"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "level",
                "type": "string"
            }
        ],
        "name": "registerMentor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "subject",
                "type": "string"
            }
        ],
        "name": "registerStudent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_mentorRegistry",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_studentRegistry",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_sessionBooking",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "mentor",
                "type": "address"
            }
        ],
        "name": "getMentorDetails",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStudentInfo",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mentorRegistry",
        "outputs": [
            {
                "internalType": "contract MentorRegistry",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sessionBooking",
        "outputs": [
            {
                "internalType": "contract SessionBooking",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "studentRegistry",
        "outputs": [
            {
                "internalType": "contract StudentRegistry",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export {
    mentorRegistryAddress,
    mentorRegistryABI,
    studentRegistryAddress,
    studentRegistryABI,
    sessionBookingAddress,
    sessionBookingABI,
    eduPlatformAddress,
    eduPlatformABI
}