export interface User {
  id: string;
  name: string;
  email: string;
  skills: string[];
  bio?: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}