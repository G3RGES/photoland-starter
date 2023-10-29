import React, { useContext } from "react";

// icons
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
// context
import { CartContext } from "../context/CartContext";

// components
import CartItem from "./CartItem";

// stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51MpIsYGBzapkAU6E879KP2qcYIIEci451zAC42IIESBhJJ96xp3eLXxcmKC3ZHJLXNQATAelFVaAiOmTOyrVAygS00jZdq6zx6"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full px-4 text-white ">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
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
        <div className="flex flex-col gap-y-8 px-2 ">
          {cart?.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className="px-6 py-2 flex flex-col">
          {/* subtotal */}
          <div className="flex flex-row justify-between text-lg">
            <div>Subtotal:</div>
            <div className="text-accent"> $ {parseFloat(total)}</div>
          </div>
          {/* total */}
          <div className="flex flex-row justify-between text-2xl">
            <div>Total:</div>
            <div className="text-accent"> $ {total}</div>
          </div>
        </div>
      )}
      {/* button */}
      <div className="px-6 py-6">
        {cart.length >= 1 ? (
          <div className="uppercase flex justify-between gap-x-4">
            <button
              className="btn btn-accent hover:bg-accent-hover
               hover:text-primary"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
            <button
              className="btn btn-accent hover:bg-accent-hover
             hover:text-primary flex-1
              px-2 gap-x-2"
              onClick={handlePayment}
            >
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div
            className="h-full absolute top-0 right-0 left-0
          flex justify-center items-center z-10 flex-col"
          >
            <div className="uppercase text-2xl text-accent">
              Your cart looks empty, Fill it up
            </div>
            <div className="uppercase text-6xl text-accent">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
