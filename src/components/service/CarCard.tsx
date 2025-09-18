"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Card from "../../lib/card";
import type { Car } from "./types";

interface CarCardProps {
  car: Car;
  index: number;
}

// Animasi fade in up
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className="flex"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-full"
      >
        <Card className="flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-full h-56 md:h-64 flex items-center justify-center overflow-hidden">
            <motion.img
              src={car.img}
              alt={car.title}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </div>
          <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
            <h3 className="text-xl md:text-xl font-semibold mb-4">
              {car.title}
            </h3>
            <a
              href="https://wa.me/6282277763288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-base md:text-base bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition"
            >
              <FaWhatsapp size={18} /> Pesan Sekarang
            </a>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
