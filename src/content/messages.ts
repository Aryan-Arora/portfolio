export type Message = {
  from: "them" | "me";
  text: string;
};

export type Thread = {
  id: string;
  name: string;
  initials: string;
  time: string;
  unread?: boolean;
  preview: string;
  messages: Message[];
};

export const threads: Thread[] = [
  {
    id: "elon",
    name: "Elon Musk",
    initials: "EM",
    time: "11:52 AM",
    unread: true,
    preview: "a travel platform that doesn't go to mars. bold.",
    messages: [
      { from: "them", text: "heard you're building a travel platform. does it book flights to mars?" },
      { from: "me", text: "it's called hostiggo. community-driven travel. react native, payments, the whole thing. and no, earth only." },
      { from: "them", text: "a travel platform that doesn't go to mars. bold. what's your tech stack, and don't say jira." },
      { from: "me", text: "react native on mobile, node behind it, razorpay/payu for payments. i do front-end and the integration layer." },
      { from: "them", text: "not bad. ship fast. i once built a car company in the time it takes most people to pick a css framework." },
      { from: "me", text: "i picked tailwind in 4 seconds. your move." },
    ],
  },
  {
    id: "sam",
    name: "Sam Altman",
    initials: "SA",
    time: "10:14 AM",
    unread: true,
    preview: "you did claude 101?? aryan. we need to talk.",
    messages: [
      { from: "them", text: "saw your certifications. you did claude 101?? aryan. we need to talk." },
      { from: "me", text: "sam it's literally a course by anthropic. i'm also doing advanced ML with python. it's not personal." },
      { from: "them", text: "first the course, then the api key, then suddenly you're fine-tuning someone else's models. i've seen how this goes." },
      { from: "me", text: "i'm a 2nd year b.tech student, i fine-tune my sleep schedule at best" },
      { from: "them", text: "fair. ping me when hostiggo needs an ai travel agent." },
    ],
  },
  {
    id: "beast",
    name: "MrBeast",
    initials: "MB",
    time: "Yesterday",
    preview: "last person to leave the hostel wins $500,000",
    messages: [
      { from: "them", text: "yo. i want to do a video on hostiggo. 'last person to leave the hostel wins $500,000'" },
      { from: "me", text: "jimmy the platform is still pre-launch, the QA suite isn't even done" },
      { from: "them", text: "perfect, i'll buy 100 hostels and we'll launch it live on stream" },
      { from: "me", text: "please let me finish the payment integration first. razorpay has feelings too." },
      { from: "them", text: "ok but i'm subscribing to your github. everyone else should too btw" },
    ],
  },
  {
    id: "sundar",
    name: "Sundar Pichai",
    initials: "SP",
    time: "Yesterday",
    preview: "impressive lighthouse score. we're watching.",
    messages: [
      { from: "them", text: "we noticed your SEO strategy work on hostiggo. impressive lighthouse score. we're watching." },
      { from: "me", text: "that's either a compliment or a threat, sundar" },
      { from: "them", text: "at google we call it 'indexing'." },
      { from: "me", text: "well tell the crawler the meta tags are fresh and the sitemap is warm." },
    ],
  },
  {
    id: "gordon",
    name: "Gordon Ramsay",
    initials: "GR",
    time: "Friday",
    preview: "FINALLY. some good f***ing frontend.",
    messages: [
      { from: "them", text: "i've seen your portfolio site. the macos desktop concept. the notes app. the dock." },
      { from: "me", text: "and...?" },
      { from: "them", text: "FINALLY. some good f***ing frontend." },
      { from: "me", text: "chef i learned responsive design the way you learned seasoning. repetition and yelling." },
      { from: "them", text: "this UI is so clean i could plate a beef wellington on it. keep it that way." },
    ],
  },
  {
    id: "magnus",
    name: "Magnus Carlsen",
    initials: "MC",
    time: "Thursday",
    preview: "your commit history is the only opening i can't prep for",
    messages: [
      { from: "them", text: "i analyzed your github. your commit history is the only opening i can't prep for." },
      { from: "me", text: "that's because half of it says 'fix', 'fix again', and 'final fix FINAL'" },
      { from: "them", text: "chaotic. unpredictable. i respect it. blitz game while your build compiles?" },
      { from: "me", text: "it's next.js with turbopack, magnus. the build finishes before you castle." },
    ],
  },
];

export const defaultThreadId = "elon";
