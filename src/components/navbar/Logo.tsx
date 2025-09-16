import logo from "../../assets/img/logo.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <img
        src={logo}
        alt="logo"
        className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-md shadow-sm"
      />
      <span className="font-extrabold text-sm md:text-lg tracking-wide font-['Raleway'] leading-tight">
        PESONA SUMUT <span className="text-yellow-500">TRANS</span>
      </span>
    </div>
  );
}
