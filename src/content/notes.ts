export type Note = {
  id: string;
  emoji: string;
  title: string;
  date: string;
  group: "Pinned" | "Today" | "Previous 7 Days" | "Previous 30 Days" | "Older";
  preview: string;
  // lines starting with "## " render as CAPS section headers;
  // [label](url) renders as a link
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
      "## WHO I AM",
      "i like turning academic knowledge into things that actually ship: real front-ends, real integrations, real users. i've picked that up through startup collaboration and internship work, not just coursework.",
      "## WHAT I'M ON RIGHT NOW",
      "building hostiggo (a community-driven travel platform) and grinding through advanced machine learning coursework on the side — because 'actively learning' should mean something more than a resume bullet.",
      "## WHAT I CARE ABOUT",
      "problem solving, UI/UX sensitivity, API integration, rapid prototyping, and actually finishing what i start.",
      "## OPEN TO",
      "SDE / front-end internships, hackathon teams, and interesting collabs. fastest way to reach me: [aryanarora230506@gmail.com](mailto:aryanarora230506@gmail.com) — or the 💬 hit me note.",
    ],
  },
  {
    id: "now",
    emoji: "📍",
    title: "now",
    date: "Jul 6",
    group: "Today",
    preview: "what i'm actually doing this month...",
    body: [
      "what i'm actually doing right now — updated when it changes.",
      "## SHIPPING",
      "hostiggo — software development intern. current focus: search fixes, backend write services, and getting payments production-ready.",
      "## LEARNING",
      "advanced ML with python & R (udemy) + mathematics for machine learning (imperial college london, coursera).",
      "## TINKERING",
      "this website — a macOS desktop as a portfolio. windows drag, resize, minimize. go on, grab one.",
    ],
  },
  {
    id: "experience",
    emoji: "💼",
    title: "experience",
    date: "Jun 28",
    group: "Today",
    preview: "software development intern @ hostiggo, frontend dev @ HOS...",
    body: [
      "## HOSTIGGO — JAN 2026–PRESENT",
      "software development intern (apprenticeship) on a community-driven travel platform. new delhi · hybrid.",
      "· diagnosed and resolved front-end defects, materially improving stability and UX ahead of launch.",
      "· engineered front-end ↔ back-end database integration, keeping data flow consistent and reliable.",
      "· collaborating directly with the founding team on iterative feature development, UI refinement, and QA.",
      "## HOUSE OF SPORTS — AUG 2024–JAN 2026",
      "frontend developer (internship). delhi · hybrid.",
      "· designed and developed a user-facing, AI-augmented website using modern front-end practices to ship a polished product.",
      "## ARMY PUBLIC SCHOOL — 2023–2024",
      "head boy. led student initiatives, represented the student body, and facilitated school events.",
    ],
  },
  {
    id: "projects",
    emoji: "🛠️",
    title: "projects",
    date: "Jun 26",
    group: "Today",
    preview: "hostiggo, this website, an ai-augmented site, and a python suite...",
    body: [
      "## HOSTIGGO — TRAVEL PLATFORM",
      "community-driven travel platform being built full-stack from the ground up: React Native mobile app, UI/UX design, SEO strategy, QA test suites, and payment integration (Razorpay / PayU).",
      "## THIS WEBSITE",
      "the thing you're looking at — a macOS desktop simulation with a hand-rolled window manager (drag, resize, minimize, zoom) in ~150 lines of pointer-event handling. no window-manager library. [source on github](https://github.com/Aryan-Arora/portfolio).",
      "## AI-AUGMENTED WEBSITE — HOUSE OF SPORTS",
      "designed and deployed a fully functional AI-powered website focused on interface quality and user engagement.",
      "## PYTHON DEVELOPMENT SUITE",
      "personal projects spanning data analysis pipelines, GUI tools, and game development prototypes — more on [my github](https://github.com/Aryan-Arora).",
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
      "## LANGUAGES",
      "Python · JavaScript · C · HTML5/CSS3 · SQL",
      "## FRONT-END",
      "React · Node.js · Responsive Design",
      "## PYTHON",
      "Data Analysis · GUI Development · Game Development · ML Scripting",
      "## DEV PRACTICE",
      "AI-Assisted Development · Git · Database Integration",
      "## CERTIFICATIONS",
      "Claude 101 (Anthropic) · 100 Days of Python (London App Brewery) · React & Node.js (London App Brewery) · C Programming (Udemy)",
      "## IN PROGRESS",
      "Advanced ML with Python & R (Udemy) · Mathematics for Machine Learning (Imperial College London, Coursera)",
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
      "## TECH",
      "AI/ML Developer — Microsoft Student Chapter.",
      "## SPORT",
      "Runner-Up, Western Command Football Tournament (2023–24).",
      "## SCHOOL",
      "Head Boy — Army Public School (2023–24).",
      "All-Rounder Award (2021–22) and Principal's Rolling Trophy (2023–24).",
      "Seven Academic Excellence Badges — Army Public School.",
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
      "## B.TECH — INFORMATION TECHNOLOGY · 2024–2028",
      "Maharaja Surajmal Institute of Technology (MSIT), IP University, New Delhi. currently in 2nd year.",
      "## CLASS XII — SCIENCE (CBSE) · 2024",
      "Army Public School, Dhaula Kuan, New Delhi.",
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
      "## EMAIL",
      "[aryanarora230506@gmail.com](mailto:aryanarora230506@gmail.com)",
      "## EVERYWHERE ELSE",
      "[linkedin](https://www.linkedin.com/in/aryan-arora-a9281a319) · [github](https://github.com/Aryan-Arora) · or the apps in the dock below.",
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
