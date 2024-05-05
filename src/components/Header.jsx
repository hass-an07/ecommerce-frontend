import React from "react";
import Arrow from '../assets/Header/Arrow.png'
import HeaderImage from "../assets/Header/headerbgimage.png";
import Logo from "../assets/Navbar/Meubel House_Logos-05.png";

const Header = ({Page}) => {
  return (
    <>
      <header>
        <div
          className="image h-96 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${HeaderImage})` }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="heading">
            <div className="logo flex justify-center py-2">
              <img src={Logo} alt="" className="text-center" />
              </div>
              <h1 className="text-4xl font-Poppins poppins-medium text-center">{Page}</h1>
              <h2 className="font-Poppins flex items-center justify-center">
                <span className="poppins-meduim">Home </span>
                <img src={Arrow} alt=""  className="mx-2"/>
                <span className="poppins-light">{Page}</span>
              </h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
