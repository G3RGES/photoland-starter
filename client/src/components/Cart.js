import React, { useContext } from "react";

// icons
import { IoClose } from "react-icons/io5";
// context
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div className="w-full h-full px-4 text-white ">
      <div>
        {/* close icon */}
        <div
          className="text-4xl w-20 h-[98px] flex justify-start items-center"
          // onClick={() => setIsOpen(false)}//* tutorial's version but mine is better😎
        >
          <IoClose
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
