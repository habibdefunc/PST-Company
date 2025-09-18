import { menus } from "./menudata";
import { useLocation, NavLink } from "react-router-dom";

export default function FooterNav() {
  const location = useLocation();

  return (
    <nav>
      <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
      <ul className="flex flex-col md:flex-col gap-2 text-sm text-gray-300">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <li key={menu.name}>
              <NavLink
                to={menu.path}
                className={`block hover:text-yellow-500 transition ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                {menu.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
