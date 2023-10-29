import React from "react";

// icons
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary ">
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about our products, and
            promotions
          </p>
        </div>
        {/* form */}
        <form
          className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5
        my-14"
        >
          <input
            type="text"
            placeholder="Your email address..."
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* links */}
        <div
          className="text-base text-white/70 flex gap-x-6 capitalize flex-col
         md:flex-row gap-y-8 font-medium max-w-max mx-auto mb-9"
        >
          <a href="#" className="hover:text-white transition-all">
            About Us
          </a>
          <a href="#" className="hover:text-white transition-all">
            Return Policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track your order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Contact Us
          </a>
        </div>
        {/* social media */}
        {/* //* different version */}
        <div
          className="flex gap-x-6 max-w-max mx-auto
        text-lg md:text-2xl mb-16 justify-center
         text-white/70 items-center space-x-4"
        >
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div
        className=" py-10 border-t border-t-white/10 px-4 sm:py-8 lg:pr-3
      xl:pl-8 2xl:max-w-7xl mx-auto"
      >
        <div className="container mx-auto ">
          <div className="text-center text-accent uppercase text-sm ">
            © 2023 Photoland. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
