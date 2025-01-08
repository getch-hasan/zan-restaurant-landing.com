import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathName = usePathname();
  const navList = [
    { name: "About Us", href: "/about-us" },
    { name: "Menu", href: "/menu" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contacts", href: "/contacts" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full z-10 bg-[#f8eded]">
      <nav className="py-3 flex container-custom mx-auto justify-between items-center">
        <Link href={'/'} className="flex items-center gap-2">
          <img
            className="h-14 w-14 ml-4 rounded-full"
            src="/logo.webp"
            alt="Logo"
          />
        </Link>
        <button
          onClick={toggleDrawer}
          className="lg:hidden absolute right-4 text-xl"
        >
          <FaBars />
        </button>
        <div className="hidden md:flex items-center gap-10">
          {navList.map((item, index) => (
            <Link
              aria-label={item.name}
              href={item.href}
              key={index}
              className={`${
                item.name !== "Contact"
                  ? "font-semibold text-black font-poppins text-md leading-7 relative hover:border-none after:absolute after:w-0 after:h-[5px] after:-bottom-1 after:bg-[#79D802] after:transition-all after:duration-200 after:ease-in-out after:rounded-full hover:after:w-full hover:after:left-0"
                  : "font-semibold text-white font-poppins text-md bg-[#79D802] py-2 rounded-full px-6"
              }
          ${
            pathName === item.href
              ? "after:w-full after:left-0 font-bold text-[#79D802] font-poppins"
              : "after:left-1/2"
          }`}
              aria-labelledby="labeldiv"
            >
              {item.name}
            </Link>
          ))}
          <Link
            aria-label="Reserve Table"
            href="/reserve"
            className="font-semibold font-poppins text-md bg-primary py-2 rounded-full px-6"
          >
            Reserve Table
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex md:hidden ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible "
        } transition-opacity duration-700 ease-in-out`}
      >
        {/* Overlay */}
        <div className="fixed inset-0 " onClick={toggleDrawer}></div>
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bg-white w-64 h-full shadow-lg flex flex-col p-4 font-poppins transform transition-transform duration-700 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleDrawer} className="self-end mb-4 mt-2">
            <FaTimes size={24} />
          </button>
          {navList.map((item, index) => (
            <Link
              aria-label={item.name}
              href={item.href}
              key={index}
              onClick={toggleDrawer}
              className={`${
                pathName === item.href
                  ? "font-extrabold text-primary"
                  : "text-black"
              } text-lg py-2`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
