import React from "react";

//import component
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  // console.log(data);//*TESTING

  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
