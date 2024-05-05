import React from "react";
import Arrow from "../assets/Header/Arrow.png";
import HeaderImage from "../assets/Header/headerbgimage.png";
import Logo from "../assets/Navbar/Meubel House_Logos-05.png";
import Header from "../components/Header";

const CheckOut = () => {
  const CounrtyData = [
    { name: "Afghanistan", code: "AF" },
    { name: "land Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];

  return (
    <>
      <Header Page="Checkout"/>

      {/* check out */}
      <form action="">
        <section className="container mx-auto">
          <div className="grid grid-cols-2 my-10">
            <div className="details col-span-1 mx-24">
              <h1 className="font-Poppins poppins-semibold text-2xl mb-3">
                Billing details
              </h1>
              <div className="name flex justify-between">
                <div className="mb-3 ">
                  <label htmlFor="" className="font-Poppins poppins-medium ">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="f_name"
                    id=""
                    className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="" className="font-Poppins poppins-medium ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="l_name"
                    id=""
                    className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                  />
                </div>
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company_name"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Country / Region
                </label>
                <select
                  name="country"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                >
                  <option value="" selected>
                    Choose Country
                  </option>
                  {CounrtyData.map((item) => (
                    <option value="" key={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Street address
                </label>
                <input
                  type="text"
                  name="address"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Province
                </label>
                <select
                  name="province"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                >
                  <option value="" selected>
                    Choose Country
                  </option>
                  {CounrtyData.map((item) => (
                    <option value="" key={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  ZIP code
                </label>
                <input
                  type="text"
                  name="zip_code"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="" className="font-Poppins poppins-medium ">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="border my-2 border-gray-300 w-full py-2 rounded-lg px-2"
                />
              </div>
            </div>
            <div className="details-section mx-28">
              <div className="deatils flex justify-between">
                <div className="product-detail">
                  <h2 className="font-Poppins poppins-medium text-xl">
                    Product
                  </h2>
                  <h4 className="font-Poppins poppins-regular my-2">
                    <span className="text-[#9F9F9F]">Asgaard sofa</span> x 1
                  </h4>
                  <h4 className="font-Poppins poppins-regular my-2">
                    Subtotal
                  </h4>
                  <h4 className="font-Poppins poppins-regular my-2">Total</h4>
                </div>
                <div className="Subtotal-detail">
                  <h2 className="font-Poppins poppins-medium text-xl">
                    Subtotal
                  </h2>
                  <h4 className="font-Poppins poppins-regular my-2">
                    Rs. 250,000.00
                  </h4>
                  <h4 className="font-Poppins poppins-regular my-2">
                    Rs. 250,000.00
                  </h4>
                  <h4 className="font-Poppins poppins-bold my-2">
                    <span className="text-lg text-[#B88E2F]">
                      Rs. 250,000.00
                    </span>
                  </h4>
                </div>
              </div>
              <hr className="bg-[#D9D9D9] my-8"/>
              <li className="font-Poppins poppoins-regular text-lg">Direct Bank Transfer</li>
              <p className="py-4 text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className="radio-section ">
                <input type="radio" name="payment" value="bank_transfer"/> <label htmlFor="" className="text-[#9F9F9F] px-2">Direct Bank Transfer</label><br />
                <input type="radio" name="payment" value="cod"/> <label htmlFor="" className="text-[#9F9F9F] px-2">Cash On Delivery</label>
              </div>
              <p className="font-Poppins poppins-light py-3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-Poppins poppins-bold">privacy policy.</span></p>
              <div className="button flex justify-center my-5">
              <button className="border-2 border-black px-14 py-4 rounded-2xl hover:text-white hover:bg-[#B88E2F] hover:border-[#B88E2F]">Place order</button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default CheckOut;
