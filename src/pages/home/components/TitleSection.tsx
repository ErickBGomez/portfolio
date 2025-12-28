import { twMerge } from "tailwind-merge";
import Heading from "../../../common/components/typography/Heading";

type TitleSectionProps = {
  title: string;
  className?: string;
};

const TitleSection = ({ title, className }: TitleSectionProps) => {
  return (
    <div className={twMerge("flex gap-8 items-stretch mb-10", className)}>
      <div className="w-3 bg-primary" />
      <Heading level={2} text={title} />
    </div>
  );
};

export default TitleSection;
