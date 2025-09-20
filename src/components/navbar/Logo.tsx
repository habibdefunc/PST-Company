import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <img
        src={logo}
        alt="logo"
        className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-md shadow-sm"
      />
      <span className="font-extrabold text-base md:text-lg tracking-wide font-['Raleway'] leading-tight">
        <NavLink to={"/"}>
          PESONA <span className="text-yellow-500">SUMUT TRANS</span>
        </NavLink>
      </span>
    </div>
  );
}
