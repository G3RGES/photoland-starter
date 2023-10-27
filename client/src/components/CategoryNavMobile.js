import React from "react";

// icon
import { FiX } from "react-icons/fi";

const CategoryNavMobile = ({ setCatNavMobile }) => {
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
    </div>
  );
};

export default CategoryNavMobile;
