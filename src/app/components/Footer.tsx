import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLg from "../assets/footer/footer-lg.svg";

function Footer() {
  return (
    <footer className="footer grid items-center ">
      <div className="group-1 flex items-center justify-between">
        <div className="group-1_logo">
          <Image src={FooterLg} alt="logo" />
          <p className="address">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="group-1-1 grid">
          <h1 className="title">Links</h1>
          <b>Home</b>
          <b>Shop</b>
          <b>About</b>
          <b>Contact</b>
        </div>
        <div className="group-1-2 grid">
          <h1 className="title">Help</h1>
          <b>Payment Options</b>
          <b>Reuturns</b>
          <b>Privacy Policies</b>
        </div>
        <div className="group-1-3">
          <h1 className="title">News Letter</h1>
          <div className="email">
            <input type="text" placeholder="Enter your email" />
            <button>Subcribe</button>
          </div>
        </div>
      </div>
      <div className="group-2 text-center">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;
