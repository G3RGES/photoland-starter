import React, { createContext, useEffect, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    // console.log(amount); //TESTING
    setItemsAmount(amount);
  }, [cart]);

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.price * c.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

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

  // remove from cart
  const removeFromCart = (id) => {
    // console.log(`item removed ${id}`);//TESTING
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // handle input
  const handleInput = (e, id) => {
    // console.log(e.target.value); //TESTING
    // console.log(id); //TESTING
    const value = parseInt(e.target.value);
    // console.log(value); //TESTING
    //TODO FIND ITEM IN CART WITH ID
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartItem); //TESTING
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
    // console.log(cartItem); //TESTING
  };
  // console.log(cart); //TESTING

  //handle select
  const handleSelect = (e, id) => {
    // console.log(e.target.value); //TESTING
    // console.log(id); //TESTING
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartItem); //TESTING
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
    }
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
