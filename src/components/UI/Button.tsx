import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const variants: Record<string, string> = {
  primary: "bg-accent text-bg hover:bg-white",
  secondary: "border border-border text-text hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-text",
};

const Button = ({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon,
}: Props) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium tracking-wide duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
};

export default Button;
