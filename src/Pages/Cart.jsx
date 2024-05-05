import React, { useState } from "react";
import HeaderImage from "../assets/Header/headerbgimage.png";
import Arrow from "../assets/Header/Arrow.png";
import Logo from "../assets/Navbar/Meubel House_Logos-05.png";
import product2 from "../assets/Shop/Asgaard sofa 3.png";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Frame from "../components/Frame";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Cart = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    const decrementCounter = () => {
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    };
  return (
    <>
      <Header Page="Cart"/>
      {/* content section */}
      <div className="container mx-auto grid  lg:grid-cols-12 my-5 gap-10 ">
        <div className="lg:col-span-8 mx-2 sm:mx-0">
          <ul className="sm:flex justify-between sm:justify-evenly bg-[#F9F1E7] py-3 ">
            <li className=" font-Poppins poppins-medium px-4 sm:px-6 my-2 sm:my-0">Product</li>
            <li className=" font-Poppins poppins-medium px-4 sm:px-0 my-2 sm:my-0">Price</li>
            <li className=" font-Poppins poppins-medium px-4 sm:px-0 my-2 sm:my-0">Quality</li>
            <li className=" font-Poppins poppins-medium px-4 sm:px-0 my-2 sm:my-0">Subtotal</li>
          </ul>

          <ul className="grid sm:grid-cols-10 md:grid-cols-12 my-5 mx-2 xl:mx-0">
            <li className="order-last sm:order-first sm:flex md:col-span-2">
              <div className="w-full my-5 sm:my-0 sm:w-28">
                <img
                  src={product2}
                  alt=""
                  className="bg-[#F9F1E7] rounded-lg"
                />
              </div>
            </li>
            <ul className="sm:flex justify-between sm:col-span-9  md:col-span-10 items-center px-4">
              <li className=" font-Poppins poppins-regular text-[#sm9F9F] my-2 sm:my-0">
                Asgaard sofa
              </li>
              <li className=" font-Poppins poppins-regular text-[#sm9F9F] my-2 sm:my-0">
                Rs. 250,000.00
              </li>
              <li className=""> 
              <div className="incdec flex items-center border-2 rounded-xl w-32 sm:w-20 justify-between  px-2 py-4 text-lg cursor-pointer  my-2 sm:my-0">
              <FaPlus onClick={incrementCounter} />
              <h2 className="number px-2">{counter}</h2>
              <FaMinus onClick={decrementCounter} />
            </div>
              </li>
              <li className=" font-Poppins poppins-regular text-[#sm9F9F] my-2 sm:my-0">
                Rs. 250,000.00
              </li>
              <li>
                <MdDelete className="text-[#B88E2F] text-2xl cursor-pointer" />
              </li>
            </ul>
          </ul>
        </div>
        {/* grand total */}
        <div className="bg-[#F9F1E7] lg:col-span-4 h-96 mx-2 xl:mx-0">
          <h1 className="text-3xl font-Poppins poppins-semibold  text-center pt-5">
            Cart Totals
          </h1>
         <div className="grid justify-center mt-8">
         <div className="sub-total flex gap-10 py-5 ">
            <h2 className="font-Poppins poppins-medium ">Subtotal</h2>
            <h2 className="font-Poppins poppins-regular  text-[#9F9F9F]">
              Rs. 250,000.00
            </h2>
          </div>
          <div className="sub-total flex gap-16">
            <h2 className="font-Poppins poppins-medium">Total</h2>
            <h2 className="font-Poppins poppins-regular text-xl text-[#B88E2F]">
              Rs. 250,000.00
            </h2>
          </div>
         </div>
          <div className="button text-center my-14">
          <Link to={'/checkout'}>
          <button className="border-2 border-black py-4 px-16 rounded-xl hover:text-white hover:bg-[#B88E2F] hover:border-[#B88E2F]">Check Out</button>
          </Link>
          </div>
        </div>
      </div>

      {/* frame */}
      <Frame/>
    </>
  );
};

export default Cart;
