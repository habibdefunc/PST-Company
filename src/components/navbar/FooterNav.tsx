import { menus } from "./menudata";

export default function FooterNav() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <nav>
      <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
      <ul className="flex flex-col md:flex-col gap-2 text-sm text-gray-300">
        {menus.map((menu) => {
          const isActive = currentPath === menu.path;
          return (
            <li key={menu.name}>
              <a
                href={menu.path}
                className={`block hover:text-yellow-500 transition ${
                  isActive ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                {menu.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
