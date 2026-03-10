interface BadgeProps {
  text: string;
  variant?: "default" | "outline";
}

export default function Badge({ text, variant = "default" }: BadgeProps) {
  const styles =
    variant === "default"
      ? "bg-primary-50 text-primary-700 border border-primary-200"
      : "bg-white text-gray-700 border border-gray-200";

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${styles}`}
    >
      {text}
    </span>
  );
}
