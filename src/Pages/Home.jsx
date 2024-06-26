import React from "react";
import HeroImage from "../assets/Home/hero-image.png";
import Dinning from "../assets/Home/category/dinning.png";
import Living from "../assets/Home/category/living_room.png";
import Bedroom from "../assets/Home/category/bedroom.png";
import product1 from "../assets/Home/product_Images/image 1.png";
import product3 from "../assets/Home/product_Images/image 3.png";
import product4 from "../assets/Home/product_Images/image 4.png";
import product6 from "../assets/Home/product_Images/image 6.png";
import product7 from "../assets/Home/product_Images/image 7.png";
import product9 from "../assets/Home/product_Images/image 9.png";
import product8 from "../assets/Home/product_Images/Images.png";

// gallery images
import first_1 from "../assets/Home/GallaryImages/first-1.png";
import first_2 from "../assets/Home/GallaryImages/first-2.png";
import first_3 from "../assets/Home/GallaryImages/first-3.png";
import first_4 from "../assets/Home/GallaryImages/first-4.png";
import secornd from "../assets/Home/GallaryImages/secrond.png";
import third_1 from "../assets/Home/GallaryImages/third-1.png";
import third_2 from "../assets/Home/GallaryImages/third-2.png";
import third_3 from "../assets/Home/GallaryImages/third-3.png";
import third_4 from "../assets/Home/GallaryImages/third-4.png";
// swipper imports
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const Home = () => {
  const categoryData = [
    {
      id: 1,
      name: "Dining",
      image: Dinning,
    },
    {
      id: 2,
      name: "Living",
      image: Living,
    },
    {
      id: 3,
      name: "Bedroom",
      image: Bedroom,
    },
  ];

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
  ];

  return (
    <>
      <div className="home-page">
        <div
          className="hero bg-cover flex justify-end items-center px-8	sm:px-32 h-[700px]"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          {/* header  section */}
          <section className="container  w-[600px] h-[350px] sm:h-[320px]  bg-[#FFF3E3]">
            <div className="flex items-center h-full hover:py-0">
              <div className="hero-heading pl-5">
                <h3 className="text-lg sm:text-xl font-Poppins poppins-semibold mb-2">
                  New Arrival
                </h3>
                <h1 className="text-2xl sm:text-4xl font-Poppins text-[#B88E2F] poppins-bold mb-2">
                  Discover Our <br /> New Collection
                </h1>
                <p className="text-lg sm:text-xl font-Poppins poppins-medium mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className="text-white bg-[#B88E2F] hover:text-[#B88E2F] hover:bg-white hover:border-2 hover:border-[#B88E2F]  px-10 py-3 mt-2 ">
                  Buy Now
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* hero section */}
        <section className="container mx-auto">
          <div className="heading py-9">
            <h1 className="text-center font-Poppins poppins-bold text-3 py-2xl py-2">
              Browse The Range
            </h1>
            <p className="text-center font-Poppins poppins-regular text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="display grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {categoryData.map((category) => {
              return (
                <div key={category.id} className="showData">
                  <div className="image flex justify-center">
                    <img
                      src={category.image}
                      alt=""
                      className="px-3 w-full xs:w-auto"
                    />
                  </div>
                  <h1 className="text-center font-Poppins poppins-semibold py-3">
                    {category.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </section>

        {/* product section */}
        <section className="container mx-auto">
          <h1 className="text-center font-Poppins poppins-bold  text-[#3A3A3A] text-3xl py-10">
            Our Products
          </h1>
          <div className="products grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 px-6 gap-12">
            {ProductData.map((product) => {
              return (
               <Link key={product.id} to={`/product/${product.id}`}> 
               <Products  product={product} />
               </Link>
              );
            })}
          </div>
          {/* show more btn */}
          <div className="showMore flex justify-center my-5">
            <button className="text-[#B88E2F] border-2	border-[#B88E2F] px-10	py-2 hover:text-white hover:bg-[#B88E2F]">
              Show More
            </button>
          </div>
        </section>

        {/* explore section */}
        <section className="bg-[#FCF8F3]">
          <div className="container mx-auto h-[650px] sm:h-[400px] my-10 grid grid-cols-1 sm:grid-cols-3 px-3">
            <div className="explore-heading h-full flex items-center ">
              <div className="explore-content ">
                <h1 className="font-Poppins poppins-bold text-3xl text-[#3A3A3A]">
                  50+ Beautiful rooms inspiration
                </h1>
                <p className="text-[#616161] font-Poppins poppins-medium py-3">
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button className="hover:text-[#B88E2F] hover:bg-white border-2	hover:border-[#B88E2F] px-6	py-2  text-white bg-[#B88E2F]">
                  Explore More
                </button>
              </div>
            </div>
            {/* swipper */}
            <div className="swipper  col-span-2">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                // pagination={true}
                pagination={{
                  clickable: true, // Enable pagination bullets to be clickable
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {ProductData.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <img src={data.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
        {/* gallary section */}
        {/* <section className="container mx-auto"> */}
        <h2 className="text-[#616161] font-Poppins poppins-semibold text-center text-lg">
          Share your setup with
        </h2>
        <h1 className="text-center font-Poppins poppins-bold text-[#3A3A3A] text-3xl py-1">
          #FuniroFurniture
        </h1>
        {/* gallery images  */}
        <div className="gallery-images grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-10 mb-40">
          <div className="first sm:col-span-3 lg:col-span-4">
            <div className="flex">
              <div className="-ms-32">
                <img src={first_1} alt="" />
              </div>
              <div className="flex items-end mx-2">
                <img src={first_2} alt="" />
              </div>
            </div>
            <div className="flex">
              <div className=" mt-4">
                <img src={first_3} alt="" className="" />
              </div>
              <div className="mt-4 mx-2">
                <img src={first_4} alt="" className="w-[410px]" />
              </div>
            </div>
          </div>
          <div className="second my-2 sm:col-span-2 lg:col-span-2 grid items-center">
            <div className="">
              <img src={secornd} alt="" />
            </div>
          </div>
          <div className="third sm:col-span-3 lg:col-span-4 ">
            <div className="flex mb-4">
              <div className="mx-2 flex items-end">
                <img src={third_1} alt="" />
              </div>
              <div className="">
                <img src={third_2} alt="" />
              </div>
            </div>
            <div className="flex">
              <div className="mx-2">
                <img src={third_3} alt="" />
              </div>
              <div className="">
                <img src={third_4} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </>
  );
};

export default Home;
