import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";

export default function FooterComponent() {
  const company = {
    name: "PESONA SUMUT TRANS",
    email: "pesonasumuttrans@gmail.com",
    phone: "+6282277763288",
    address:
      "Komplek Citra Wisata Blok X No.49 Kec. Medan Johor, Kota Medan, Sumatera Utara.",
  };

  return (
    <footer className="bg-gray-900 text-white font-['Raleway']">
      <div className="container mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <FooterLogo />

        {/* Navigasi */}
        <FooterNav />

        {/* Kontak */}
        <FooterContact />
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
