import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <>
      <div className="group">
        <div key={product.id} className="product mb-5 relative">
          <img src={product.image} alt="" className="w-full" />
          <div className="details bg-[#F4F5F7] py-4">
            <h1 className="text-[#3A3A3A] px-5 text-3xl py-1 font-Poppins poppins-semibold ">
              {product.title}
            </h1>
            <h3 className="text-[#898989] px-5 py-1 font-Poppins poppins-medium text-lg ">
              {product.slug}
            </h3>
            <h2 className="text-[#3A3A3A] px-5 py-1 block sm:flex justify-between">
              <div className="priceNow font-Poppins pb-2 sm:pb-0 poppins-semibold  text-medium ">
                Rp {product.priceNow}
              </div>
              <div className="oldPrice text-[#B0B0B0]  text-medium font-Poppins poppins-regular line-through	">
                {product.oldPrice}
              </div>
            </h2>
          </div>
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link to="/cart">
              <button className="text-[#B88E2F] bg-white px-10 py-3">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
