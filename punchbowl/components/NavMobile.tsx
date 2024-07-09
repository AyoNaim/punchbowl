"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const NavMobile = () => {
  const [open, setopen] = useState(false);
  const toggleMenu = () => {
    setopen(!open);
  };

  return (
    <div className="bg-amber-100 flex justify-center items-center w-screen h-20 border-b border-opacity-55">
      <div className="w-11/12 flex justify-between items-center relative">
        <div className="flex justify-between items-center gap-2">
          <Button
            variant={"outline"}
            className="border border-opacity-55 rounded-none"
          >
            Categories
          </Button>
        </div>
        <div className="flex justify-between items-center mr-4">
          <Image src={"./logo.svg"} alt="logo" width={30} height={30} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Image src={"./search.svg"} alt="search" width={20} height={20} />
          <div onClick={toggleMenu}>
            <Image src={"./menu.svg"} alt="menu" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;