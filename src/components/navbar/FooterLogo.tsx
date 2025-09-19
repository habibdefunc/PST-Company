import logo from "../../assets/img/logo.jpeg";
import { NavLink } from "react-router-dom";

export default function FooterLogo() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg shadow-sm"
        />
        <h2 className="text-xl md:text-2xl font-bold tracking-wide">
          <NavLink to="/">
            PESONA <span className="text-yellow-500">SUMUT TRANS</span>
          </NavLink>
        </h2>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        Layanan transportasi yang aman, nyaman, dan terpercaya untuk perjalanan
        Anda.
      </p>
    </div>
  );
}
