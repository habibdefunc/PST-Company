interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold mb-10 ${className}`}>
      {children}
    </h2>
  );
}
