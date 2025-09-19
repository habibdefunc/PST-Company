"use client";

import { motion } from "framer-motion";

type FormData = {
  name: string;
  isAnonymous: boolean;
  email: string;
  city: string;
  comment: string;
  rating: number;
};

type FormFieldsProps = {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FormFields({
  formData,
  handleChange,
}: FormFieldsProps) {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* Checkbox di atas */}
      <motion.label
        variants={itemVariants}
        className="flex items-center gap-2 text-gray-700"
      >
        <input
          type="checkbox"
          checked={formData.isAnonymous}
          onChange={(e) => handleChange("isAnonymous", e.target.checked)}
          className="w-5 h-5 accent-yellow-500"
        />
        Kirim sebagai Anonymous
      </motion.label>

      {/* Nama */}
      {!formData.isAnonymous && (
        <motion.input
          type="text"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          variants={itemVariants}
        />
      )}

      {/* Email */}
      <motion.input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        required
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        variants={itemVariants}
      />

      {/* Kota */}
      <motion.input
        type="text"
        placeholder="Kota"
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
        required
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        variants={itemVariants}
      />

      {/* Komentar */}
      <motion.textarea
        placeholder="Tulis komentar..."
        value={formData.comment}
        onChange={(e) => handleChange("comment", e.target.value)}
        rows={4}
        required
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
        variants={itemVariants}
      />
    </motion.div>
  );
}
