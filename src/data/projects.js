// E-Shop demo images
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
    name: "FriendFeed",
    description:
      "An application with Firebase authentication that allows users to log in using email and password, with login state remembered until the user logs out. It includes a profile editing feature where users can update their information and profile picture. Users can create, edit, and delete posts, including images that are automatically compressed for optimized storage. Posts can only be edited or deleted by their author, while other users can comment and react with 'like' or 'dislike'. Comments can be edited only by their author, but both the comment and post authors can delete them. The app also integrates a dynamic messaging system that adjusts the number of active chat windows based on screen size. Remaining conversations are moved to a dropdown list, making it easier to manage. Selecting a chat from the list activates the chat and opens the messaging interface.",
    images: [
      friendFeedLogin,
      friendfeedHomePage,
      friendfeedCreatePost,
      friendfeedResponsiveDesign,
    ],
    netlify: "https://friendfeed.netlify.app/",
    github: "https://github.com/KestutisRuockus/FriendsFeed",
    techStack: [
      { name: "JS", icon: "fa-brands fa-js", color: "text-yellow-400" },
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
      "An e-commerce application that enables users to browse a clothing catalog by categories and subcategories. Key functionalities include product search, filtering, and a shopping cart, with cart data persisted in localStorage for continuity across page reloads. A checkout form collects order details, and all product information is stored in a JSON file for easy management and future scalability.",
    images: [eShop1, eShop2, eShop3, eShop4],
    netlify: "https://clothes-e-shop.netlify.app/",
    github: "https://github.com/KestutisRuockus/clothes-e-shop",
    techStack: [
      { name: "JS", icon: "fa-brands fa-js", color: "text-yellow-400" },
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
      "An online application that enables users to discover and browse a movie catalog using the TMDB (The Movie Database) API. The app features genre-based search and provides lists of top-rated, popular, and upcoming movies. Users can save their favorite movies for later access. The movie data is dynamically processed and displayed, ensuring a fast and seamless browsing experience.",
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
      "An application that uses the Flickr API and implements lazy loading (infinite scroll) for a smooth browsing experience. Images are loaded only when the user scrolls down, dynamically fetching new photos as needed, which optimizes performance and reduces unnecessary server requests. Users can mark images as favorites, which are saved and displayed in the 'My Favorite List' section for easy access.",
    images: [scroll1, scroll2, scroll3, scroll4],
    netlify: "https://infinite-scroll-react-typescript.netlify.app/",
    github: "https://github.com/KestutisRuockus/assignment",
    techStack: [
      { name: "JS", icon: "fa-brands fa-js", color: "text-yellow-400" },
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
