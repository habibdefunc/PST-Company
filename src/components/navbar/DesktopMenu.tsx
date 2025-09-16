type DesktopMenuProps = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export default function DesktopMenu({
  activeMenu,
  setActiveMenu,
}: DesktopMenuProps) {
  const menus = ["Home", "Layanan", "Tentang", "Kontak"];

  return (
    <ul className="flex gap-8">
      {menus.map((menu) => (
        <li
          key={menu}
          onClick={() => setActiveMenu(menu)}
          className={`cursor-pointer transition-colors ${
            activeMenu === menu
              ? "text-yellow-500 font-bold"
              : "text-gray-800 hover:text-yellow-500"
          }`}
        >
          {menu}
        </li>
      ))}
    </ul>
  );
}
