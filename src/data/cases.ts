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

const recipeSheet = "/images/generated/signature-recipe-card-sheet.png";

export const caseStudies: CaseStudy[] = [
  {
    id: "dumpling-bar",
    title: "Dumpling Bar",
    tagline: "break-record revenue in 3rd month since signing contract",
    services: ["Growth MKT", "F&B campaign", "Revenue"],
    summary:
      "A growth recipe for turning early campaign momentum into measurable restaurant revenue.",
    image: recipeSheet,
    imagePosition: "0% 0%",
    palette: {
      background: "#fff3dd",
      ink: "#55201f",
      accent: "#b86b51",
    },
    shape: "scallop",
    results: [
      "Focused campaign timing around demand moments",
      "Connected creative testing to revenue signals",
      "Built a repeatable F&B growth rhythm",
    ],
  },
  {
    id: "urban-matcha-san-francisco",
    title: "Urban Matcha San Francisco",
    tagline: "constantly lines queuing up everyday in 2 weeks of Soft Opening",
    services: ["Launch", "Social proof", "Foot traffic"],
    summary:
      "A soft-opening launch story designed to create visible demand and keep the line moving.",
    image: recipeSheet,
    imagePosition: "50% 0%",
    palette: {
      background: "#dfe7d1",
      ink: "#30401f",
      accent: "#7d9556",
    },
    shape: "ticket",
    results: [
      "Positioned the opening around visible demand",
      "Translated queue energy into social proof",
      "Supported launch-period foot traffic",
    ],
  },
  {
    id: "tram-cream-coffee",
    title: "Tram Cream Coffee",
    tagline:
      "successfully communicated for 2 grand opening for new locations that bring instore traffic",
    services: ["Grand opening", "Messaging", "Local reach"],
    summary:
      "A grand-opening communication system for helping new locations become places people notice and visit.",
    image: recipeSheet,
    imagePosition: "100% 0%",
    palette: {
      background: "#d8e3ea",
      ink: "#1f3d54",
      accent: "#2f6f9f",
    },
    shape: "arch",
    results: [
      "Clarified opening messages for new locations",
      "Built local traffic hooks around launch timing",
      "Turned campaign updates into visit intent",
    ],
  },
  {
    id: "bobapop-san-diego",
    title: "BoBaPop San Diego",
    tagline:
      "Rebranding campaign successfully bringing a clearer and unique brand identities",
    services: ["Rebranding", "Brand identity", "Campaign"],
    summary:
      "A rebrand campaign that sharpened the brand's personality and made its identity easier to recognize.",
    image: recipeSheet,
    imagePosition: "0% 100%",
    palette: {
      background: "#f2dfd8",
      ink: "#572421",
      accent: "#c67b9a",
    },
    shape: "notched",
    results: [
      "Defined clearer brand signals",
      "Built a more ownable campaign look",
      "Created a distinct identity system for recall",
    ],
  },
  {
    id: "otay-sushi-and-crab",
    title: "Otay Sushi and Crab",
    tagline: "grow from 0 - 12k followers organically in 8 months",
    services: ["Organic social", "Content growth", "Community"],
    summary:
      "An organic social growth recipe for building audience, recognition, and repeatable content momentum.",
    image: recipeSheet,
    imagePosition: "50% 100%",
    palette: {
      background: "#fff6dd",
      ink: "#3b3422",
      accent: "#d49b45",
    },
    shape: "scallop",
    results: [
      "Built a consistent organic content cadence",
      "Grew the account from zero to 12k followers",
      "Turned visual food appeal into audience momentum",
    ],
  },
  {
    id: "manna-heaven-bbq",
    title: "Manna Heaven BBQ",
    tagline:
      "managing the marketing strategy and campaign of the biggest KBBQ chain in San Diego",
    services: ["Strategy", "Campaign management", "KBBQ chain"],
    summary:
      "A multi-location marketing strategy and campaign-management system for a major KBBQ brand.",
    image: recipeSheet,
    imagePosition: "100% 100%",
    palette: {
      background: "#3a231f",
      ink: "#fff8e9",
      accent: "#e3bc62",
    },
    shape: "ticket",
    results: [
      "Managed campaign strategy across a large local chain",
      "Organized marketing priorities around brand scale",
      "Kept F&B creative tied to business outcomes",
    ],
  },
];
