export type PrimaryJobId = "fortune" | "zalo" | "gohub";

export type PrimaryJobDetail = {
  title: string;
  body: string;
  featured?: boolean;
};

export type PrimaryJobMetric = {
  value: string;
  label: string;
  note?: string;
};

export type PrimaryJob = {
  id: PrimaryJobId;
  company: string;
  shortName: string;
  role: string;
  intro: string;
  visual: {
    decor: string;
    logo: string;
    logoAlt: string;
  };
  theme: {
    background: string;
    ink: string;
    accent: string;
  };
  kind: "recipes" | "story";
  details: PrimaryJobDetail[];
  metrics: PrimaryJobMetric[];
};

export const defaultPrimaryJobId: PrimaryJobId = "fortune";

export const primaryJobs: PrimaryJob[] = [
  {
    id: "fortune",
    company: "Fortune Marketing Group",
    shortName: "Fortune",
    role: "Senior Account Manager",
    intro:
      "I'm growing from a Marketing Intern into a Senior Account Manager in 1 year, currently playing as a core member, handling key clients and holding 10 accounts.",
    visual: {
      decor: "/images/generated/primary-job-fortune-card.png",
      logo: "/images/logos/fortune-marketing-group.jpeg",
      logoAlt: "Fortune Marketing Group logo",
    },
    theme: {
      background: "#fff3dd",
      ink: "#55201f",
      accent: "#b86b51",
    },
    kind: "recipes",
    details: [
      {
        title: "Account growth",
        body: "A core role across key F&B clients, connecting campaign planning, creative direction, content rhythm, and revenue-minded account management.",
      },
      {
        title: "Recipe menu",
        body: "Six selected F&B case cards show how strategy, experiments, and brand taste translate into visible business results.",
      },
    ],
    metrics: [
      {
        value: "10",
        label: "Accounts",
        note: "Key clients held across the F&B portfolio.",
      },
      {
        value: "1 Year",
        label: "Growth Path",
        note: "Marketing Intern to Senior Account Manager.",
      },
      {
        value: "Key",
        label: "F&B Clients",
        note: "Core member across selected restaurant brands.",
      },
    ],
  },
  {
    id: "zalo",
    company: "Zalo",
    shortName: "Zalo",
    role: "Product Growth",
    intro:
      "I supported digital marketing for Zalo Games, primarily planning and executing marketing direction for key game titles, including campaign planning, P&L planning, and performance optimization.",
    visual: {
      decor: "/images/generated/primary-job-zalo-card.png",
      logo: "/images/logos/zalo.webp",
      logoAlt: "Zalo logo",
    },
    theme: {
      background: "#d8e9ff",
      ink: "#10345e",
      accent: "#0b72f6",
    },
    kind: "story",
    details: [
      {
        title: "Campaign Summary",
        body: "The game was launched as a Zalo Mini App, with traffic limited to Zalo's internal ecosystem. To scale user acquisition and drive revenue growth, I planned and executed the digital marketing strategy for paid boosting within the platform.",
        featured: true,
      },
      {
        title: "P&L Planning",
        body: "I planned campaign profitability and growth potential based on the assigned budget, building projections for user acquisition, revenue contribution, long-term profit impact, and budget allocation across awareness, retargeting, and conversion flows.",
      },
      {
        title: "Planning & Execution",
        body: "I conducted market and competitor research to identify relevant trends, target users, and creative directions, then worked with designers and internal teams to finalize campaign materials and set up campaigns across advertising platforms.",
      },
      {
        title: "Tracking & Optimization",
        body: "I monitored performance closely, optimized budget allocation in real time, and created my own reporting dashboard to track growth, performance trends, and key business metrics for faster campaign decisions.",
      },
    ],
    metrics: [
      {
        value: "~14K",
        label: "NRU Acquired",
        note: "New registered users from paid boosting.",
      },
      {
        value: "142%",
        label: "ROAS",
        note: "After 2 months of campaign optimization.",
      },
      {
        value: "~20%",
        label: "Game Revenue Lift",
        note: "Revenue increase inside the Zalo ecosystem.",
      },
    ],
  },
  {
    id: "gohub",
    company: "Gohub",
    shortName: "Gohub",
    role: "Growth Marketing Executive",
    intro:
      "I worked across product, content, and digital growth to improve both user experience and acquisition performance for the Gohub eSIM travel app.",
    visual: {
      decor: "/images/generated/primary-job-gohub-card.png",
      logo: "/images/logos/gohub-logo.png",
      logoAlt: "Gohub logo",
    },
    theme: {
      background: "#e3eefc",
      ink: "#172f68",
      accent: "#183bb2",
    },
    kind: "story",
    details: [
      {
        title: "Product & UX Optimization",
        body: "I optimized in-app operations and supported the website revamp by streamlining the customer journey, refining UX/UI flows, and improving visual and content features, creating a smoother path to conversion.",
      },
      {
        title: "Cross-channel Growth",
        body: "I executed digital growth strategies across content planning and KOL partnerships to grow brand visibility, improve organic performance, and support acquisition across social channels.",
      },
      {
        title: "Reporting & Partnerships",
        body: "I analyzed digital performance, produced reports, proposed data-driven growth strategies, and created pitch decks, blog articles, and partnership materials for collaborations with Vietcetera, ZaloPay, and China Unicom.",
      },
    ],
    metrics: [
      {
        value: "15%",
        label: "Conversion Rate Lift",
        note: "After UX/UI and journey optimization.",
      },
      {
        value: "40%",
        label: "Organic Reach Lift",
        note: "Through cross-channel growth strategy.",
      },
      {
        value: "30%",
        label: "Follower Growth",
        note: "In 3 months through content and KOL planning.",
      },
    ],
  },
];
