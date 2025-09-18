import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import logo from "../../assets/img/logo.jpeg";

export default function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white font-['Raleway']">
      <div className="container mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Deskripsi */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg shadow-sm"
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              PESONA SUMUT <span className="text-yellow-500">TRANS</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Layanan transportasi yang aman, nyaman, dan terpercaya untuk
            perjalanan Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-500 cursor-pointer">Beranda</li>
            <li className="hover:text-yellow-500 cursor-pointer">Layanan</li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Tentang Kami
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Kontak Kami
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a
                href="mailto:pesonasumuttrans@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Email: pesonasumuttrans@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6282277763288"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Telepon: +62 822 7776 3288
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Komplek+Citra+Wisata+Blok+X+No.49"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Alamat: Komplek Citra Wisata Blok X No.49
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} PESONA SUMUT TRANS. All rights reserved.
      </div>
    </footer>
  );
}
