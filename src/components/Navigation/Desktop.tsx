import LinkWrapper from "./LinkWrapper";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Desktop = () => {
  return (
    <nav className="flex items-center space-x-8" aria-label="Primary">
      {navLinks.map((item) => (
        <LinkWrapper key={item.href} name={item.name} href={item.href} />
      ))}
    </nav>
  );
};

export default Desktop;
