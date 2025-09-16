import { FaBars, FaTimes } from "react-icons/fa";

interface HamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Hamburger({ open, setOpen }: HamburgerProps) {
  return (
    <div
      className="md:hidden text-2xl cursor-pointer transition-transform duration-300"
      onClick={() => setOpen(!open)}
    >
      {open ? <FaTimes /> : <FaBars />}
    </div>
  );
}
