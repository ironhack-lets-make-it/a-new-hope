import { Event } from "./event.type";

export interface User {
  id: string;
  name: string;
  email: string;
  github: string;
  /**
   defaults to true?
   *  */
  isIronhacker: boolean;
  skills: string[]; // TODO enumerate or create type of skills
  stack: string[];
  // previousWorkshops -> RDB is fine, NRDB -> overkill?
  previousWorkshops: Event[] | string[];
  staffComment: string[];
  userRecommendations: number;
}
