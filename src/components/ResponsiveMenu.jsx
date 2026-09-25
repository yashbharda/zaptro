import { UserButton, useUser } from "@clerk/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import { IoDiamond } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();
  return (
    <div
      className={`${openNav ? "left-0" : "-left-full"} fixed bottom-0 top-0 z-20 flex h-screen w-[60%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex  items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <div>
            <h1 className="font-bold">Hello, {user?.firstName}</h1>
            <h1 className="text-sm flex text-center justify-center text-slate-500">
              <span className="text-yellow-500 mt-1 mr-1.5">
                <IoDiamond />
              </span>
              Premium User
            </h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link to={"/"} onClick={() => setOpenNav(false)}>
              <li>Home</li>
            </Link>
            <Link to={"/products"} onClick={() => setOpenNav(false)}>
              <li>Products</li>
            </Link>
            <Link to={"/about"} onClick={() => setOpenNav(false)}>
              <li>About</li>
            </Link>
            <Link to={"/contact"} onClick={() => setOpenNav(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
