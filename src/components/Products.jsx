import React from "react";

const Products = ({ product }) => {
  return (
    <>
      <div key={product.id} className="product mb-5">
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
      </div>
    </>
  );
};

export default Products;
