// filepath: /mentor-match-vite/mentor-match-vite/src/contracts/types/index.ts
export interface MentorMatch {
  id: string;
  name: string;
  skills: string[];
  availability: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  skills: string[];
}

export interface Session {
  id: string;
  mentorId: string;
  userId: string;
  date: string;
  time: string;
  duration: number;
}