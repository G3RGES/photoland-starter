import React, { useContext } from "react";

// Link
import { Link } from "react-router-dom";

// icons
import { IoRemoveSharp } from "react-icons/io5";

// components
import Qty from "./Qty";

// context
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  // console.log(item); //TESTING

  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex grad gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px] ">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex gap-x-4 mb-3">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            className="text-[24px] hover:text-accent cursor-pointer
          transition-all"
            // onClick={() => removeFromCart(item.id)} //tutorial's version but mine is better😎
          >
            <IoRemoveSharp
              onClick={() => {
                removeFromCart(item.id);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* quantity  */}
          <div className="flex gap-x-4 mb-2 ">
            <Qty item={item} />
            <div className="text-accent text-xl">
              $ {item.attributes.price * item.amount} total price
            </div>
          </div>
        </div>
        {/* price  */}
        <div>
          <span className="text-accent">
            $ {item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
