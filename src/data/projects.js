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

// Infinite-Scroll demo images
import scroll1 from "../assets/infiniteScroll/scroll-1.png";
import scroll2 from "../assets/infiniteScroll/scroll-2.png";
import scroll3 from "../assets/infiniteScroll/scroll-3.png";
import scroll4 from "../assets/infiniteScroll/scroll-4.png";

export const projectsData = [
  {
    name: "✂️ Fade & Blade Barbers",
    description:
      "A sleek barbershop appointment system that simulates a modern grooming experience. This app features smooth UI interactions, dynamic selections, and thoughtful validation. \n\n Key Features: \n · Book appointments with available barbers. \n · Select services, time, and date. \n · Clean and focused modal design.",
    images: [fadeAndBlade1, fadeAndBlade2, fadeAndBlade3, fadeAndBlade4],
    netlify: "https://fade-and-blade.netlify.app/",
    github: "https://github.com/KestutisRuockus/barber-saloon",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    name: "Estate landing page",
    description:
      "A modern, responsive landing page for a real estate business. This single-page application is designed to showcase key information, highlight recent projects, and provide an easy way for potential clients to get in touch. \n\n Key Features: \n · Highlights recent projects and business offerings. \n · Clean, modern, and responsive design. \n · User-friendly contact options.",
    images: [estate1, estate2, estate3, estate4],
    netlify: "https://landing-page-real-estate.netlify.app/",
    github: "https://github.com/KestutisRuockus/real-estate",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    name: "FriendFeed",
    description:
      "A social media app with Firebase authentication. Users can log in, create, edit, and delete posts, interact with comments, and chat with others. \n\n Key Features: \n · Firebase authentication with email/password login. \n · Create, edit, and delete posts with images. \n · Dynamic messaging system with responsive design.",
    images: [
      friendFeedLogin,
      friendfeedHomePage,
      friendfeedCreatePost,
      friendfeedResponsiveDesign,
    ],
    netlify: "https://friendfeed.netlify.app/",
    github: "https://github.com/KestutisRuockus/FriendsFeed",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Firebase",
        icon: "",
        color: "",
        imgUrl: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
      },
    ],
  },
  {
    name: "Clothes E-Shop",
    description:
      "An e-commerce app for browsing a clothing catalog, with product search, filtering, shopping cart, and checkout. Data is saved to localStorage for continuity. \n\n Key Features: \n · Browse by product categories and subcategories. \n · Search and filter products. \n · Persistent shopping cart with localStorage.",
    images: [eShop1, eShop2, eShop3, eShop4],
    netlify: "https://clothes-e-shop.netlify.app/",
    github: "https://github.com/KestutisRuockus/clothes-e-shop",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    name: "Movies Discovery",
    description:
      "An app for discovering movies using the TMDB API. Users can browse by genre, view top-rated and popular movies, and save favorites. \n\n Key Features: · Browse movies by genre and popularity. \n · Save favorite movies for later viewing. \n · Fast, dynamic content loading.",
    images: [tmdb1, tmdb2, tmdb3, tmdb4],
    netlify: "https://tmdb-discovery.netlify.app/",
    github: "https://github.com/KestutisRuockus/TMDB",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Rest-API",
        icon: "",
        color: "",
        imgUrl:
          "https://img.icons8.com/?size=100&id=55497&format=png&color=000000",
      },
    ],
  },
  {
    name: "Infinite Scroll",
    description:
      "An app that uses the Flickr API and implements infinite scrolling for a smooth image browsing experience. Users can favorite images and view them later. \n\n Key Features: \n · Lazy loading for optimal performance. \n · Mark and save favorite images. \n · Dynamic photo loading as you scroll.",
    images: [scroll1, scroll2, scroll3, scroll4],
    netlify: "https://infinite-scroll-react-typescript.netlify.app/",
    github: "https://github.com/KestutisRuockus/assignment",
    techStack: [
      { name: "React", icon: "fa-brands fa-react", color: "text-blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      { name: "CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-600" },
      {
        name: "Rest-API",
        icon: "",
        color: "",
        imgUrl:
          "https://img.icons8.com/?size=100&id=55497&format=png&color=000000",
      },
    ],
  },
];
