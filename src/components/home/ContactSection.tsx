"use client";

import { motion } from "framer-motion";
import SectionTitle from "../../lib/sectionTitle";
import Card from "../../lib/card";
import WaveTop from "../../lib/waveTop";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { company } from "../contact/company";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function ContactSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: false, amount: 0.2 }}
      className="relative py-16 px-6 md:px-16 bg-white text-center overflow-hidden"
    >
      <WaveTop />
      <SectionTitle>Kontak Kami</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <motion.div custom={0} variants={fadeInUp}>
          <Card className="flex flex-col items-center justify-center p-6 min-h-[180px] cursor-pointer hover:shadow-lg transition">
            <Mail className="w-8 h-8 text-yellow-500 mb-3" />
            <a
              href={`mailto:${company.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm md:text-base hover:text-yellow-500 transition-colors text-center"
            >
              {company.email}
            </a>
          </Card>
        </motion.div>

        {/* Phone */}
        <motion.div custom={1} variants={fadeInUp}>
          <Card className="flex flex-col items-center justify-center p-6 min-h-[180px] cursor-pointer hover:shadow-lg transition">
            <Phone className="w-8 h-8 text-yellow-500 mb-3" />
            <a
              href={`tel:${company.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm md:text-base hover:text-yellow-500 transition-colors text-center"
            >
              {company.phone}
            </a>
          </Card>
        </motion.div>

        {/* Address */}
        <motion.div custom={2} variants={fadeInUp}>
          <Card className="flex flex-col items-center justify-center p-6 min-h-[180px] cursor-pointer hover:shadow-lg transition">
            <MapPin className="w-8 h-8 text-yellow-500 mb-3" />
            <a
              href={company.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm md:text-base hover:text-yellow-500 transition-colors text-center"
            >
              {company.address}
            </a>
          </Card>
        </motion.div>
      </div>

      <div className="mt-6 text-center">
        <NavLink
          to="/kontak-kami"
          className="text-yellow-500 hover:underline text-base md:text-md"
        >
          Lihat Selengkapnya &rarr;
        </NavLink>
      </div>
    </motion.section>
  );
}
