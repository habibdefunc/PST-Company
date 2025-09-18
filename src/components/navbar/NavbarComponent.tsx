import { useState } from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";

export default function NavbarComponent() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 font-['Raleway']">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* LEFT (Logo + DesktopMenu, center di desktop) */}
        <div className="hidden md:flex items-center gap-10 mx-auto">
          <Logo />
          <DesktopMenu />
        </div>

        {/* Mobile layout (Logo kiri, Hamburger kanan) */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Logo />
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  );
}
