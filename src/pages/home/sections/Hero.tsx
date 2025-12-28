import { ArrowDown } from "lucide-react";
import Button from "../../../common/components/button/Button";
import Heading from "../../../common/components/typography/Heading";
import HomeSection from "./HomeSection";

const Hero = () => {
  return (
    <HomeSection>
      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <span className="font-display text-medium-body-display">
            Hello there! I'm
          </span>
          <Heading level={1} text="Erick B. Gómez" />
          <span className="font-display text-medium-body-display">
            Full-Stack Web Developer
          </span>
        </div>
        <p className="max-w-110 text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </p>
        <Button label="Explore" icon={<ArrowDown />} />
      </div>
    </HomeSection>
  );
};

export default Hero;
