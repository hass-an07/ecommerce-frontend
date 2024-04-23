import React from "react";
import Logo from "../assets/Navbar/Meubel House_Logos-05.png";
import Vector from "../assets/Navbar/Vector.png";
import Vector1 from "../assets/Navbar/Vector (1).png";
import Vector2 from "../assets/Navbar/Vector (2).png";
import Search from "../assets/Navbar/akar-icons_search.png";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between py-4">
        <div className="logo flex">
          <img src={Logo} alt="" />
          <h1 className="font-bold font-Montserrat text-3xl flex items-center px-2">Furniro</h1>
        </div>
        <div className="list flex items-center ">
            <ul className="flex gap-12 items-center">
                <li className="font-Poppins"><a href="">Home</a></li>
                <li className="font-Poppins"><a href="">Shop</a></li>
                <li className="font-Poppins"><a href="">About</a></li>
                <li className="font-Poppins"><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="icons flex items-center gap-8">
        <img src={Vector} alt="" />
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Search} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
