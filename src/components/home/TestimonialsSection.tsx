"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionTitle from "../../lib/sectionTitle";
import WaveTop from "../../lib/waveTop";
import { Quote, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variants animasi item
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data default agar rating langsung muncul saat refresh
const defaultTestimonials = [
  { id: "loading-1", name: "Loading...", city: "-", comment: "-", rating: 5 },
  { id: "loading-2", name: "Loading...", city: "-", comment: "-", rating: 4 },
];

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
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(defaultTestimonials);

  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const totalReviews = testimonials.length;
  const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          "https://script.google.com/macros/s/AKfycbwyBAtnE70lBHXYj0bm3aAACPTpcZIEbEGsOMHvxO_YiAhvDb-sEN1tbSd8hZt8cSVXhQ/exec"
        );

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

        setTestimonials(mapped);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  const renderAverageStars = (avg: number) => {
    const stars = [];
    const filled = Math.round(avg);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-6 h-6 ${
            i < filled ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="relative py-16 px-6 md:px-16 bg-white text-center overflow-hidden">
      <WaveTop />

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={item}
      >
        <SectionTitle>
          Rating <span className="text-yellow-500">Kami</span>
        </SectionTitle>
      </motion.div>

      {/* Swiper */}
      {testimonials.length === 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="py-20 text-gray-400"
        >
          Belum ada rating
        </motion.div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          autoHeight
          pagination={{
            clickable: true,
          }}
          className="max-w-3xl mx-auto relative"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={item}
                className="bg-gray-50 mx-2 md:mx-4 p-6 md:p-8 rounded-xl flex flex-col items-center relative shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-yellow-500 mb-3" />
                <p className="italic text-gray-600 text-sm md:text-base mb-2">
                  "{t.comment}"
                </p>

                <div className="flex items-center mb-2 gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-6 h-6 ${
                          idx < t.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h4 className="mt-1 font-semibold text-sm md:text-base">
                  {t.name}, {t.city}
                </h4>

                {/* Pagination bullets inside card */}
                <div className="swiper-pagination-custom flex justify-center mt-4 gap-2"></div>
              </motion.div>
            </SwiperSlide>
          ))}

          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #f59e0b;
            }
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #f59e0b;
              opacity: 0.5;
              border-radius: 50%;
              display: inline-block;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
            }
          `}</style>
        </Swiper>
      )}

      {/* Total rating */}
      {totalReviews > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={item}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex">{renderAverageStars(averageRating)}</div>
          <span className="text-gray-600 text-sm md:text-base">
            {averageRating.toFixed(1)}/5 dari {totalReviews} review
          </span>
        </motion.div>
      )}

      {/* Link */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={item}
        className="mt-6 text-center"
      >
        <NavLink
          to="/rating-kami"
          className="text-yellow-500 hover:underline text-lg md:text-md"
        >
          Beri Kami Rating &rarr;
        </NavLink>
      </motion.div>
    </section>
  );
}
