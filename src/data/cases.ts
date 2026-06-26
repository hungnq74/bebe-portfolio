export type CaseStudy = {
  id: string;
  title: string;
  tagline: string;
  services: string[];
  summary: string;
  image: string;
  imagePosition: string;
  detailHref?: string;
  logoPreview?: string;
  thumbnail?: string;
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
    title: "Dumpling Bar Encinitas",
    tagline: "break-record revenue in 3rd month since signing contract",
    services: ["Growth MKT", "F&B campaign", "Revenue"],
    summary:
      "A growth recipe for turning early campaign momentum into measurable restaurant revenue.",
    image: "/images/projects/dumpling-bar/thumbnail.jpg",
    imagePosition: "50% 50%",
    detailHref: "/work/dumpling-bar-encinitas",
    logoPreview: "/images/projects/dumpling-bar/logo.png",
    thumbnail: "/images/projects/dumpling-bar/thumbnail.jpg",
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
    id: "urban-matcha-castro-valley",
    title: "Urban Matcha Castro Valley",
    tagline: "500 items sold per day during the launch period",
    services: ["Soft opening", "Organic social", "Walk-ins"],
    summary:
      "A bright soft-opening launch that turned a new matcha cafe into early curiosity, walk-ins, and strong sales momentum.",
    image: "/images/projects/urban-matcha-castro-valley/thumbnail.jpg",
    imagePosition: "50% 50%",
    detailHref: "/work/urban-matcha-castro-valley",
    logoPreview: "/images/projects/urban-matcha-castro-valley/logo.png",
    thumbnail: "/images/projects/urban-matcha-castro-valley/thumbnail.jpg",
    palette: {
      background: "#dfe7d1",
      ink: "#30401f",
      accent: "#7d9556",
    },
    shape: "ticket",
    results: [
      "Defined matcha-focused launch positioning",
      "Translated bright brand energy into walk-ins",
      "Built social momentum during the soft opening",
    ],
  },
  {
    id: "tram-cream-coffee",
    title: "Tram Cream Coffee",
    tagline: "new drink collection launch with stronger organic engagement",
    services: ["Content launch", "UGC", "eWOM"],
    summary:
      "A new drink collection launch that turned shot lists, short-form edits, and customer reactions into stronger social engagement.",
    image: "/images/projects/tram-cream-coffee/thumbnail.png",
    imagePosition: "50% 50%",
    detailHref: "/work/tram-cream-coffee",
    logoPreview: "/images/projects/tram-cream-coffee/logo.png",
    thumbnail: "/images/projects/tram-cream-coffee/thumbnail.png",
    palette: {
      background: "#f2e9df",
      ink: "#1f3d54",
      accent: "#d58a78",
    },
    shape: "arch",
    results: [
      "Defined content direction for a new collection",
      "Turned customer reactions into UGC and eWOM",
      "Tracked launch-period social growth",
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
