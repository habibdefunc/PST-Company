"use client";

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

export default function FormFields({
  formData,
  handleChange,
}: FormFieldsProps) {
  return (
    <div className="space-y-6">
      {/* Checkbox Anonymous */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.isAnonymous}
          onChange={(e) => handleChange("isAnonymous", e.target.checked)}
          id="anonymous"
          className="w-4 h-4 accent-yellow-500"
        />
        <label
          htmlFor="anonymous"
          className="text-sm md:text-base text-gray-700"
        >
          Kirim sebagai Anonymous
        </label>
      </div>

      {/* Nama */}
      {!formData.isAnonymous && (
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm md:text-base font-medium text-gray-700 mb-1"
          >
            Nama
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Nama"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
      )}

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm md:text-base font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Kota */}
      <div className="flex flex-col">
        <label
          htmlFor="city"
          className="text-sm md:text-base font-medium text-gray-700 mb-1"
        >
          Kota
        </label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Kota"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
      </div>

      {/* Komentar */}
      <div className="flex flex-col">
        <label
          htmlFor="comment"
          className="text-sm md:text-base font-medium text-gray-700 mb-1"
        >
          Komentar
        </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={(e) => handleChange("comment", e.target.value)}
          placeholder="Komentar"
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={5}
          required
        />
      </div>
    </div>
  );
}
