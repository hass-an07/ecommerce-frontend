import React from "react";
import HeaderImage from "../assets/Header/headerbgimage.png";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="image h-96 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${HeaderImage})` }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="heading">
              <h1 className="text-4xl font-Poppins poppins-medium ">Shop</h1>
              <h2 className="font-Poppins">
                <span className="poppins-meduim">Home </span>
                {">"}
                <span className="poppins-light">Shop</span>
              </h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
