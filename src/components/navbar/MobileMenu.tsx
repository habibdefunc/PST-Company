import { NavLink } from "react-router-dom";
import { menus } from "./menudata";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden fixed top-14 left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <ul className="flex flex-col items-center gap-6 py-6 font-['Raleway'] text-gray-700 font-semibold text-base">
        {menus.map((menu) => (
          <li key={menu.path} className="list-none">
            <NavLink
              to={menu.path}
              onClick={() => setOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `cursor-pointer transition duration-300 ${
                  isActive
                    ? "border-b-2 border-yellow-500 pb-1 text-yellow-500"
                    : "hover:text-yellow-500"
                }`
              }
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
