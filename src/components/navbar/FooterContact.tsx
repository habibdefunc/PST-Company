const company = {
  email: "pesonasumuttrans@gmail.com",
  phone: "+6282277763288",
  address:
    "Komplek Citra Wisata Blok X No.49 Kec. Medan Johor, Kota Medan, Sumatera Utara.",
};

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Kontak</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>
          <a
            href={`mailto:${company.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            Email: {company.email}
          </a>
        </li>
        <li>
          <a
            href={`https://wa.me/${company.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            Telepon: {company.phone}
          </a>
        </li>
        <li>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              company.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            Alamat: {company.address}
          </a>
        </li>
      </ul>
    </div>
  );
}
