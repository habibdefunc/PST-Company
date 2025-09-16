"use client";
import { motion } from "framer-motion";
import SectionTitle from "../../lib/sectionTitle";
import Card from "../../lib/card";
import WaveTop from "../../lib/waveTop";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../../lib/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contacts = [
  { icon: Mail, text: "pesonasumuttrans@gmail.com" },
  { icon: Phone, text: "+62 812 3456 7890" },
  { icon: MapPin, text: "Medan, Sumatera Utara" },
];

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
      <SectionTitle>Hubungi Kami</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <Card className="flex flex-col items-center p-6">
              <c.icon className="w-8 h-8 text-yellow-500 mb-3" />
              <p className="text-gray-600 text-sm md:text-base">{c.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="/kontak-kami"
          className="text-yellow-500 hover:underline text-base md:text-md "
        >
          Lihat Selengkapnya &rarr;
        </a>
      </div>
    </motion.section>
  );
}
