import React from "react";

//link
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product); //TESTING
  return (
    <Link>
      <div className="group">
        <div className="w-full h-[200px] flex items-center justify-center relative">
          {/* image */}
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="Product"
          />
        </div>
      </div>
    </Link>
  );
};

export default Product;
