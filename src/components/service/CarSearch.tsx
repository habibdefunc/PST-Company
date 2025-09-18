"use client";
import { FaSearch } from "react-icons/fa";

interface CarSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function CarSearch({ search, setSearch }: CarSearchProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative w-full md:w-1/2">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari unit (contoh: Avanza, Hiace, Pajero)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition outline-none"
        />
      </div>
    </div>
  );
}
