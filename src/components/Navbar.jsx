import React from "react";
import { NavLink } from "react-router";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="py-5 flex items-center center justify-between gap-4">
          <div className="flex items-center gap-6 flex-1">
            <div>
              <h1 className="text-2xl text-blue-500 font-bold ">
                Apply<span className="text-black">Ease</span>
              </h1>
            </div>
            <div className="space-x-2 navMenu">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/templates"}>Templates</NavLink>
              <NavLink to={"/request"}>Request Template</NavLink>
              <NavLink to={"/add"}>Add Template</NavLink>
            </div>
          </div>
          <div>
            <form>
              <Input type={"search"} placeholder={"Search Here"} />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
