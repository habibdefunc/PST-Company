interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function Button({
  href,
  children,
  className = "",
  target,
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`px-6 py-2 md:px-8 md:py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`px-6 py-2 md:px-8 md:py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
