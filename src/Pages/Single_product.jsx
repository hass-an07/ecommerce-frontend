import React, { useState } from "react";
import Arrow from "../assets/Header/Arrow.png";
import { Link, useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import product1 from "../assets/Shop/Outdoor sofa set 2.png";
import product2 from "../assets/Shop/Asgaard sofa 3.png";
import product3 from "../assets/Shop/Group 107.png";
import Products from "../components/Products";

import product6 from "../assets/Home/product_Images/image 6.png";
import product7 from "../assets/Home/product_Images/image 7.png";
import product9 from "../assets/Home/product_Images/image 9.png";
import product8 from "../assets/Home/product_Images/Images.png";

const ProductData =[
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
]

const Single_product = () => {
  const { id } = useParams();

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  console.log(id);
  return (
    <>
      <header className="bg-[#F9F1E7]">
        <div className="container mx-auto flex items-center gap-4 py-6 ">
          <h4 className="text-[#9F9F9F] font-Poppins poppins-regular ms-2 sm:ms-0">
            Home
          </h4>
          <img src={Arrow} alt="" />
          <h4 className="text-[#9F9F9F] font-Poppins poppins-regular">
            Shop
          </h4>
          <img src={Arrow} alt="" />
          <h3 className="font-Poppins poppins-regular">Product title</h3>
        </div>
      </header>
      {/* display product */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-6  lg:grid-cols-12 my-10">
        <div className="product-images col-span-1 flex  justify-center  mx-2 sm:mx-0">
          <div className="product-images-container grid  grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-8">
            <img
              src={product1}
              alt=""
              className="w-28   bg-[#F9F1E7] rounded-lg px-2 py-3 shadow-lg hover:scale-105 duration-150"
            />
            <img
              src={product2}
              alt=""
              className="w-28   bg-[#F9F1E7] rounded-lg px-2 py-3 shadow-lg hover:scale-105 duration-150"
            />
            <img
              src={product1}
              alt=""
              className="w-28   bg-[#F9F1E7] rounded-lg px-2 py-3 shadow-lg hover:scale-105 duration-150"
            />
            <img
              src={product2}
              alt=""
              className="w-28  bg-[#F9F1E7] rounded-lg px-2 py-3 shadow-lg hover:scale-105 duration-150"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-5 bg-[#F9F1E7]  mx-8 grid items-center justify-center shadow-lg my-6 md:my-0 hover:scale-105 duration-150 rounded-lg">
          <img src={product2} alt="" />
        </div>
        <div className="details md:col-span-6 lg:col-span-6 grid gap-4 mx-2 lg:mx-0 py-6 lg:py-0">
          <h1 className="text-4xl font-Poppins poppins-regular">
            Asgaard sofa
          </h1>
          <h3 className="text-2xl text-[#9F9F9F] font-Poppins poppins-regular">
            Rs. 250,000.00
          </h3>
          <div className="rating ">
            <div className="stars xs:flex gap-2 items-center">
              <div className="icons flex">
              <IoIosStarOutline className="text-xl" />
              <IoIosStarOutline className="text-xl" />
              <IoIosStarOutline className="text-xl" />
              <IoIosStarOutline className="text-xl" />
              <IoIosStarOutline className="text-xl" />
              </div>
              <h2 className="text-[#9F9F9F] mt-4 xs:mt-0 font-Poppins poppins-regular  border-l-2 border-[#9F9F9F]">
                <span className="ps-2">5 Customer Review</span>
              </h2>
            </div>
          </div>
          <h4 className="text-medium font-poppins poppins-regular">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </h4>
          <div className="size ">
            <h6 className="font-poppins poppins-regular text-[#9F9F9F]">
              Size
            </h6>
            <div className="size-avl flex gap-4 py-3">
              <h2 className="bg-[#F9F1E7] w-9 text-center py-2 cursor-pointer rounded-lg hover:bg-[#B88E2F] hover:text-white">
                L
              </h2>
              <h2 className="bg-[#F9F1E7] w-9 text-center py-2 cursor-pointer rounded-lg hover:bg-[#B88E2F] hover:text-white">
                XL
              </h2>
              <h2 className="bg-[#F9F1E7] w-9 text-center py-2 cursor-pointer rounded-lg hover:bg-[#B88E2F] hover:text-white">
                XS
              </h2>
            </div>
          </div>
          <div className="color">
            <h6 className="font-poppins poppins-regular text-[#9F9F9F]">
              Color
            </h6>
            <div className="color-avl flex gap-4 py-3">
              <div className="bg-[#816DFA] w-8 h-8 rounded-full cursor-pointer"></div>
              <div className="bg-[#000000] w-8 h-8 rounded-full cursor-pointer"></div>
              <div className="bg-[#B88E2F] w-8 h-8 rounded-full cursor-pointer"></div>
            </div>
          </div>
          <div className="add-to-cart xs:flex gap-10">
            <div className="incdec flex items-center border-2 w-32 justify-between border-[#9F9F9F] rounded-xl px-2 py-4 text-lg cursor-pointer">
              <FaPlus onClick={incrementCounter} />
              <h2 className="number px-2">{counter}</h2>
              <FaMinus onClick={decrementCounter} />
            </div>
            <Link to={`/cart`}>
            <button
              className="font-Poppins poppins-regular border-2 my-3 py-4  xs:my-0 border-black rounded-lg px-9 hover:bg-[#B88E2F] hover:border-[#B88E2F] hover:text-white "
            >
              Add To Cart
            </button>
            </Link>
          </div>
        </div>
      </section>
      <hr className="bg-[#D9D9D9] w-full my-12" />
      {/* description section */}
      <section className="mx-2 sm:mx-0">
      <div className="container mx-auto">
        <div className="desc-headeing  xs:flex gap-8 justify-center">
          <h1 className="text-2xl font-Poppins poppins-medium">Description</h1>
          <h2 className="text-2xl py-2 xs:py-0 text-[#9F9F9F] font-Poppins poppins-regular">
            Additional Information
          </h2>
          <h2 className="text-2xl hidden sm:flex text-[#9F9F9F] font-Poppins poppins-regular">
            Reviews [5]
          </h2>
        </div>
        <div className="desc  xl:mx-48 text-justify py-7 text-[#9F9F9F]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum sunt quam explicabo nam, numquam laboriosam sed, voluptates eveniet corporis laudantium quas excepturi et omnis corrupti blanditiis fugiat reiciendis dignissimos earum dolore, ipsam rem dolorum ipsa totam! Libero corrupti ipsa omnis quod, voluptatum aut provident. Doloribus ipsum praesentium aliquam itaque culpa hic eum? Accusantium ipsa esse at quis possimus pariatur minus corrupti ex asperiores explicabo dolorum, quia minima recusandae. Repudiandae facere iste ex quam illum sint voluptatum harum fuga dolores dignissimos cumque at pariatur aut reiciendis ipsam dolor ut voluptatem, optio atque. Quis nostrum dolores itaque excepturi, fuga iure nulla.</p>
        </div>
        <div className="desc-images  sm:flex  gap-8 justify-center">
          <div className="image1 my-4 sm:my-0">
          <img src={product3} alt="" />
          </div>
          <div className="image1 my-4 sm:my-0">
          <img src={product3} alt="" />
          </div>
        </div>
      </div>
      </section>
      <hr className="bg-[#D9D9D9] w-full my-12" />
      {/* realated products */}
      <div className="container mx-auto">
        <h1 className="text-2xl font-Poppins poppins-medium text-center">Related Products</h1>
        <div className="products grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 sm:p-0 px-2 gap-12 my-5">
          {ProductData.map((item) => {
            return <Products key={item.id} product={item}/>
          })}
        </div>
        <div className="showMore flex justify-center my-5">
            <button className="text-[#B88E2F] border-2	border-[#B88E2F] mb-5 px-10	py-2 hover:text-white hover:bg-[#B88E2F]">
              Show More
            </button>
          </div>
      </div>
    </>
  );
};

export default Single_product;
