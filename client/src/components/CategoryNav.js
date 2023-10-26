import React from "react";

//useFetch hook
import useFetch from "../hooks/useFetch";

//link
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");
  console.log(data);
  return <div>CategoryNav</div>;
};

export default CategoryNav;
