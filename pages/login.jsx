import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-br from-primary to-gray-600 h-screen w-screen">
        <Image
          src="https://images.pexels.com/photos/8819765/pexels-photo-8819765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="pic"
          className="object-cover w-screen h-screen absolute top-0 mix-blend-overlay"
        />

        <div className="bg-primary bg-opacity-90 md:w-[40%] w-[80%] absolute p-5 rounded-md ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
            {/* Name */}
            <div className="flex flex-col gap-1 text-white ">
              <label htmlFor="">Email</label>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Type your email"
                name=""
                id=""
                className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
              />
            </div>
            {/* Name */}
            <div className="flex flex-col gap-1 text-white ">
              <label htmlFor="">Password</label>
              <input
                onChange={handleChange}
                type="password"
                placeholder="Type Your Password"
                name=""
                id=""
                className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
              />
            </div>
            <div className="flex gap-1 text-white ">
              <input
                type="submit"
                value="Submit"
                className="bg-gray-800 cursor-pointer px-3 py-2 rounded shadow-sm shadow-gray-200 hover:shadow-none"
              />
            </div>
            <p className="text-white text-center">
          Already have an account{" "}
          <Link
            href="/register"
            class="text-blue-600 hover:underline dark:text-blue-500"
          >
            Register Now
          </Link>
          .
        </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
