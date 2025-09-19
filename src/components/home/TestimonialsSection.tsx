"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import SectionTitle from "../../lib/sectionTitle";
import WaveTop from "../../lib/waveTop";
import { Quote, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Tipe data dari Google Sheet
type TestimonialRow = {
  Nama?: string;
  Kota?: string;
  Komentar?: string;
  Rating?: string | number;
  ID?: string | number;
};

type Testimonial = {
  id: string | number;
  name: string;
  city: string;
  comment: string;
  rating: number;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("/api/testimonial"); // Proxy ke Apps Script
        const dataArray: TestimonialRow[] = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.data)
          ? res.data.data
          : [];

        const mapped: Testimonial[] = dataArray.map((row) => ({
          id: row.ID || `${Date.now()}-${Math.random()}`,
          name: row.Nama || "Anonymous",
          city: row.Kota || "-",
          comment: row.Komentar || "-",
          rating: Number(row.Rating) || 0,
        }));

        console.log("Mapped testimonials:", mapped); // cek di console

        setTestimonials(mapped);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setTestimonials([]);
      }
    };

    fetchTestimonials();
  }, []);

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

      {testimonials.length === 0 ? (
        <div className="py-20 text-gray-400">Belum ada testimoni</div>
      ) : (
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
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 mx-2 md:mx-4 p-6 md:p-8 rounded-xl shadow flex flex-col items-center"
              >
                <Quote className="w-8 h-8 text-yellow-500 mb-3" />
                <p className="italic text-gray-600 text-sm md:text-base mb-2">
                  "{t.comment}"
                </p>
                <div className="flex mb-2">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <h4 className="mt-1 font-semibold text-sm md:text-base">
                  {t.name}, {t.city}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="mt-6 text-center">
        <NavLink
          to="/rating-kami"
          className="text-yellow-500 hover:underline text-lg md:text-md"
        >
          Beri Kami Rating &rarr;
        </NavLink>
      </div>
    </motion.section>
  );
}
