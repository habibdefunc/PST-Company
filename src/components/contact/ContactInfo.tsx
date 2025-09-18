"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { company } from "./company";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

interface ContactInfoProps {
  custom?: number;
}

export default function ContactInfo({ custom = 0 }: ContactInfoProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      variants={fadeInUp}
      className="md:w-1/3 space-y-6"
    >
      <h3 className="text-lg font-semibold text-gray-700">{company.name}</h3>

      <div className="flex items-center gap-4">
        <FaPhone className="text-yellow-500 w-5 h-5" />
        <a
          href={`tel:${company.phone}`}
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.phone}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-yellow-500 w-5 h-5" />
        <a
          href={`mailto:${company.email}`}
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.email}
        </a>
      </div>

      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-yellow-500 w-5 h-5 mt-1" />
        <a
          href={company.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.address}
        </a>
      </div>
    </motion.div>
  );
}
