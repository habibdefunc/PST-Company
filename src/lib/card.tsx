interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
