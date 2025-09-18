"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cars } from "./cars";
import CarCard from "./CarCard";
import CarSearch from "./CarSearch";

export default function ServiceComponent() {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white py-14 px-6 md:px-12 lg:px-20 font-['Poppins'] mt-10 scroll-mt-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Semua <span className="text-yellow-500">Unit Kami</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Temukan berbagai pilihan mobil yang bisa Anda sewa sesuai kebutuhan
          perjalanan Anda.
        </p>
      </motion.div>

      {/* Search */}
      <CarSearch search={search} setSearch={setSearch} />

      {/* Grid Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <AnimatePresence mode="wait">
          {filteredCars.map((car, i) => (
            <CarCard key={car.title} car={car} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
