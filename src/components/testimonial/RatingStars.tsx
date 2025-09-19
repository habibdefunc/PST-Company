"use client";
import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  setRating: (r: number) => void;
  showError?: boolean;
};

export default function RatingStars({
  rating,
  setRating,
  showError,
}: RatingStarsProps) {
  return (
    <div className="flex flex-col items-center gap-1 my-2">
      <div className="flex gap-2 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-7 h-7 cursor-pointer transition-colors duration-200 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(i + 1)}
          />
        ))}
      </div>
      {showError && (
        <span className="text-red-500 text-sm mt-1">Rating wajib diisi</span>
      )}
    </div>
  );
}
