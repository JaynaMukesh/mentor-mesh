export interface AIResponse {
  message: string;
  confidence: number;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
}

export interface UserSkills {
  userId: string;
  skills: Skill[];
}

export interface MentorMatch {
  mentorId: string;
  matchedSkills: Skill[];
  confidenceScore: number;
}