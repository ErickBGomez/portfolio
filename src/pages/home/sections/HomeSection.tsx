import { type ReactNode } from "react";

type HomeSectionProps = {
  children: ReactNode;
};

const HomeSection = ({ children }: HomeSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </section>
  );
};

export default HomeSection;
