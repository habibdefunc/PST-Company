"use client";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Emoticon Sedih dengan Animasi */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl mb-4"
      >
        😢
      </motion.div>

      <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-500 mb-6">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Halaman Tidak Ditemukan!
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Maaf, halaman yang kamu cari tidak tersedia. Mungkin sudah dihapus atau
        URL-nya salah.
      </p>
      <NavLink
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition text-base md:text-lg"
      >
        Kembali ke Beranda &rarr;
      </NavLink>
    </motion.div>
  );
}
