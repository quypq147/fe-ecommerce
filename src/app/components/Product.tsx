import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import BedRoom from "../assets/section-2/bedroom.png";

const ProductData = [
  { index: 1, name: "Syltherine", type: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%" },
  { index: 2, name: "Leviosa", type: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "", discount: "" },
  { index: 3, name: "Lolito", type: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%" },
  { index: 4, name: "Respira", type: "Outdoor bar table and stool", price: "Rp 500.000", oldPrice: "", discount: "New" },
  { index: 5, name: "Grifo", type: "Night lamp", price: "Rp 1.500.000", oldPrice: "", discount: "" },
  { index: 6, name: "Muggo", type: "Small mug", price: "Rp 150.000", oldPrice: "", discount: "New" },
  { index: 7, name: "Pingky", type: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%" },
  { index: 8, name: "Potty", type: "Minimalist flower pot", price: "Rp 500.000", oldPrice: "", discount: "New" },
];

function Products() {
  return (
    <section className="py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold">Our Products</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {ProductData.map((product) => (
          <motion.div key={product.index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Card className="shadow-lg rounded-lg bg-white overflow-hidden relative">
              
              {/* Discount Badge */}
              {product.discount && (
                <span className={`absolute top-4 right-4 px-2 py-1 text-sm font-bold text-white rounded-full ${
                  product.discount.includes("%") ? "bg-red-500" : "bg-green-500"
                }`}>
                  {product.discount}
                </span>
              )}

              {/* Image with Hover Overlay */}
              <div className="relative group">
                <Image src={BedRoom} alt={product.name} width={500} height={500} className="rounded-t-lg" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-black px-4 py-2 mb-2">Add to cart</Button>
                  <div className="flex gap-4 text-white text-sm">
                    <span>⬆ Share</span>
                    <span>🔁 Compare</span>
                    <span>❤️ Like</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.type}</CardDescription>
                <p className="text-lg font-semibold mt-2">
                  {product.price} {product.oldPrice && <span className="text-gray-400 line-through text-sm ml-2">{product.oldPrice}</span>}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        <Button className="border border-[#AE8D57] text-[#AE8D57] px-6 py-2 rounded-md hover:bg-[#AE8D57] hover:text-white">
          Show More
        </Button>
      </div>
    </section>
  );
}

export default Products;


