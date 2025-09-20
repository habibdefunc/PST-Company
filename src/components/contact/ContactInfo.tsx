"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
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
      className="md:w-1/3 space-y-6 "
    >
      <h3 className="text-lg font-semibold text-gray-700">{company.name}</h3>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <FaPhone className="text-yellow-500 w-6 h-6" />
        <a
          href={`tel:${company.phone}`}
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.phone}
        </a>
      </div>

      {/* WhatsApp */}
      <div className="flex items-center gap-4">
        <FaWhatsapp className="text-yellow-500 w-6 h-6" />
        <a
          href={`https://wa.me/${company.wa.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.wa}
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-yellow-500 w-6 h-6" />
        <a
          href={`mailto:${company.email}`}
          className="text-gray-600 hover:text-yellow-500 transition"
        >
          {company.email}
        </a>
      </div>

      {/* Address */}
      <div className="flex gap-4">
        <FaMapMarkerAlt className="text-yellow-500 w-6 h-6 flex-shrink-0" />
        <a
          href={company.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-yellow-500 transition leading-relaxed"
        >
          {company.address}
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-5 mt-4">
        <a
          href={company.ig}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaInstagram className="w-6 h-6" />
        </a>

        <a
          href={company.tiktok || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaTiktok className="w-6 h-6" />
        </a>

        <a
          href={company.fb}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  );
}
