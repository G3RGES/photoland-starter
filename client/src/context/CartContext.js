import React, { createContext, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // add to cart
  const addToCart = (item, id) => {
    // console.log(`"add to cart",${id}`);//TESTING
    const itemID = parseInt(id);
    // console.log(itemID);//TESTING
    // console.log(item);//TESTING
    const newItem = { ...item[0], amount: 1 };
    // console.log(newItem); //TESTING
    setCart([...cart, newItem]);
    // check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });
    // console.log(cartItem); //TESTING
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    // open cart sidebar
    setIsOpen(true);
  };

  // console.log(cart); //TESTING

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
