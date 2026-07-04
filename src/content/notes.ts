export type Note = {
  id: string;
  emoji: string;
  title: string;
  date: string;
  group: "Pinned" | "Today" | "Previous 7 Days" | "Previous 30 Days" | "Older";
  preview: string;
  body: string[];
};

export const notes: Note[] = [
  {
    id: "about-me",
    emoji: "👋",
    title: "about me",
    date: "Jul 1",
    group: "Pinned",
    preview: "hi, i'm aryan. a front-end dev, python dev, and ai/ml...",
    body: [
      "hi, i'm aryan. front-end developer, python developer, and ai/ml enthusiast — currently a 2nd-year B.Tech IT student at MSIT, IP University, New Delhi.",
      "i like turning academic knowledge into things that actually ship: real front-ends, real integrations, real users. i've picked that up through startup collaboration and internship work, not just coursework.",
      "right now i'm deep in advanced machine learning coursework on the side, because 'actively learning' should mean something more than a resume bullet.",
      "core stuff i care about: problem solving, UI/UX sensitivity, API integration, rapid prototyping, and actually finishing what i start.",
    ],
  },
  {
    id: "experience",
    emoji: "💼",
    title: "experience",
    date: "Jun 28",
    group: "Today",
    preview: "front-end developer & integration engineer, stealth startup...",
    body: [
      "Front-End Developer & Integration Engineer — Stealth-Mode Startup (Mobile Application), 2024 – Present",
      "· diagnosed and resolved front-end defects, materially improving stability and UX ahead of launch.",
      "· engineered front-end ↔ back-end database integration, keeping data flow consistent and reliable.",
      "· collaborated directly with the founding team on iterative feature development, UI refinement, and QA.",
      "Web Development Intern — House of Sports (HOS), 2024",
      "· designed and developed a user-facing, AI-augmented website using modern front-end practices to ship a polished product.",
    ],
  },
  {
    id: "projects",
    emoji: "🛠️",
    title: "projects",
    date: "Jun 26",
    group: "Today",
    preview: "hostiggo, an ai-augmented website, and a personal python suite...",
    body: [
      "Hostiggo — Community-Driven Travel Platform. building this full-stack from the ground up: React Native mobile app, UI/UX design, SEO strategy, QA test suites, and payment integration (Razorpay / PayU).",
      "AI-Augmented Website — House of Sports. designed and deployed a fully functional AI-powered website focused on interface quality and user engagement.",
      "Mobile Application (Pre-Launch) — Stealth Startup. resolved critical front-end defects and implemented database integration in a production-grade app ahead of launch.",
      "Python Development Suite — personal projects spanning data analysis pipelines, GUI tools, and game development prototypes.",
    ],
  },
  {
    id: "skills",
    emoji: "🧰",
    title: "skills & certifications",
    date: "Jun 24",
    group: "Previous 7 Days",
    preview: "python, js, c, react, node — plus a stack of certifications...",
    body: [
      "Languages: Python · JavaScript · C · HTML5/CSS3 · SQL",
      "Front-End: React · Node.js · Responsive Design",
      "Python: Data Analysis · GUI Development · Game Development · ML Scripting",
      "Dev Practice: AI-Assisted Development · Git · Database Integration",
      "Certifications: Claude 101 (Anthropic) · 100 Days of Python (London App Brewery) · React & Node.js (London App Brewery) · C Programming (Udemy)",
      "In progress: Advanced ML with Python & R (Udemy) · Mathematics for Machine Learning (Imperial College London, Coursera)",
    ],
  },
  {
    id: "achievements",
    emoji: "🏆",
    title: "achievements",
    date: "Jun 12",
    group: "Previous 30 Days",
    preview: "AI/ML developer at the microsoft student chapter, plus a few...",
    body: [
      "AI/ML Developer — Microsoft Student Chapter.",
      "Runner-Up, Western Command Football Tournament (2023–24).",
      "All-Rounder Award (2021–22) and Principal's Rolling Trophy (2023–24).",
      "Seven Academic Excellence Badges — Army Public School.",
      "Head Boy — Army Public School (2023–24).",
    ],
  },
  {
    id: "education",
    emoji: "🎓",
    title: "education",
    date: "Jun 20",
    group: "Previous 30 Days",
    preview: "B.Tech IT at MSIT, IP University — currently 2nd year...",
    body: [
      "B.Tech — Information Technology (2nd Year), 2024 – 2028",
      "Maharaja Surajmal Institute of Technology (MSIT), IP University, New Delhi",
      "Class XII — Science Stream (CBSE), 2024",
      "Army Public School, Dhaula Kuan, New Delhi",
    ],
  },
  {
    id: "hit-me",
    emoji: "💬",
    title: "hit me",
    date: "May 30",
    group: "Older",
    preview: "if you made it this far, say hi...",
    body: [
      "if you made it this far, say hi — always up for talking about hostiggo, front-end work, or whatever ML thing i'm mid-course on.",
      "email: aryanarora230506@gmail.com",
      "or find me on the links in the dock below.",
    ],
  },
];

export const groupOrder: Note["group"][] = [
  "Pinned",
  "Today",
  "Previous 7 Days",
  "Previous 30 Days",
  "Older",
];
