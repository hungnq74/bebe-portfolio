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
