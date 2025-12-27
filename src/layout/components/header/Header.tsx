import { FileText } from "lucide-react";
import LinkButton from "../../../common/components/button/LinkButton";
import NavElement from "./NavElement";
import { useEffect, useState } from "react";
import useScroll from "../../../common/hooks/useScroll";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const navElements = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [floatingMode, setFloatingMode] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setFloatingMode(scrollY > 1);
  }, [scrollY]);

  return (
    <header
      className={twMerge(
        "w-full absolute top-0 left-0",
        clsx(floatingMode && "fixed top-5")
      )}
    >
      <div
        className={twMerge(
          "flex items-center justify-between max-w-250 mx-auto pl-2 pr-8",
          clsx(
            floatingMode && "bg-black-100 border border-white-10 rounded-2xl"
          )
        )}
      >
        <nav className="flex items-center justify-between">
          {navElements.map((element, index) => (
            <NavElement key={index} label={element.label} href={element.href} />
          ))}
        </nav>
        <LinkButton href="/cv" label="Get CV" icon={<FileText />} />
      </div>
    </header>
  );
};

export default Header;
