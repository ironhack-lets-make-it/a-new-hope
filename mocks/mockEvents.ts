import { Event } from "../types/event.type";

export const allEvents: Event[] = [
  {
    id: "1",
    isClosed: false,
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
    isClosed: true,
    comments: [],
    date: new Date("2020").getTime(),
    description: "Everyone died at the end of this one",
    participants: [
      {
        skills: ["React Native", "Python"],
        stack: ["React", "MongoDB", "Express", "Python"],
        email: "poor-life-choices@alfonso-life-story.com",
        github: "",
        id: "3",
        isIronhacker: true,
        previousWorkshops: ["1"],
        name: "Alfonso",
        staffComment: ["Small person"],
        userRecommendations: -Infinity,
      },
      {
        skills: ["Yes"],
        email: "in-serbia-cycling-is-considered@gay.com",
        github: "",
        id: "4",
        isIronhacker: true,
        previousWorkshops: ["2"],
        name: "Marko",
        staffComment: ["Pusi kurac"],
        userRecommendations: +Infinity,
        stack: [
          "Azure",
          "AWS",
          "Vuejs",
          "Meteor Expert",
          "Cloud Infrastructure",
          "Blaze",
        ],
      },
    ],
    repo: [],
    skills: ["UX-UI"],
    stack: ["Figma", "Hand paintings"],
    title: "No hope at all",
  },
];
