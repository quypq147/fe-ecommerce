import React from "react";
import Navbar from "./Navbar";
import SvgLogo from "../assets/logo.svg";
import Image from "next/image";
import { User, Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Image
      src={SvgLogo}
      alt="logo"
      width={120}
      height={40}
      className="h-10 w-auto"
    />
  );
};

function Header() {
  return (
    <header className="flex justify-between items-center p-4 ">
      <Logo />
      <Navbar />
      <div className="flex items-center gap-4">
        <User className="w-5 h-5 cursor-pointer" />
        <Search className="w-5 h-5 cursor-pointer" />
        <Heart className="w-5 h-5 cursor-pointer" />
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
