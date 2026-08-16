import Container from "./Container";

type Props = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  id?: string;
};

const Section = ({ children, className = "", narrow = false, id }: Props) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
};

export default Section;
