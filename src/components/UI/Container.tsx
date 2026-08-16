type Props = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

const Container = ({ children, className = "", narrow = false }: Props) => {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-10 ${
        narrow ? "max-w-prose" : "max-w-content"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
