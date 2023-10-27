import React, { useState } from "react";

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

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/* menu */}
          <div>
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div>
            <CategoryNavMobile />
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
            <div className="relative cursor-pointer">
              <SlBag className="text-2xl " />
              {/* amount */}
              <div>2</div>
            </div>
            {/* cart */}
            <div
              className="bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 
            md:max-w-[500px] transition-all duration-300"
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
