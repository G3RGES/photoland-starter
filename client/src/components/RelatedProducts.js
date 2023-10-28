import React from "react";

// useFetch hook
import useFetch from "../hooks/useFetch";

// components
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  // console.log(categoryTitle);//TESTING

  // get products based on category title
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );
  // console.log(data);//TESTING

  return (
    <div className=" mb-16 ">
      <div className="container mx-auto">
        <h2 className="h2 text-accent mb-6 text-center xl:text-left font-semibold">
          Related Products
        </h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
