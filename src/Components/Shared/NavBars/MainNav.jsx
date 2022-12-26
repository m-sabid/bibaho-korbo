import Link from "next/link";
import { useState, useEffect } from "react";
import { GiLovers } from "react-icons/gi";

const MainNav = () => {
  const [navBar, setNabBg] = useState(false);

  const cBg = () => {
    const position = window.scrollY;
    if (position >= 550) {
      setNabBg(true);
    } else {
      setNabBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", cBg);
    // console.log("first");
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`${
            navBar
              ? "fixed top-0 z-50 md:w-3/4 bg-primary bg-opacity-90 w-full rounded-b-lg p-3 drop-shadow-lg md:px-10"
              : "md:w-5/6 absolute top-0 z-50 w-full rounded-b-lg p-3 drop-shadow-lg md:px-10"
          }`}
        >
          <div className="flex justify-between items-center navbar ">
            <Link href={"/"} className="inline-block navbar-start">
              <div className="flex items-center gap-3 md:text-3xl text-xl">
                <div className="text-white">
                  <GiLovers />
                </div>
                <h1 className="text-white font-philosopher font-extrabold">
                  Bibaho Korbo
                </h1>
              </div>
            </Link>

            {/*  */}
            {/*  */}
            <div className="flex">
              <div className="dropdown dropdown-end ">
                <label
                  tabIndex={0}
                  className="btn text-white btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl"
                >
                  <li>
                    <a>Register</a>
                  </li>
                  <li>
                    <a>Login</a>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}

            <div className="navbar-end hidden lg:flex text-white text-md uppercase">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href={"/"} className="active:bg-transparent">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="active:bg-transparent">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/*  */}
            {/*  */}

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>

            {/*  */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
