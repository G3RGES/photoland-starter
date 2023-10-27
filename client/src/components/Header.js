import React, { useContext, useState } from "react";

//images
import logo from "../img/logo.png";
//icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

//link
import { Link } from "react-router-dom";

//components
import SearchForm from "./SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "./Cart";
//cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  // console.log(useContext(CartContext)); //TESTING
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0">
          {/* menu */}
          <div className="text-3xl xl:hidden cursor-pointer">
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${catNavMobile ? "left-0" : "-left-full"}
          fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200
          `}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          {/* search form -- show only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div>
            {/* phone */}
            <div>Need help? 123 456 789</div>
            {/* cart icon*/}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl " />
              {/* amount */}
              <div>2</div>
            </div>
            {/* cart */}
            <div
              className={`${isOpen ? "right-0" : "-right-full"}
              bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 
            md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* search form -- show on mobile only */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
