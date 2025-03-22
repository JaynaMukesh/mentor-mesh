export type Subject = {
  id: string;
  name: string;
  icon: string;
};

export type Level = 'beginner' | 'intermediate' | 'expert';

export type Mentor = {
  id: string;
  name: string;
  skills: string[];
  pricePerSession: number;
  level: Level;
  timeSlots: string[];
  meetingLink: string;
};

export type Meeting = {
  id: string;
  mentorId: string;
  studentId: string;
  subject: string;
  timeSlot: string;
  meetingLink: string;
  status: 'upcoming' | 'completed' | 'cancelled';
};

export type User = {
  id: string;
  address: string;
  name: string;
  role: 'student' | 'mentor';
  level?: Level;
  subject?: string;
  meetings: Meeting[];
};