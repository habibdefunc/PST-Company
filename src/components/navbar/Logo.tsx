import logo from "../../assets/img/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <img
        src={logo}
        alt="logo"
        className="h-10 w-10 md:h-14 md:w-14 object-contain rounded-lg shadow-sm"
      />
      <span className="font-extrabold text-lg md:text-2xl tracking-wide font-['Raleway']">
        PESONA SUMUT <span className="text-yellow-500">TRANS</span>
      </span>
    </div>
  );
}
