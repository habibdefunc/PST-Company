"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-16">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay hitam */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten hero */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 text-center max-w-md sm:max-w-2xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-snug sm:leading-tight">
          Selamat Datang di{" "}
          <span className="text-yellow-500">Pesona Sumut Trans</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-5 sm:mb-6 leading-relaxed max-w-sm sm:max-w-xl mx-auto">
          Layanan transportasi aman, nyaman, <br className="block sm:hidden" />
          dan terpercaya untuk perjalanan Anda.
        </p>

        <a
          href="/layanan-kami"
          className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition text-base sm:text-lg md:text-xl"
        >
          Mulai Sekarang
        </a>
      </motion.div>
    </section>
  );
}
