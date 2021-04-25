import { User } from "./user.type";

export interface Event {
  id: string;
  title: string;
  description: string;
  skills: string[]; //TODO enumerate or create type of stack
  stack: string[]; //TODO enumerate or create type of stack
  repo: string[];
  participants: User[];
  date: Date | number;
  comments: string[];
  isClosed: boolean;
  closedDate?: Date;
}

// Do we need a comment model as well?
