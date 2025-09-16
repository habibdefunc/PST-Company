"use client";
import { motion } from "framer-motion";
import Card from "../../lib/card";
import SectionTitle from "../../lib/sectionTitle";
import Button from "../../lib/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const services = [
  {
    title: "Sewa Mobil",
    desc: "Nikmati perjalanan dengan mobil nyaman dan terawat.",
    price: "Rp 500.000 / Hari",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Travel",
    desc: "Perjalanan antar kota dengan pelayanan terbaik.",
    price: "Rp 150.000 / Orang",
    img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tour Wisata",
    desc: "Jelajahi destinasi terbaik di Sumatera Utara.",
    price: "Mulai Rp 1.000.000",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: false, amount: 0.3 }}
      className="relative py-10 px-4 md:py-16 md:px-16 bg-white text-center"
    >
      <SectionTitle>Layanan Kami</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <Card className="flex flex-col">
              <img
                src={s.img}
                alt={s.title}
                className="h-48 md:h-56 w-full object-cover"
              />
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-xl font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-base md:text-base mb-2">
                  {s.desc}
                </p>
                <p className="text-yellow-600 font-bold mb-3">{s.price}</p>
                <Button
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="mt-auto text-base md:text-base"
                >
                  Pesan Sekarang
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="/layanan-kami"
          className="text-yellow-500 hover:underline text-lg md:text-md"
        >
          Lihat Selengkapnya &rarr;
        </a>
      </div>
    </motion.section>
  );
}
