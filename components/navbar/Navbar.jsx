'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu,ShoppingCart,X } from "react-feather";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      label: "home",
      to:'home'
    },
    {
      id: 2,
      label: "Plans and Bills",
      to:'plans_and_bills'
    },
    {
      id: 3,
      label: "Reviews",
      to:"reviews"
    },
    {
      id: 4,
      label: "Get in touch",
      to:'get_in_touch'
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-slate-900 to-slate-700 fixed nav">
      <div>
          <Image src="/assets/logo/logo.png" width={30} height={30}/>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, label,to}) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-gray duration-200 link-underline"
          >
            <Link href={to}>{label} </Link>
          </li>
        ))}
        <li><ShoppingCart className="nav-links cursor-pointer text-white hover:scale-105 hover:text-gray duration-200" size={20}/></li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? <X className="text-white" size={30} /> : <Menu className="text-gray-500" size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-start items-start absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, label,to }) => (
            <li
              key={id}
              className="px-4 text-white cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={to}>
                {label}
              </Link>
            </li>
          ))}
          <li className="px-4 py-6 nav-links cursor-pointer"><ShoppingCart className="text-white" size={20}/></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar