import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="padding-x py-8 fixed z-50 w-full shadow-md bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block" onClick={toggleSidebar}>
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed hidden max-lg:block top-0 left-0 w-[40%] h-full bg-coral-red shadow-lg transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center mt-20 gap-8 text-white">
          {" "}
          {/* Changed text color to white */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg"
                onClick={toggleSidebar}
              >
                {item.label}
              </a>
            </li>
          ))}
          <Button
            label="Sign In"
            backgroundColor="bg-white"
            textColor="text-black"
          />
        </ul>
      </div>
    </header>
  );
};

export default Nav;
