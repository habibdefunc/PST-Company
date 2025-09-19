"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Card from "../../lib/card";
import SectionTitle from "../../lib/sectionTitle";
import Button from "../../lib/button";
import { NavLink } from "react-router-dom";
import { cars } from "../service/cars";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
};

export default function ServicesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % cars.length);
    }, 180000);
    return () => clearInterval(interval);
  }, []);

  // ambil 3 mobil yang sedang aktif
  const visibleCars =
    index + 3 <= cars.length
      ? cars.slice(index, index + 3)
      : [...cars.slice(index), ...cars.slice(0, (index + 3) % cars.length)];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="relative py-10 px-4 md:py-16 md:px-16 bg-white text-center overflow-hidden"
    >
      {/* Judul */}
      <motion.div
        custom={0}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        <SectionTitle>
          Unit <span className="text-yellow-500">Kami</span>
        </SectionTitle>
      </motion.div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <AnimatePresence mode="wait">
          {visibleCars.map((car, i) => (
            <motion.div
              key={car.title + index}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              exit="exit"
              className="flex"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full"
              >
                <Card className="flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Gambar */}
                  <div className="w-full h-56 md:h-64 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={car.img}
                      alt={car.title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    />
                  </div>
                  {/* Judul + Tombol */}
                  <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl md:text-xl font-semibold mb-4">
                      {car.title}
                    </h3>
                    <Button
                      href="https://wa.me/+6282277763288"
                      target="_blank"
                      className="flex items-center justify-center gap-2 text-base md:text-base bg-green-500 hover:bg-green-600 text-white"
                    >
                      <FaWhatsapp size={18} /> Pesan Sekarang
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Link bawah */}
      <div className="mt-6 text-center">
        <NavLink
          to="/unit-kami"
          className="text-yellow-500 hover:underline text-lg md:text-md"
        >
          Lihat Selengkapnya &rarr;
        </NavLink>
      </div>
    </motion.section>
  );
}
