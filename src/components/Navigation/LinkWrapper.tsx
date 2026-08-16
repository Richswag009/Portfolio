import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  name: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const LinkWrapper = ({ name, href, onClick, className = "" }: Props) => {
  const router = useRouter();
  const isActive = href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium tracking-wide duration-200 ${
        isActive ? "text-accent" : "text-muted hover:text-text"
      } ${className}`}
    >
      {name}
    </Link>
  );
};

export default LinkWrapper;
