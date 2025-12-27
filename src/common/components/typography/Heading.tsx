type HeadingProps = {
  level: number;
  text: string;
};

const Heading = ({ level, text }: HeadingProps) => {
  return (
    <>
      {level === 1 && <h1 className="font-display text-heading-1">{text}</h1>}
      {level === 2 && <h2 className="font-display text-heading-2">{text}</h2>}
      {level >= 6 && <h6 className="font-display text-heading-6">{text}</h6>}
    </>
  );
};

export default Heading;
