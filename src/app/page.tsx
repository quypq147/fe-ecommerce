"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroPng from "./assets/hero.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BedRoomPng from "./assets/section-2/bedroom.png";
import LivingRoomPng from "./assets/section-2/living-room.png";
import DiningPng from "./assets/section-2/dining.png";
import Footer from "./components/Footer";
import Products from "./components/Product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronRight } from "lucide-react";

const Section2Items = [
  {
    index: "01",
    title: "Dining",
    image: DiningPng,
  },
  {
    index: "02",
    title: "Living",
    image: LivingRoomPng,
  },
  {
    index: "03",
    title: "Bedroom",
    image: BedRoomPng,
  },
];

const rooms = [
  { id: 1, title: "Inner Peace", category: "Bed Room", image: BedRoomPng },
  { id: 2, title: "Cozy White", category: "Dining Room", image: DiningPng },
  {
    id: 3,
    title: "Modern Elegance",
    category: "Living Room",
    image: LivingRoomPng,
  },
];

const Section2Product = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-6 mt-8"
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
      {Section2Items.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={350}
            className="rounded-lg shadow-lg"
          />
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="main">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src={HeroPng}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <Card className="max-w-md p-6 bg-[#F9E6C3] shadow-xl rounded-lg">
            <CardHeader>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm text-gray-500"
              >
                New Arrival
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <CardTitle className="text-3xl font-bold text-[#AE8D57]">
                  Discover Our New Collection
                </CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-600"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </motion.p>
            </CardContent>
            <CardFooter>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#AE8D57] text-white px-6 py-2 rounded-md">
                  BUY NOW
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </section>

      {/* Section 2: Browse The Range */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold">Browse The Range</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>

        <Section2Product />
      </section>
      <section className="home-product py-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold">Our Products</h1>
          <p className="text-gray-600 mt-2">
            Browse our latest collection of stylish and modern furniture.
          </p>
        </motion.div>
        <div className="home-product-item flex ">
          <Products />
        </div>
      </section>
      <section className="inspiration flex py-16 bg-[#FBF8F3]">
        {/* Left */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold leading-tight mb-4">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-gray-600 mb-6">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
            <Button className="bg-[#AE8D57] text-white px-6 py-3 rounded-md hover:bg-[#8A6B40]">
              Explore More
            </Button>
          </motion.div>
        </div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="relative flex gap-4 overflow-x-auto scrollbar-hide">
            {rooms.map((room) => (
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div key={room.id} className="relative">
                      <Image
                        src={room.image}
                        alt={room.title}
                        width={500}
                        height={500}
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-lg flex items-center justify-between w-[90%]">
                        <div>
                          <p className="text-xs text-gray-500">{`0${room.id} — ${room.category}`}</p>
                          <p className="font-bold">{room.title}</p>
                        </div>
                        <Button className="bg-[#AE8D57] text-white p-2 rounded-none hover:bg-[#8A6B40]">
                          <ChevronRight size={18} />
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="share py-16 text-center">

      </section>
      <Footer />
    </div>
  );
}
