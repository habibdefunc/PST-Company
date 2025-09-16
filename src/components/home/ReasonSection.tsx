"use client";
import { motion } from "framer-motion";
import Card from "../../lib/card";
import SectionTitle from "../../lib/sectionTitle";
import WaveTop from "../../lib/waveTop";
import { Shield, Zap, DollarSign, UserCheck, Smile, Car } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const reasons = [
  { icon: Shield, title: "Aman & Terpercaya" },
  { icon: Zap, title: "Cepat & Efisien" },
  { icon: DollarSign, title: "Harga Bersahabat" },
  { icon: UserCheck, title: "Driver Profesional" },
  { icon: Smile, title: "Pelayanan Ramah" },
  { icon: Car, title: "Fasilitas Lengkap" },
];

export default function ReasonsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: false, amount: 0.3 }}
      className="relative py-16 px-6 md:px-16 bg-white text-center overflow-hidden"
    >
      <WaveTop />
      <SectionTitle>Kenapa Pilih Kami?</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <Card className="flex flex-col items-center p-4 md:p-6">
              <r.icon className="w-10 h-10 text-yellow-500 mb-3" />
              <h4 className="font-semibold text-base md:text-lg">{r.title}</h4>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
