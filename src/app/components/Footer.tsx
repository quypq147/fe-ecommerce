import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLg from "../assets/footer/footer-lg.svg";

function Footer() {
  return (
    <footer className="w-full border-t py-10 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Address */}
        <div>
          <Image src={FooterLg} alt="Funiro Logo" width={100} height={40} />
          <p className="mt-4 text-sm text-gray-600">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="#">Payment Options</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <div className="flex border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="ml-2 text-sm font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-4 text-left text-sm text-gray-500">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

