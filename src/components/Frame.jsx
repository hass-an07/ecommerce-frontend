import React from "react";
import trophy from "../assets/Frame/trophy 1.png";
import group from "../assets/Frame/Group.png";
import shipping from "../assets/Frame/shipping.png";
import help_center from "../assets/Frame/help_center.png";

const Frame = () => {
  return (
    <>
      <section className="bg-[#FAF3EA]">
        <div className="container mx-auto grid grid-cols-1 p-2  md:grid-cols-2 lg:grid-cols-4 py-16 mb-8">
          <div className="trophy flex items-center md:my-0  pb-4">
            <img src={trophy} alt="" />
            <div className="content ps-2">
              <h1 className="text-[#242424] text-xl font-Poppins poppins-semibold">
                High Quality
              </h1>
              <h3 className="text-[#898989] text-medium font-Poppins poppins-medium">
                crafted from top materials
              </h3>
            </div>
          </div>
          <div className="group flex items-center md:my-0  py-4">
            <img src={group} alt="" />
            <div className="content ps-2">
              <h1 className="text-[#242424] text-xl font-Poppins poppins-semibold">
                Warranty Protection
              </h1>
              <h3 className="text-[#898989] text-medium font-Poppins poppins-medium">
                Over 2 years
              </h3>
            </div>
          </div>
          <div className="shipping flex items-center md:my-0  py-4">
            <img src={shipping} alt="" />
            <div className="content ps-2">
              <h1 className="text-[#242424] text-xl font-Poppins poppins-semibold">
                Free Shipping
              </h1>
              <h3 className="text-[#898989] text-medium font-Poppins poppins-medium">
                Order over 150 $
              </h3>
            </div>
          </div>
          <div className="help-center flex items-center md:my-0  pb -4">
            <img src={help_center} alt="" />
            <div className="content ps-2">
              <h1 className="text-[#242424] text-xl font-Poppins poppins-semibold">
                24 / 7 Support
              </h1>
              <h3 className="text-[#898989] text-medium font-Poppins poppins-medium">
                Dedicated support
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frame;
