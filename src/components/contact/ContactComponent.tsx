"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function ContactComponent() {
  return (
    <section className="pt-24 pb-12 px-6 md:px-20 bg-white font-['Poppins'] scroll-mt-20">
      {/* Judul */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInUp}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Kontak Kami
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Hubungi kami jika Anda memiliki pertanyaan atau ingin mengetahui lebih
          lanjut tentang layanan kami.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <ContactInfo custom={1} />
        <ContactMap custom={2} />
      </div>
    </section>
  );
}
