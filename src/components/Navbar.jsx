import React, { useState } from "react";
import Logo from "../assets/Navbar/Meubel House_Logos-05.png";
import user from "../assets/Navbar/Vector.png";
import heart from "../assets/Navbar/Vector (1).png";
import cart from "../assets/Navbar/Vector (2).png";
import Search from "../assets/Navbar/akar-icons_search.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [navToggle, setNavtoggle] = useState(false);

  const HandlenavToggle = () => {
    setNavtoggle(!navToggle);
  };

  const NavLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Shop",
      href: "/shop",
    },
    {
      id: 3,
      title: "About",
      href: "#",
    },
    {
      id: 4,
      title: "Contact",
      href: "#",
    },
  ];

  return (
    <>
      <div className="container mx-auto flex justify-between p-4 ">
        {/* logo */}
        <div className="logo flex">
          <img src={Logo} alt="LOGO" />
          <h1 className="font-bold font-Montserrat text-3xl flex items-center px-2">
            Furniro
          </h1>
        </div>
        {/* manue  */}
        <IoMenu
          onClick={HandlenavToggle}
          className="lg:hidden flex text-4xl cursor-pointer"
        />
        <div className="list lg:flex items-center  hidden">
          <ul className="flex gap-12 items-center poppins-medium">
            {NavLinks.map((item) => {
              return (
                <li key={item.title} className="font-Poppins">
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons lg:flex items-center gap-8 hidden">
          <img src={user} alt="" />
          <img src={heart} alt="" />
          <img src={cart} alt="" />
          <img src={Search} alt="" />
        </div>

        {/* mobile responsive */}

        {navToggle && (
          <div className="absolute w-full h-screen top-20 left-0 backdrop-blur-sm">
            <div className="list flex justify-center">
              <ul className="py-3">
                {NavLinks.map((item) => {
                  return (
                    <li key={item.id} className="font-Poppins py-2">
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="icons flex justify-center gap-6">
              <img src={user} alt="" />
              <img src={heart} alt="" />
              <img src={cart} alt="" />
              <img src={Search} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
