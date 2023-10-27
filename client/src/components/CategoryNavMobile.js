import React from "react";

// icon
import { FiX } from "react-icons/fi";

// link
import { Link } from "react-router-dom";

// useFetch hook
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  // get categories
  const { data } = useFetch(`/categories`);
  // console.log(data);// TESTING

  return (
    <div className="w-full h-full bg-primary p-8">
      {/* close icon */}
      <div
        className="flex justify-end mb-8"
        // onClick={() => setCatNavMobile(false)} //*tutorial version but mine better😎
      >
        <FiX
          onClick={() => setCatNavMobile(false)}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              key={category.id}
              className="uppercase text-accent font-medium"
            >
              {category.attributes.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
