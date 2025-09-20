"use client";

import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FormFields from "./FormFields";
import RatingStars from "./RatingStars";
import SuccessMessage from "./SuccessMessage";

type FormData = {
  name: string;
  isAnonymous: boolean;
  email: string;
  city: string;
  comment: string;
  rating: number;
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  const [showRatingError, setShowRatingError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.rating === 0) {
      setShowRatingError(true);
      return;
    }
    setShowRatingError(false);

    try {
      setIsSubmitting(true);
      const payload = new FormData();
      payload.append(
        "name",
        formData.isAnonymous ? "Anonymous" : formData.name
      );
      payload.append("email", formData.email);
      payload.append("city", formData.city);
      payload.append("comment", formData.comment);
      payload.append("rating", formData.rating.toString());

      await axios.post(
        "https://script.google.com/macros/s/AKfycbwyBAtnE70lBHXYj0bm3aAACPTpcZIEbEGsOMHvxO_YiAhvDb-sEN1tbSd8hZt8cSVXhQ/exec",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setIsSuccess(true);
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    setShowRatingError(false);
  };

  return (
    <section className="pt-18 md:pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-white font-[Poppins]">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-2xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-6 md:p-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Rating <span className="text-yellow-500">Kami</span>
        </h2>
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
              setRating={(r: number) => {
                handleChange("rating", r);
                setShowRatingError(false);
              }}
              showError={showRatingError}
            />
            {showRatingError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                Rating wajib diisi!
              </motion.p>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Testimoni"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl shadow-md transition"
              >
                Reset
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <NavLink
            to="/"
            className="text-yellow-500 hover:underline text-lg md:text-md"
          >
            Kembali Ke Beranda &rarr;
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
}
