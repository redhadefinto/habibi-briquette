import React, { useState, useEffect } from "react";
import { FaHome, FaExclamationCircle, FaPhoneSquare } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

function BottomNav() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate(); // Initialize navigate hook
  const location = useLocation(); // Use the location hook to track the current path

  // Update the active tab based on the current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab(0);
    } else if (location.pathname === "/product") {
      setActiveTab(1);
    } else if (location.pathname === "/about") {
      setActiveTab(2);
    } else if (location.pathname === "/contact") {
      setActiveTab(3);
    }
  }, [location.pathname]); // Re-run the effect when the location changes

  // Handle tab click and navigate to the respective route
  const handleTabClick = (index, path) => {
    setActiveTab(index);
    navigate(path); // Navigate to the desired route
  };

  return (
    <div className="sticky bottom-0 w-full bg-amber-900 z-50 md:hidden">
      <div className="flex justify-around items-center py-3">
        {/* Home Icon */}
        <div
          className={`cursor-pointer text-2xl ${
            activeTab === 0 ? "text-green-500" : "text-white"
          } transition-colors duration-300`}
          onClick={() => handleTabClick(0, "/")}>
          <FaHome />
        </div>

        {/* Shop Icon */}
        <div
          className={`cursor-pointer text-2xl ${
            activeTab === 1 ? "text-green-500" : "text-white"
          } transition-colors duration-300`}
          onClick={() => handleTabClick(1, "/product")}>
          <CiShop />
        </div>

        {/* Alert Icon */}
        <div
          className={`cursor-pointer text-2xl ${
            activeTab === 2 ? "text-green-500" : "text-white"
          } transition-colors duration-300`}
          onClick={() => handleTabClick(2, "/about")}>
          <FaExclamationCircle />
        </div>

        {/* Phone Icon */}
        <div
          className={`cursor-pointer text-2xl ${
            activeTab === 3 ? "text-green-500" : "text-white"
          } transition-colors duration-300`}
          onClick={() => handleTabClick(3, "/contact")}>
          <FaPhoneSquare />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
