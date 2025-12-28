import { type ReactNode } from "react";

type HomeSectionProps = {
  children: ReactNode;
};

const HomeSection = ({ children }: HomeSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-250 w-full mx-auto">{children}</div>
    </section>
  );
};

export default HomeSection;
