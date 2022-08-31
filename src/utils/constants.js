import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our Mission is to provide quality products to choose from our large selection of items and providing the best customer experience for the buyer. ",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "As nowdays most of the stuff people buy seem similar to one another what we envision our stuff to be is fresh and not seen before while provding the top tier quality. ",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We Are established since 2012 and have been fulfilling the demands of people across from various countries and reigons for over a decade now ",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
