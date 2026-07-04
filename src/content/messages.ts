export type Message = {
  from: "them" | "me";
  text: string;
};

export const fakeContact = "future employer";

export const messages: Message[] = [
  { from: "them", text: "so what are you actually building right now?" },
  { from: "me", text: "hostiggo — a community-driven travel platform. React Native app, UI/UX, SEO, QA, payments, all of it." },
  { from: "them", text: "solo?" },
  { from: "me", text: "front-end and integration are mine. from schema-adjacent decisions to the pixels users actually see." },
  { from: "them", text: "still in school though?" },
  { from: "me", text: "2nd year B.Tech IT. the startup and internship experience happen alongside, not after." },
];
