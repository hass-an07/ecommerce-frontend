import React from "react";

const Footer = () => {
  const NavLinks = [
    {
        id:1,
      title: "Home",
      href: "#",
    },
    {
        id:2,
      title: "Shop",
      href: "#",
    },
    {
        id:3,
      title: "About",
      href: "#",
    },
    {
        id:4,
      title: "Contact",
      href: "#",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="content">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 sm:ps-0 ps-3">
            <li>
              <h1 className="text-3xl font-Poppins poppins-bold">Funiro.</h1>
              <p className="text-[#9F9F9F] font-Poppins poppins-regular pt-12">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </li>
            <li>
              <h1 className="text-[#9F9F9F] font-Poppins poppind-medium text-xl">
                Links
              </h1>
              <ul className=" pt-12 grid gap-6">
                {NavLinks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="font-Poppins poppins-medium text-lg"
                    >
                      <a href="">{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <h1 className="text-[#9F9F9F] font-Poppins poppind-medium text-xl">
                Help
              </h1>
              <ul className=" pt-12 grid gap-6">
                <li className="font-Poppins poppins-medium text-lg">
                  Payment Options
                </li>
                <li className="font-Poppins poppins-medium text-lg">Returns</li>
                <li className="font-Poppins poppins-medium text-lg">
                  Privacy Policies
                </li>
              </ul>
            </li>
            <li>
              <h1 className="text-[#9F9F9F] font-Poppins poppind-medium text-xl">
                Newsletter
              </h1>
              <div className="input pt-12 flex-nowrap">
                <input
                  type="text"
                  name=""
                  id=""
                  className=" border-b-2 border-black py-1"
                  placeholder="Enter Your Email Address"
                />
                <button className="mx-3  border-b-2 border-black">
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
        {/* footer */}
        <hr className="text-[#D9D9D9] my-8" />
        <h1 className="text-md lg:text-lg font-Poppins poppins-regular mb-8 ps-5">
          2023 HS Developers. All rights reverved
        </h1>
      </div>
    </>
  );
};

export default Footer;
