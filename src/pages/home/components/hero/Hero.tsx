import { ArrowDown } from "lucide-react";
import Button from "../../../../common/components/button/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-10">
      <div className="flex flex-col items-center font-display">
        <span className="text-[22px]">Hello there! I'm</span>
        <h1>Erick B. Gómez</h1>
        <span className="text-[22px]">Full-Stack Web Developer</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien.
      </p>
      <Button label="Explore" icon={<ArrowDown />} />
    </section>
  );
};

export default Hero;
