import { NavLink } from "react-router-dom";
import { menus } from "./menudata";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex gap-8 font-['Raleway'] text-gray-700 font-semibold text-base">
      {menus.map((menu) => (
        <li key={menu.path} className="list-none">
          <NavLink
            to={menu.path}
            className={({ isActive }: { isActive: boolean }) =>
              `relative cursor-pointer transition duration-300 pb-1 ${
                isActive
                  ? "border-b-2 border-yellow-500 text-yellow-500"
                  : "hover:text-yellow-500"
              }`
            }
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
