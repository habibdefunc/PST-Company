import { NavLink } from "react-router-dom";
import { menus } from "./menudata";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700 text-base md:text-lg">
      {menus.map((menu, index) => (
        <li key={index} className="relative list-none">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              `cursor-pointer relative transition duration-300 ${
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {menu.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
