export type CaseStudy = {
  id: string;
  title: string;
  tagline: string;
  services: string[];
  summary: string;
  image: string;
  imagePosition: string;
  palette: {
    background: string;
    ink: string;
    accent: string;
  };
  shape: "ticket" | "arch" | "scallop" | "notched";
  results: string[];
};

const thumbnailSheet = "/images/generated/case-thumbnail-sheet.png";

export const caseStudies: CaseStudy[] = [
  {
    id: "oaten",
    title: "Oaten",
    tagline: "Breakfast brand campaign for a pantry staple with personality.",
    services: ["Brand campaign", "Content strategy", "Launch copy"],
    summary:
      "A cozy launch system that turned plain oats into a morning ritual with modular recipe stories, social hooks, and packaging language.",
    image: thumbnailSheet,
    imagePosition: "0% 0%",
    palette: {
      background: "#f8ead4",
      ink: "#5b2524",
      accent: "#d76499",
    },
    shape: "scallop",
    results: [
      "Built a 4-week content menu",
      "Defined the warm pantry voice",
      "Mapped creator-friendly recipe prompts",
    ],
  },
  {
    id: "han-bakery",
    title: "Han Bakery",
    tagline: "A lunch campaign with hand-held charm and clean conversion paths.",
    services: ["Branding", "Packaging", "Social launch"],
    summary:
      "A tactile identity refresh for a small bakery line, pairing ingredient-led visuals with practical launch posts and menu-card offers.",
    image: thumbnailSheet,
    imagePosition: "50% 0%",
    palette: {
      background: "#55663d",
      ink: "#fff8e9",
      accent: "#e3bc62",
    },
    shape: "ticket",
    results: [
      "Created a launchable content rhythm",
      "Designed offer-led menu cards",
      "Clarified product naming",
    ],
  },
  {
    id: "almond-hour",
    title: "Almond Hour",
    tagline: "A boutique pastry concept built for search, saves, and repeat visits.",
    services: ["Branding", "SEO content", "Email flow"],
    summary:
      "A refined pastry story system with searchable product pages, evergreen email moments, and illustrated marks for seasonal drops.",
    image: thumbnailSheet,
    imagePosition: "100% 0%",
    palette: {
      background: "#fff8ee",
      ink: "#321716",
      accent: "#2f6f9f",
    },
    shape: "arch",
    results: [
      "Outlined SEO-friendly product stories",
      "Built a welcome email flow",
      "Created seasonal drop messaging",
    ],
  },
  {
    id: "avgi-pilates",
    title: "Avgi Pilates",
    tagline: "A wellness brand system that feels balanced, precise, and human.",
    services: ["Wellness brand", "Paid social", "Landing page"],
    summary:
      "A calm visual and messaging direction that translated studio benefits into simple proof points, offers, and retention touchpoints.",
    image: thumbnailSheet,
    imagePosition: "0% 100%",
    palette: {
      background: "#c6d6df",
      ink: "#1d3947",
      accent: "#7d96aa",
    },
    shape: "arch",
    results: [
      "Clarified the new-member journey",
      "Created offer testing angles",
      "Built retention content pillars",
    ],
  },
  {
    id: "zest-fizz",
    title: "Zest & Fizz",
    tagline: "A sparkling drink launch with botanical bite and shelf energy.",
    services: ["Brand identity", "Product launch", "Retail copy"],
    summary:
      "A bright launch kit for a citrus drink line, blending ingredient education, retail language, and scroll-stopping social assets.",
    image: thumbnailSheet,
    imagePosition: "50% 100%",
    palette: {
      background: "#fff2c7",
      ink: "#3f4d30",
      accent: "#caa13c",
    },
    shape: "scallop",
    results: [
      "Named the launch content lanes",
      "Wrote retail shelf claims",
      "Designed sampling prompts",
    ],
  },
  {
    id: "denim-district",
    title: "Denim District",
    tagline: "A style test bed for performance creative that still has taste.",
    services: ["Performance media", "Creative testing", "Offer strategy"],
    summary:
      "A testable campaign library for a denim label, connecting product fit stories with creative variants and clear learning goals.",
    image: thumbnailSheet,
    imagePosition: "100% 100%",
    palette: {
      background: "#d7e0e6",
      ink: "#123052",
      accent: "#9b6a32",
    },
    shape: "notched",
    results: [
      "Built a 12-angle creative matrix",
      "Paired offers with fit concerns",
      "Set weekly learning questions",
    ],
  },
  {
    id: "quest-installs",
    title: "Quest Installs",
    tagline: "A playful growth loop for a game launch with better onboarding.",
    services: ["UA strategy", "Creative analytics", "LTV optimization"],
    summary:
      "A game-growth concept that turns player motivation into creative themes, onboarding beats, and a clearer performance dashboard.",
    image: "/images/generated/paper-stamp-texture.png",
    imagePosition: "50% 50%",
    palette: {
      background: "#241832",
      ink: "#f8efe1",
      accent: "#8c65d8",
    },
    shape: "ticket",
    results: [
      "Mapped player motivation hooks",
      "Defined creative naming rules",
      "Outlined metric review rituals",
    ],
  },
];
