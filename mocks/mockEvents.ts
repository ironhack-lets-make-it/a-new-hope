import { Event } from "../types/event.type";

export const allEvents: Event[] = [
  {
    id: "1",
    closed: false,
    comments: [],
    date: Date.now(),
    description: "A new hope for the humans",
    participants: [],
    repo: [],
    skills: ["Backend", "Mobile"],
    stack: ["Django", "Flutter"],
    title: "A New Hope",
  },
  {
    id: "2",
    closed: true,
    comments: [],
    date: new Date("2020").getTime(),
    description: "Everyone died at the end of this one",
    participants: [],
    repo: [],
    skills: ["UX-UI"],
    stack: ["Figma", "Hand paintings"],
    title: "No hope at all",
  },
];
