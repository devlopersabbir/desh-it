export const dishMenu = [
  {
    image: "/bison-burger-lg.jpg",
    name: "Chicken Wings",
    size: "large",
    info: "Crispy and juicy wings, tossed in your favorite sauce.",
    price: 350,
  },
  {
    image: "/beef-burger-lg.jpg",
    name: "Beef Burger",
    size: "regular",
    info: "Stack your buns with cheese, bacon, lettuce and more.",
    price: 432,
  },
  {
    image: "/black-bean-burger-lg.jpg",
    name: "Popcorn Chicken",
    size: "small",
    info: "Golden crispy popcorn chicken pieces, perfect for a snack.",
    price: 250,
  },
  {
    image: "/elk-burger-lg.jpg",
    name: "Classic Fries",
    size: "medium",
    info: "Crispy fries with a pinch of sea salt.",
    price: 120,
  },
  {
    image: "/beef-burger-lg.jpg",
    name: "Veggie Burger",
    size: "regular",
    info: "A vegetarian delight with a savory patty and fresh veggies.",
    price: 350,
  },
];
export type DishMenu = (typeof dishMenu)[0];
