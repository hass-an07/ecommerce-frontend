import React from "react";
import Header from "../components/Header";
import filtersImage from "../assets/Shop/Vector (3).png";
import filtersImage2 from "../assets/Shop/Vector (4).png";
import filtersImage3 from "../assets/Shop/Vector (5).png";
import Products from "../components/Products";

import product1 from "../assets/Home/product_Images/image 1.png";
import product3 from "../assets/Home/product_Images/image 3.png";
import product4 from "../assets/Home/product_Images/image 4.png";
import product6 from "../assets/Home/product_Images/image 6.png";
import product7 from "../assets/Home/product_Images/image 7.png";
import product9 from "../assets/Home/product_Images/image 9.png";
import product8 from "../assets/Home/product_Images/Images.png";
import Frame from "../components/Frame";
import { Link } from "react-router-dom";
const Shop = () => {
  const ProductData = [
    {
      id: 1,
      image: product1,
      title: "Syltherine",
      slug: " Stylish cafe chair",
      priceNow: "2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      id: 2,
      image: product3,
      title: "Lolito",
      slug: " Luxury big sofa",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 3,
      image: product4,
      title: "Respira",
      slug: " Outdoor bar table and stool",
      priceNow: "500.000",
    },
    {
      id: 4,
      image: product9,
      title: "Grifo",
      slug: " Night lamp",
      priceNow: "1.500.000",
    },
    {
      id: 5,
      image: product6,
      title: "Muggo",
      slug: "Small mug",
      priceNow: "150.000",
    },
    {
      id: 6,
      image: product7,
      title: "Pingky",
      slug: "Cute bed set",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 7,
      image: product8,
      title: "Potty",
      slug: "Minimalist flower pot",
      priceNow: "500.000",
    },
    {
      id: 8,
      image: product1,
      title: "Syltherine",
      slug: " Stylish cafe chair",
      priceNow: "2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      id: 9,
      image: product3,
      title: "Lolito",
      slug: " Luxury big sofa",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 10,
      image: product4,
      title: "Respira",
      slug: " Outdoor bar table and stool",
      priceNow: "500.000",
    },
    {
      id: 11,
      image: product9,
      title: "Grifo",
      slug: " Night lamp",
      priceNow: "1.500.000",
    },
    {
      id: 12,
      image: product6,
      title: "Muggo",
      slug: "Small mug",
      priceNow: "150.000",
    },
    {
      id: 13,
      image: product7,
      title: "Pingky",
      slug: "Cute bed set",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 14,
      image: product8,
      title: "Potty",
      slug: "Minimalist flower pot",
      priceNow: "500.000",
    },
    {
      id: 15,
      image: product1,
      title: "Syltherine",
      slug: " Stylish cafe chair",
      priceNow: "2.500.000",
      oldPrice: "Rp 3.500.000",
    },
    {
      id: 16,
      image: product3,
      title: "Lolito",
      slug: " Luxury big sofa",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
    {
      id: 17,
      image: product4,
      title: "Respira",
      slug: " Outdoor bar table and stool",
      priceNow: "500.000",
    },
    {
      id: 18,
      image: product9,
      title: "Grifo",
      slug: " Night lamp",
      priceNow: "1.500.000",
    },
    {
      id: 19,
      image: product6,
      title: "Muggo",
      slug: "Small mug",
      priceNow: "150.000",
    },
    {
      id: 20,
      image: product7,
      title: "Pingky",
      slug: "Cute bed set",
      priceNow: "7.000.000",
      oldPrice: "Rp 14.000.000",
    },
  ];
  return (
    <>
      <Header Page="Shop"/>
      <div className="filters -mt-2 py-5 bg-[#F9F1E7]">
        <div className="container mx-auto lg:flex justify-between sm:ps-0 ps-3">
          <div className="first grid grid-cols-8 sm:flex gap-6 items-center">
            <img src={filtersImage} alt="" className="col-span-1" />
            <h1 className="text-xl font-Poppins poppins-regular col-span-2">
              Filters
            </h1>
            <img src={filtersImage2} alt="" />
            <img src={filtersImage3} alt="" />
            <h1 className="text-xl font-Poppins poppins-regular border-l-0 sm:border-l-[3px]   pl-0 sm:pl-6 border-[#9F9F9F] col-span-5">
              Showing 1–16 of 32 results
            </h1>
          </div>
          <div className="secornd grid grid-cols-2 sm:flex items-center gap-6 py-5 overflow-hidden">
            <h1 className="text-xl font-Poppins poppins-regular">Show</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="2"
              className="w-8 h-10 text-center"
            />
            <h1 className="text-xl font-Poppins poppins-regular">Short by</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Default"
              className="w-28 h-10 text-xl ps-2"
            />
          </div>
        </div>
      </div>

      {/* display products */}
      <div className="container mx-auto my-8">
        <div className="products grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 sm:p-0 px-2 gap-12">
          {ProductData.map((item) => {
            return (
              <Link to={`/product/${item.id}`} key={item.id}>
                <Products  product={item} />
              </Link>
            );
          })}
        </div>
        <div className="pagination  flex justify-center gap-6 my-8">
          <h1 className="bg-[#F9F1E7] py-2 px-4 overflow-hidden sm:py-3 sm:px-6 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            1
          </h1>
          <h1 className="bg-[#F9F1E7] py-2 px-4 overflow-hidden sm:py-3 sm:px-6 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            2
          </h1>
          <h1 className="bg-[#F9F1E7] py-2 px-4 overflow-hidden sm:py-3 sm:px-6 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            3
          </h1>
          <h1 className="bg-[#F9F1E7] py-2 px-4 overflow-hidden sm:py-3 sm:px-6 rounded-lg hover:bg-[#B88E2F] hover:text-white">
            Next
          </h1>
        </div>
      </div>
      <Frame />
    </>
  );
};

export default Shop;
