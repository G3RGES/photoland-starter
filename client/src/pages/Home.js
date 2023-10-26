import React from "react";

//useFetch hook
import useFetch from "../hooks/useFetch.js";
const Home = () => {
  const { data } = useFetch("/products?populate=*");
  console.log(data);
  return <div>Home</div>;
};

export default Home;
