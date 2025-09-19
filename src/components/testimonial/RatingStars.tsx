"use client";
import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  setRating: (r: number) => void;
};

export default function RatingStars({ rating, setRating }: RatingStarsProps) {
  return (
    <div className="flex gap-2 justify-center my-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-6 h-6 cursor-pointer ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={() => setRating(i + 1)}
        />
      ))}
    </div>
  );
}
