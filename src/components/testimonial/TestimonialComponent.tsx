"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FormFields from "./FormFields";
import RatingStars from "./RatingStars";
import SuccessMessage from "./SuccessMessage";

// Tipe formData
type FormData = {
  name: string;
  isAnonymous: boolean;
  email: string;
  city: string;
  comment: string;
  rating: number;
};

export default function TestimonialComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    isAnonymous: false,
    email: "",
    city: "",
    comment: "",
    rating: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Type-safe handleChange
  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      isAnonymous: false,
      email: "",
      city: "",
      comment: "",
      rating: 0,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.rating) return;

    try {
      setIsSubmitting(true);
      // Post ke API Apps Script
      await axios.post("/api/testimonial", {
        name: formData.isAnonymous ? "Anonymous" : formData.name,
        email: formData.email,
        city: formData.city,
        comment: formData.comment,
        rating: formData.rating,
      });

      setIsSuccess(true);
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="py-12 px-4 md:px-8 lg:px-16 bg-white font-[Poppins]"
    >
      <motion.div className="mt-15 max-w-2xl mx-auto bg-gray-100 rounded-2xl shadow-xl p-6 md:p-10">
        {/* Judul utama */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Testimonial Kami
        </h2>

        {/* Teks kecil/subjudul */}
        <p className="text-sm md:text-base text-gray-600 text-center mb-6">
          Berikan pengalamanmu agar kami bisa terus meningkatkan layanan.
        </p>

        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormFields formData={formData} handleChange={handleChange} />

            <RatingStars
              rating={formData.rating}
              setRating={(r: number) => handleChange("rating", r)}
            />

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Testimoni"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 rounded-lg shadow-md transition"
              >
                Reset
              </button>
            </div>
          </form>
        )}

        <motion.div className="mt-6 text-center flex justify-center">
          <NavLink
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-yellow-500 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
