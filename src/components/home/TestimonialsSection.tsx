"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import SectionTitle from "../../lib/sectionTitle";
import WaveTop from "../../lib/waveTop";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

// Data testimoni
const testimonials = [
  {
    text: "Pelayanan sangat memuaskan, mobil bersih dan driver ramah!",
    name: "Budi, Medan",
  },
  {
    text: "Travelnya nyaman, harga oke, recommended banget!",
    name: "Sari, Binjai",
  },
  { text: "Tour wisatanya seru banget, worth it!", name: "Andi, Siantar" },
  {
    text: "Booking gampang banget, tinggal WA langsung fix.",
    name: "Rina, Tebing Tinggi",
  },
  { text: "Sopirnya ramah, jalan aman, gak ugal-ugalan.", name: "Dedi, Medan" },
  {
    text: "Harga bersahabat, cocok buat liburan keluarga.",
    name: "Maya, Pematang Siantar",
  },
];

// Generate rating 3–5 acak
const getRandomRating = () => Math.floor(Math.random() * 3) + 3;

export default function TestimonialsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: false, amount: 0.2 }}
      className="relative py-16 px-6 md:px-16 bg-white text-center overflow-hidden"
    >
      <WaveTop />
      <SectionTitle>Testimoni Pelanggan</SectionTitle>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-3xl mx-auto relative"
      >
        {testimonials.map((t, i) => {
          const rating = getRandomRating();
          return (
            <SwiperSlide key={i}>
              <motion.div className="bg-gray-50 mx-2 md:mx-4 p-6 md:p-8 rounded-xl shadow flex flex-col items-center">
                <Quote className="w-8 h-8 text-yellow-500 mb-3" />
                <p className="italic text-gray-600 text-sm md:text-base mb-2">
                  "{t.text}"
                </p>
                <div className="flex mb-2">
                  {Array.from({ length: rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <h4 className="mt-1 font-semibold text-sm md:text-base">
                  {t.name}
                </h4>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* tombol next/prev */}
        <div className="swiper-button-next !text-yellow-400 after:!text-2xl"></div>
        <div className="swiper-button-prev !text-yellow-400 after:!text-2xl"></div>
      </Swiper>
    </motion.section>
  );
}
