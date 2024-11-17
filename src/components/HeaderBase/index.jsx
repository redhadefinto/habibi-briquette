/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function HeaderBase({ title }) {
  const location = useLocation(); // Get the current location (URL)

  // Define the function to check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path
      ? "text-amber-900 font-bold border-b-4 border-b-amber-900" // Active state styling
      : "text-gray-500"; // Inactive state styling
  };

  return (
    <>
      <header className="fixed w-full top-0 bg-white border-b-2 border-solid z-50 font-rubik px-6 md:px-8 lg:px-20">
        <div className="flex py-4 lg:py-6">
          <section className="flex-1">
            <div>
              <Link
                className="flex flex-1 content-center text-center gap-2 w-max"
                to="/">
                {/* <img src={Logo} alt="logo-coffe" /> */}
                <h1 className="font-bold pt-1 text-gray-500 hover:text-amber-950 text-xl lg:text-2xl">
                  Habibi Briquette
                </h1>
              </Link>
            </div>
          </section>
          <nav className="flex-[2] hidden md:flex">
            <ul className="flex gap-8 items-center justify-end w-full font-bold text-gray-500 xl:gap-12">
              <li className="relative group">
                <Link
                  to="/"
                  className={`hover:text-amber-950 transition-all duration-300 ease-in-out ${isActive(
                    "/"
                  )}`}>
                  Home
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 block w-0 h-1 bg-amber-950 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="relative group">
                <Link
                  to="/product"
                  className={`hover:text-amber-950 transition-all duration-300 ease-in-out ${isActive(
                    "/product"
                  )}`}>
                  Product
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 block w-0 h-1 bg-amber-950 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="relative group">
                <Link
                  to="/about"
                  className={`hover:text-amber-950 transition-all duration-300 ease-in-out ${isActive(
                    "/about"
                  )}`}>
                  About Us
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 block w-0 h-1 bg-amber-950 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="relative group">
                <Link
                  to="/contact"
                  className={`hover:text-amber-950 transition-all duration-300 ease-in-out ${isActive(
                    "/contact"
                  )}`}>
                  Contact
                </Link>
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 block w-0 h-1 bg-amber-950 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeaderBase;
