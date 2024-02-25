"use client";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center h-24 py-8 text-2xl bg-slate-950">
      <Link href="/" className="ml-6 font-black ">
        anhnlh
      </Link>
      <ul className="justify-center hidden font-medium grow mr-11 md:flex">
        <li className="mx-3">
          <Link href="/" className="p-2 text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href="/#projects"
            className="p-2 text-white hover:text-gray-300"
          >
            Projects
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/cv" className="p-2 text-white hover:text-gray-300">
            Curriculum Vitae
          </Link>
        </li>
      </ul>
      <Bars3Icon
        onClick={handleClick}
        className="ml-auto mr-6 w-14 h-14 md:hidden"
      />
    </nav>
  );
}
