"use client";
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

interface ContactMapProps {
  custom?: number;
}

export default function ContactMap({ custom = 0 }: ContactMapProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      variants={fadeInUp}
      className="w-full md:w-2/3 h-96 md:h-80 rounded-lg shadow-md overflow-hidden mx-auto"
    >
      <iframe
        src={company.mapEmbed}
        width="100%"
        height="100%"
        className="border-0 pointer-events-auto"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
}
