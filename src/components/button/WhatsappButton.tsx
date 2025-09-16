import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6285156913789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
