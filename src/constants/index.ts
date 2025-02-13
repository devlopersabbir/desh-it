export const menuItem = [
  "home",
  "about",
  "chef",
  "menus",
  "gallery",
  "reservation",
  "contact",
];

export const slideItem = [
  {
    image: "/burger.png",
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    off: 20,
  },
  {
    image: "/pizza.png",
    title: "Tasty Pizza",
    description:
      "Aenean vel turpis et magna posuere gravida. Nunc eget erat sapien, id facilisis risus.",
    off: 15,
  },
  {
    image: "/tortilla.png",
    title: "Fresh Pasta",
    description:
      "Mauris vitae nunc ac enim dignissim viverra non et eros. Nulla facilisi. Aliquam erat volutpat.",
    off: 10,
  },
  {
    image: "/burger.png",
    title: "Exquisite Sushi",
    description:
      "Sed viverra, felis non tempus porttitor, dui odio efficitur lectus, ut cursus elit mi ac augue.",
    off: 25,
  },
  {
    image: "/pizza.png",
    title: "Healthy Salad",
    description:
      "Curabitur mollis tincidunt felis sit amet ultricies. Integer facilisis massa in neque tempor, quis tristique arcu iaculis.",
    off: 30,
  },
];

export type SlideItem = (typeof slideItem)[0];
export const dishMenuItem = ["Burger", "Pizza", "Salad", "Soup", "Drinks"];

export * from "./dish";
export * from "./chef";
