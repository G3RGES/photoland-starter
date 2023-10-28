import React from "react";

// Link
import { Link } from "react-router-dom";

// icons
import { IoRemoveSharp } from "react-icons/io5";

// components
import Qty from "./Qty";

const CartItem = ({ item }) => {
  console.log(item); //TESTING
  return (
    <div className="flex grad mb-3">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px] ">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div>
        {/* title & remove icon */}
        <div>
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            className="text-[24px] hover:text-accent cursor-pointer
          transition-all"
          >
            <IoRemoveSharp className="cursor-pointer" />
          </div>
        </div>
        {/* quantity  */}
        <div>
          <Qty item={item} />
        </div>
        {/* price  */}
        <div>
          <span className="text-accent">
            ${item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
