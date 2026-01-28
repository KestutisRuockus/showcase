// CryptoMania demo images
import chordly1 from "../assets/chordly/chordly1.png";
import chordly2 from "../assets/chordly/chordly2.png";
import chordly3 from "../assets/chordly/chordly3.png";
import chordly4 from "../assets/chordly/chordly4.png";

// Infinite Scroll demo images
import fha1 from "../assets/fha/fha1.png";
import fha2 from "../assets/fha/fha2.png";
import fha3 from "../assets/fha/fha3.png";
import fha4 from "../assets/fha/fha4.png";

// CryptoMania demo images
import cryptoMania1 from "../assets/cryptoMania/cryptomania-1.png";
import cryptoMania2 from "../assets/cryptoMania/cryptomania-2.png";
import cryptoMania3 from "../assets/cryptoMania/cryptomania-3.png";
import cryptoMania4 from "../assets/cryptoMania/cryptomania-4.png";

// Fade & Blade barbers saloon demo images
import fadeAndBlade1 from "../assets/fadeAndBlade/fadeAndBlade1.png";
import fadeAndBlade2 from "../assets/fadeAndBlade/fadeAndBlade2.png";
import fadeAndBlade3 from "../assets/fadeAndBlade/fadeAndBlade3.png";
import fadeAndBlade4 from "../assets/fadeAndBlade/fadeAndBlade4.png";

// Estate landing page demo images
import estate1 from "../assets/estate/estate1.png";
import estate2 from "../assets/estate/estate2.png";
import estate3 from "../assets/estate/estate3.png";
import estate4 from "../assets/estate/estate4.png";

// FriendFeed demo images
import friendFeedLogin from "../assets/friendFeed/FriendFeed-login.png";
import friendfeedHomePage from "../assets/friendFeed/FriendFeed-home-page.png";
import friendfeedCreatePost from "../assets/friendFeed/FriendFeed-create-post.png";
import friendfeedResponsiveDesign from "../assets/friendFeed/FriendFeed-responsive-design.png";

// E-Shop demo images
import eShop1 from "../assets/eshop/e-shop-1.png";
import eShop2 from "../assets/eshop/e-shop-2.png";
import eShop3 from "../assets/eshop/e-shop-3.png";
import eShop4 from "../assets/eshop/e-shop-4.png";

// TMDB demo images
import tmdb1 from "../assets/tmdb/TMDB-1.png";
import tmdb2 from "../assets/tmdb/TMDB-2.png";
import tmdb3 from "../assets/tmdb/TMDB-3.png";
import tmdb4 from "../assets/tmdb/TMDB-4.png";

export const projectsData = [
  {
    name: "Chordly - SaaS ( In Development )",
    description:
      "Chordly is a SaaS platform that connects music teachers and students, enabling lesson booking, progress tracking, and practice management through role-based dashboards.",
    images: [chordly1, chordly2, chordly3, chordly4],
    netlify: "https://chordly-tau.vercel.app/",
    github: "https://github.com/KestutisRuockus/chordly",
    mainStack: [
      {
        name: "Next.js",
        icon: "",
        color: "",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
      },
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    supportingTech: [
      "Clerk (Authentication)",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
    ],
  },
  {
    name: "🖼️ Infinite Scroll Gallery",
    description:
      "An image browsing application that focuses on performance and user experience, featuring infinite scrolling, search functionality, and persistent favourites storage.",
    images: [fha1, fha2, fha3, fha4],
    netlify: "https://deluxe-cat-a2faff.netlify.app/",
    github: "https://github.com/KestutisRuockus/fha",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "CSS",
        icon: "fa-brands fa-css3-alt",
        color: "text-blue-600",
      },
    ],

    supportingTech: [
      "Vite (Build Tool)",
      "Vitest (Testing)",
      "Pexels API (External Data)",
      "LocalStorage (Persistent State)",
    ],
  },
  {
    name: "✂️ Fade & Blade Barbers",
    description:
      "A modern barbershop appointment app that allows users to book services, select barbers, and choose available time slots through a clean and interactive UI.",
    images: [fadeAndBlade1, fadeAndBlade2, fadeAndBlade3, fadeAndBlade4],
    netlify: "https://fade-and-blade.netlify.app/",
    github: "https://github.com/KestutisRuockus/barber-saloon",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: ["Framer Motion (Animations)", "Font Awesome (Icons)"],
  },
  {
    name: "₿ CryptoMania",
    description:
      "A cryptocurrency explorer that allows users to browse, search, and track global coins, view real-time prices and trends, and manage favorites through a clean and responsive UI.",
    images: [cryptoMania1, cryptoMania2, cryptoMania3, cryptoMania4],
    netlify: "https://calm-shortbread-41b583.netlify.app/",
    github: "https://github.com/KestutisRuockus/cryptomania",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: [
      "Vite (Build Tool)",
      "Axios (HTTP Client)",
      "REST API (External Data)",
    ],
  },
  {
    name: "🛍️ Clothes E-Shop",
    description:
      "A simple e-commerce application for browsing clothing products, filtering by categories, and managing a persistent shopping cart through a clean and responsive interface.",
    images: [eShop1, eShop2, eShop3, eShop4],
    netlify: "https://clothes-e-shop.netlify.app/",
    github: "https://github.com/KestutisRuockus/clothes-e-shop",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: [
      "React Router (Routing)",
      "LocalStorage (Persistent Cart)",
    ],
  },
  {
    name: "💬 FriendFeed",
    description:
      "A social media application that allows users to authenticate, create and manage posts, interact through comments, and communicate via a real-time messaging interface.",
    images: [
      friendFeedLogin,
      friendfeedHomePage,
      friendfeedCreatePost,
      friendfeedResponsiveDesign,
    ],
    netlify: "https://friendfeed.netlify.app/",
    github: "https://github.com/KestutisRuockus/FriendsFeed",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: [
      "Firebase (Authentication & Data)",
      "React Router (Routing)",
    ],
  },
  {
    name: "🏡 Estate Landing Page",
    description:
      "A responsive real estate landing page designed to present business services, showcase recent projects, and provide clear contact options through a clean and modern layout.",
    images: [estate1, estate2, estate3, estate4],
    netlify: "https://landing-page-real-estate.netlify.app/",
    github: "https://github.com/KestutisRuockus/real-estate",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "TypeScript",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: ["Framer Motion (Animations)"],
  },
  {
    name: "🎬 Movies Discovery",
    description:
      "A movie discovery application that allows users to explore popular and top-rated films, browse by genre, and save favorites using data from the TMDB API.",
    images: [tmdb1, tmdb2, tmdb3, tmdb4],
    netlify: "https://tmdb-discovery.netlify.app/",
    github: "https://github.com/KestutisRuockus/TMDB",

    mainStack: [
      {
        name: "React",
        icon: "fa-brands fa-react",
        color: "text-blue-400",
      },
      {
        name: "Tailwind CSS",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],

    supportingTech: [
      "TMDB API (External Movie Data)",
      "REST API (Data Fetching)",
    ],
  },
];
