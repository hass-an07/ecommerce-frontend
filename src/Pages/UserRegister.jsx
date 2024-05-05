import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [formdata, setFormdata] = useState({});
  const [errors, setErrors] = useState({});
  const [mesage, setMessage] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isLogin , setIslogin] = useState({});
  const getData = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch("http://127.0.0.1:8000/api/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

    try {
      const data = await response.json();
      console.log(data)
      if (data.status === false) {
        setErrors(data.errors); 
        setMessage(data.message); 
      } else {
        setErrors({});
      }
      if(data.status === true){
        navigate("/login");
      }

    } catch (error) {
      setErrors(error)
    }
  };

  return (
    
    <>
      <div
    className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    {/* {errors && <h1 className="text-xl  bg-red-500 py-8 text-white text-center rounded-xl mb-3">{errors}</h1>} */}

    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Register Here</h1>
            <p className="mt-2 text-gray-500">Register in below to create your account</p>
        </div>
        <div className="mt-5">
            <form action="" onSubmit={handleSubmit}>
                <div className="relative mt-6">
                    <input type="text" name="name" id="name" placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" onChange={getData}/>
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Name</label>
                </div>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <div className="relative mt-6">
                    <input type="text" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" onChange={getData}/>
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" onChange={getData}/>
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
                <div className="relative mt-6">
                    <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" onChange={getData}/>
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirm Password</label>
                </div>
                {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Register</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <Link to={'/login'}> 
                        Login
                    </Link>
                </p>
            </form>
        </div>
    </div>
</div>
    </>
  );
};

export default UserRegister;
