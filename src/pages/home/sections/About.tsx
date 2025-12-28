import TitleSection from "../components/TitleSection";
import HomeSection from "./HomeSection";

const About = () => {
  return (
    <HomeSection>
      <TitleSection title="About me" />
      <div className="flex gap-20">
        <div className="flex flex-col gap-6">
          <p>
            I am a Full-Stack Web Developer who transforms creative ideas into
            complete applications. I design the Front-End with intuitive and
            responsive user interfaces, integrate the Back-End through services
            such as databases and APIs, and deploy applications in robust and
            secure environments so they can be accessed at scale.
          </p>
          <p>
            In my academic life, I am a third-year Computer Engineering student
            at the Central American University “José Simeón Cañas” (UCA) in El
            Salvador. I am training across multiple areas of software
            development, consistently supporting my peers and contributing to
            new projects focused on delivering efficient solutions.
          </p>
        </div>
        <img
          className="max-w-80 aspect-square object-cover rounded-xl"
          src="aboutme.jpg"
          alt="About me"
        />
      </div>
    </HomeSection>
  );
};

export default About;
