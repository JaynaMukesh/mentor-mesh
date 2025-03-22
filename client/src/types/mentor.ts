export interface Mentor {
  id: string;
  name: string;
  expertise: string[];
  bio: string;
  rating: number;
  sessionsAvailable: number;
  profilePictureUrl?: string;
  contactInfo?: {
    email: string;
    phone?: string;
  };
}