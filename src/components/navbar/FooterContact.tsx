"use client";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { company } from "../contact/company";

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Kontak</h3>

      {/* List kontak */}
      <ul className="text-sm text-gray-300 space-y-3">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-500 w-5 h-5" />
          <a
            href={`mailto:${company.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            {company.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaPhone className="text-yellow-500 w-5 h-5" />
          <a
            href={`tel:${company.phone.replace(/\D/g, "")}`}
            className="hover:text-yellow-500 transition"
          >
            {company.phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaWhatsapp className="text-yellow-500 w-5 h-5" />
          <a
            href={`https://wa.me/${company.wa.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            {company.wa}
          </a>
        </li>
        <li className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
          <a
            href={company.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition leading-relaxed"
          >
            {company.address}
          </a>
        </li>
      </ul>

      {/* Sosial Media */}
      <div className="flex gap-5 mt-4">
        <a
          href={company.ig}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
        <a
          href={company.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaTiktok className="w-5 h-5" />
        </a>
        <a
          href={company.fb}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:scale-110 transition-transform"
        >
          <FaFacebook className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
