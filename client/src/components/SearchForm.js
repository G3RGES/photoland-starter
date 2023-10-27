import React, { useEffect, useState } from "react";

// icons
import { FiSearch } from "react-icons/fi";

// useNavigate hook
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    // console.log(e.target.value);//TESTING
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm); //TESTING
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      //IF INPUT IS EMPTY SET ANIMATION TO TRUE
      setIsAnimating(true);
      // console.log("please type something ");//TESTING
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } relative w-full`}
    >
      <input
        type="text"
        className="input "
        placeholder="Search for a product..."
        onChange={handleSearchInput}
      />
      <button
        className="btn btn-accent absolute top-0 right-0 rounded-tl-none
      rounded-bl-none"
      >
        <FiSearch className="text-xl " />
      </button>
    </form>
  );
};

export default SearchForm;
