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

export const caseStudies: CaseStudy[] = [
  {
    id: "dumpling-bar",
    title: "Dumpling Bar Encinitas",
    tagline: "break-record revenue in 3rd month since signing contract",
    services: ["Growth Marketing", "F&B campaign", "Revenue"],
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
    tagline: "2x sales growth after the rebranding campaign",
    services: ["Rebranding", "Product-led storytelling", "Local activation"],
    summary:
      "A rebrand campaign that turned a familiar boba spot into a younger, more dynamic drink destination.",
    image: "/images/projects/bobapop-san-diego/thumbnail.jpg",
    imagePosition: "50% 50%",
    detailHref: "/work/bobapop-san-diego",
    logoPreview: "/images/projects/bobapop-san-diego/logo.png",
    thumbnail: "/images/projects/bobapop-san-diego/thumbnail.jpg",
    palette: {
      background: "#f2dfd8",
      ink: "#572421",
      accent: "#c67b9a",
    },
    shape: "notched",
    results: [
      "Repositioned BoBaPop beyond its original boba identity",
      "Built a hero-product story for stronger differentiation",
      "Expanded awareness through local collaborations",
    ],
  },
  {
    id: "otay-sushi-and-crab",
    title: "Otay Sushi and Crab",
    tagline: "$180K monthly revenue after launching the AYCE menu",
    services: ["AYCE launch", "Product-led messaging", "Organic social"],
    summary:
      "An AYCE menu campaign that turned affordable, high-quality seafood into stronger traffic and long-term sales momentum.",
    image: "/images/projects/otay-sushi-and-crab/thumbnail.jpg",
    imagePosition: "50% 50%",
    detailHref: "/work/otay-sushi-and-crab",
    logoPreview: "/images/projects/otay-sushi-and-crab/logo.png",
    thumbnail: "/images/projects/otay-sushi-and-crab/thumbnail.jpg",
    palette: {
      background: "#fff6dd",
      ink: "#3b3422",
      accent: "#d49b45",
    },
    shape: "scallop",
    results: [
      "Built demand around the AYCE menu launch",
      "Highlighted the signature House Special sauce",
      "Connected product-led messaging to stronger revenue",
    ],
  },
  {
    id: "manna-heaven-bbq",
    title: "Manna Heaven BBQ",
    tagline: "200% revenue growth after 3 months, reaching over $200K",
    services: ["KBBQ positioning", "Multi-location growth", "Social content"],
    summary:
      "A multi-location growth campaign that repositioned Manna Heaven BBQ into an immersive Korean dining experience.",
    image: "/images/projects/manna-heaven-bbq/thumbnail.jpg",
    imagePosition: "50% 50%",
    detailHref: "/work/manna-heaven-bbq",
    logoPreview: "/images/projects/manna-heaven-bbq/logo.png",
    thumbnail: "/images/projects/manna-heaven-bbq/thumbnail.jpg",
    palette: {
      background: "#3a231f",
      ink: "#fff8e9",
      accent: "#e3bc62",
    },
    shape: "ticket",
    results: [
      "Repositioned KBBQ around Korean culture and group dining",
      "Expanded support from one branch to all 6 locations",
      "Turned social content momentum into stronger revenue",
    ],
  },
];
