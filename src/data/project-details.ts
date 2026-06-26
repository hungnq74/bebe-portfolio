export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectVideo = {
  title: string;
  platform: string;
  href: string;
  thumbnail: string;
};

export type ProjectGalleryImage = {
  alt: string;
  caption?: string;
  src: string;
};

export type ProjectDetail = {
  slug: string;
  category: string;
  title: string;
  description: string[];
  logo: string;
  thumbnail: string;
  videoHeading: string;
  videoIntro: string;
  social: {
    label: string;
    href: string;
  };
  metrics: ProjectMetric[];
  gallery?: ProjectGalleryImage[];
  videos: ProjectVideo[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "dumpling-bar-encinitas",
    category: "F&B Growth Campaign",
    title: "Dumpling Bar Encinitas",
    description: [
      "I turned Dumpling Bar Encinitas from a suburban dumpling spot into a local destination brand — growing its social presence from 0 to 11.3K followers organically in 1 year and helping drive real in-store traffic.",
      "Through brand guidelines, organic content strategy, seasonal campaigns, and event proposals, we broke the restaurant’s revenue record by month 3, reached around $150K average monthly revenue, nearly 2x YoY, and renewed the partnership for the third time.",
    ],
    logo: "/images/projects/dumpling-bar/logo.png",
    thumbnail: "/images/projects/dumpling-bar/thumbnail.jpg",
    videoHeading: "Organic reels that served the brand",
    videoIntro:
      "Four short-form edits from the Dumpling Bar content rhythm, designed to make the restaurant feel visit-worthy, familiar, and easy to crave.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/dumplingbarencinitas/",
    },
    metrics: [
      {
        value: "10%",
        label: "Follower monthly growth",
      },
      {
        value: "$150K",
        label: "Average monthly revenue",
      },
      {
        value: "Month 3",
        label: "Revenue record broken",
      },
      {
        value: "3rd time",
        label: "Contract renewed",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DGrtev6yyRn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/dumpling-bar/reel-01.jpg",
      },
      {
        title: "Video 02",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DQcPloFD2M3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/dumpling-bar/reel-02.jpg",
      },
      {
        title: "Video 03",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DQNwLo1ksB1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/dumpling-bar/reel-03.jpg",
      },
      {
        title: "Video 04",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DGR9xfGyvhN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/dumpling-bar/reel-04.jpg",
      },
    ],
  },
  {
    slug: "urban-matcha-castro-valley",
    category: "F&B Soft Opening Campaign",
    title: "Urban Matcha Castro Valley",
    description: [
      "I successfully launched Urban Matcha Castro Valley’s soft opening across social channels, turning a new store launch into early curiosity, walk-ins, and strong sales momentum.",
      "Through market and audience research, I defined the brand’s unique selling points around its signature matcha collection, drink variety, bright visual identity, and energetic tone of voice. I shaped Urban Matcha as more than a daily matcha fix — a place people could come to recharge through fresh drinks, welcoming staff, and a bright cafe atmosphere.",
    ],
    logo: "/images/projects/urban-matcha-castro-valley/logo.png",
    thumbnail: "/images/projects/urban-matcha-castro-valley/thumbnail.jpg",
    videoHeading: "Soft-opening reels that brewed demand",
    videoIntro:
      "Two launch-period edits that introduced the Castro Valley cafe through bright matcha moments, fresh drinks, and the energy of a new daily ritual.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/urbanmatcha.castrovalley/",
    },
    metrics: [
      {
        value: "500/day",
        label: "Items sold during launch",
      },
      {
        value: "2x",
        label: "Performance growth by week two",
      },
      {
        value: "415%",
        label: "Organic social performance growth",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DZaif1oEwzD/?utm_source=ig_web_copy_link",
        thumbnail: "/images/projects/urban-matcha-castro-valley/reel-01.jpg",
      },
      {
        title: "Video 02",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DZxycMJAafX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/urban-matcha-castro-valley/reel-02.jpg",
      },
    ],
  },
  {
    slug: "tram-cream-coffee",
    category: "F&B Content Launch Campaign",
    title: "Tram Cream Coffee",
    description: [
      "I owned the social content execution for a new drink collection launch, supporting the campaign from planning to performance tracking.",
      "My scope included defining the content direction, developing shot lists, editing short-form videos, publishing campaign assets, and monitoring social growth throughout the launch period. The campaign successfully drove organic UGC and eWOM, turning customer reactions into stronger brand engagement and wider awareness for the new collection.",
    ],
    logo: "/images/projects/tram-cream-coffee/logo.png",
    thumbnail: "/images/projects/tram-cream-coffee/thumbnail.png",
    videoHeading: "Short-form edits that stirred engagement",
    videoIntro:
      "Three short-form edits from the new drink collection launch, built to turn product reactions, cafe energy, and customer curiosity into stronger social engagement.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/tramcreamcoffee?igsh=MTdzN285aDZ0eDlucA==",
    },
    metrics: [
      {
        value: "40%",
        label: "Increase in social viewership",
      },
      {
        value: "30%",
        label: "Increase in social engagement",
      },
    ],
    gallery: [
      {
        alt: "Tram Cream Coffee new drink collection campaign image 01",
        src: "/images/projects/tram-cream-coffee/gallery-01.jpg",
      },
      {
        alt: "Tram Cream Coffee new drink collection campaign image 02",
        src: "/images/projects/tram-cream-coffee/gallery-02.jpg",
      },
      {
        alt: "Tram Cream Coffee new drink collection campaign image 03",
        src: "/images/projects/tram-cream-coffee/gallery-03.jpg",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DZgfRt4lsiq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/tram-cream-coffee/reel-01.jpg",
      },
      {
        title: "Video 02",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DYa0ypnqaWZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/tram-cream-coffee/reel-02.jpg",
      },
      {
        title: "Video 03",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DYlX1NPKOtL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/tram-cream-coffee/reel-03.jpg",
      },
    ],
  },
  {
    slug: "bobapop-san-diego",
    category: "F&B Rebranding Campaign",
    title: "BoBaPop San Diego",
    description: [
      "I successfully repositioned BoBaPop San Diego from a familiar boba spot with an outdated brand image into a younger, more dynamic drink destination with clearer differentiation.",
      "The brand was struggling to move beyond its original boba-focused identity and needed a fresher way to connect with local customers. I focused on two main growth strategies.",
      "First, I redefined the brand direction through product-led storytelling. Instead of positioning BoBaPop as just another grab-and-go boba shop, I highlighted the care behind each drink — from ingredient quality and behind-the-scenes drink-making moments to a more energetic, youth-driven visual identity. I also selected a standout signature drink as the hero product to create stronger curiosity, differentiation, and conversion.",
      "Second, I expanded the brand through local collaborations. Since the store was located in an area with many students and young customers, I researched and proposed school events, local activations, and restaurant collaborations to help BoBaPop reach new audience segments, build stronger community awareness, and drive real traffic back to the store.",
    ],
    logo: "/images/projects/bobapop-san-diego/logo.png",
    thumbnail: "/images/projects/bobapop-san-diego/thumbnail.jpg",
    videoHeading: "Rebrand edits that made BoBaPop feel fresh",
    videoIntro:
      "Four edits from the rebranding push, built around product-led storytelling, a signature drink focus, and the local activation momentum that made BoBaPop feel younger and more ownable.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/bobapopsd/?hl=vi",
    },
    metrics: [
      {
        value: "2x",
        label: "Sales growth after rebranding",
      },
      {
        value: "30%",
        label: "Sales increase during activation month",
      },
      {
        value: "Long-tail",
        label: "Positive sales impact continued",
      },
    ],
    gallery: [
      {
        alt: "BoBaPop booth at Asian Culture Event",
        caption: "Asian Culture Event",
        src: "/images/projects/bobapop-san-diego/gallery-asian-culture-booth.jpg",
      },
      {
        alt: "BoBaPop team serving drinks at Asian Culture Event",
        caption: "Asian Culture Event",
        src: "/images/projects/bobapop-san-diego/gallery-asian-culture-service.jpg",
      },
      {
        alt: "BoBaPop matcha drinks at Mokkoji pop up collaboration",
        caption: "Mokkoji Pop Up",
        src: "/images/projects/bobapop-san-diego/gallery-mokkoji-drinks.jpg",
      },
      {
        alt: "BoBaPop and Mokkoji pop up collaboration poster",
        caption: "Mokkoji Pop Up",
        src: "/images/projects/bobapop-san-diego/gallery-mokkoji-poster.jpg",
      },
      {
        alt: "Mokkoji restaurant space during BoBaPop pop up collaboration",
        caption: "Mokkoji Pop Up",
        src: "/images/projects/bobapop-san-diego/gallery-mokkoji-store.jpg",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DZ_c_5tlX0x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/bobapop-san-diego/reel-01.jpg",
      },
      {
        title: "Post 02",
        platform: "Instagram Post",
        href: "https://www.instagram.com/p/DZ6aDQFE7Me/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/bobapop-san-diego/post-02.jpg",
      },
      {
        title: "Video 03",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DUrjgQWj1Vr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/bobapop-san-diego/reel-03.jpg",
      },
      {
        title: "Video 04",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DZoXMtCNyjZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/bobapop-san-diego/reel-04.jpg",
      },
    ],
  },
  {
    slug: "otay-sushi-and-crab",
    category: "F&B AYCE Menu Campaign",
    title: "Otay Sushi and Crab",
    description: [
      "Otay Sushi and Crab grew from a local restaurant into a seafood destination attracting locals, tourists, and influencers.",
      "I built the brand narrative around its core strength: affordable, high-quality seafood boil with a wide variety of sauces, especially the signature House Special sauce that customers loved and associated with the brand. Through customer behavior research and content strategy, I highlighted what made the dining experience craveable, shareable, and worth visiting.",
      "During low season, our team researched, planned, and launched an AYCE menu strategy to increase traffic and revenue. With strong campaign preparation and product-led messaging, the launch helped drive stronger demand and long-term sales momentum.",
    ],
    logo: "/images/projects/otay-sushi-and-crab/logo.png",
    thumbnail: "/images/projects/otay-sushi-and-crab/thumbnail.jpg",
    videoHeading: "Seafood reels that turned AYCE into demand",
    videoIntro:
      "Three edits from the AYCE push, built around House Special sauce, craveable seafood boil moments, and product-led messaging that made the launch feel worth visiting.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/otaysushiandcrab/",
    },
    metrics: [
      {
        value: "$180K",
        label: "Monthly revenue after AYCE launch",
      },
      {
        value: "2x",
        label: "Revenue growth vs. same period last year",
      },
      {
        value: "80–150%",
        label: "Organic social performance growth",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DSWSTiFEVWi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/otay-sushi-and-crab/reel-01.jpg",
      },
      {
        title: "Video 02",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DT1KPpNEpme/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/otay-sushi-and-crab/reel-02.jpg",
      },
      {
        title: "Video 03",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DGrsu5QSTE3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/otay-sushi-and-crab/reel-03.jpg",
      },
    ],
  },
  {
    slug: "manna-heaven-bbq",
    category: "F&B Multi-location Growth Campaign",
    title: "Manna Heaven BBQ",
    description: [
      "Manna Heaven BBQ was a key client project that strengthened both the client’s revenue growth and my company’s portfolio of restaurant marketing results.",
      "Starting with the goal of building awareness for a new branch, I strategically repositioned Manna Heaven BBQ from a standard KBBQ restaurant into an immersive Korean dining experience — a place where customers could enjoy unlimited dishes, Korean-style energy, and a full social dining atmosphere.",
      "By shaping the marketing direction around Korean culture, abundance, and group dining occasions, the campaign helped drive stronger awareness, traffic, and revenue momentum. The success of the initial branch led to the contract being renewed for the third time and expanded the scope from one downtown location to marketing support for all 6 locations.",
    ],
    logo: "/images/projects/manna-heaven-bbq/logo.png",
    thumbnail: "/images/projects/manna-heaven-bbq/thumbnail.jpg",
    videoHeading: "KBBQ edits that made abundance feel social",
    videoIntro:
      "Four edits from the Manna Heaven BBQ push, shaped around Korean culture, unlimited dining, group occasions, and the multi-location momentum behind the brand.",
    social: {
      label: "Instagram",
      href: "https://www.instagram.com/mannaheavenbbq/",
    },
    metrics: [
      {
        value: "200%",
        label: "Revenue growth after 3 months",
      },
      {
        value: "10M",
        label: "Social views generated in 6 months",
      },
      {
        value: "250%",
        label: "Increase in average views",
      },
    ],
    videos: [
      {
        title: "Video 01",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWuxK37jKSi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/manna-heaven-bbq/reel-01.jpg",
      },
      {
        title: "Video 02",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DVpPtb3jnNJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/manna-heaven-bbq/reel-02.jpg",
      },
      {
        title: "Video 03",
        platform: "Instagram Reel",
        href: "https://www.instagram.com/reel/DWcvnHKgNvZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnail: "/images/projects/manna-heaven-bbq/reel-03.jpg",
      },
      {
        title: "Video 04",
        platform: "TikTok",
        href: "https://vm.tiktok.com/ZTBoXXMHs/",
        thumbnail: "/images/projects/manna-heaven-bbq/tiktok-04.jpg",
      },
    ],
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projectDetails.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projectDetails[index - 1] : undefined,
    next:
      index >= 0 && index < projectDetails.length - 1
        ? projectDetails[index + 1]
        : undefined,
  };
}
