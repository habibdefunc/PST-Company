"use client";

import { motion } from "framer-motion";

export default function SuccessMessage() {
  return (
    <div className="text-center py-10">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="text-4xl mb-3"
      >
        😊
      </motion.div>
      <h2 className="text-xl font-semibold text-yellow-500">
        Terima kasih! Testimoni berhasil dikirim.
      </h2>
    </div>
  );
}
