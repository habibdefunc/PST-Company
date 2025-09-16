import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavbarComponent from "../components/navbar/NavbarComponent";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <>
      <NavbarComponent />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/layanan-kami" element={<Layanan />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/kontak-kami" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
}
