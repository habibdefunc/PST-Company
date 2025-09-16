import { useState } from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

import Logo from "./logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4 font-['Raleway']">
        <Logo />
        <DesktopMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <MobileMenu
        open={open}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setOpen={setOpen}
      />
    </nav>
  );
}
