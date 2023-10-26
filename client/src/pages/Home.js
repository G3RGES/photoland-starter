import React from "react";

//import component
import ProductSlider from "../components/ProductSlider";

//useFetch hook
import useFetch from "../hooks/useFetch.js";

const Home = () => {
  //get new products
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  // console.log(data);//*TESTING
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default Home;
