import { lazy } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;
