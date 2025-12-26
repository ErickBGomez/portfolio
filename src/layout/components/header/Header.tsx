import { FileText } from "lucide-react";
import LinkButton from "../../../common/components/button/LinkButton";
import NavElement from "./NavElement";

const navElements = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="w-full bg-black-100">
      <div className="flex items-center justify-between gap-10 max-w-250 mx-auto pl-2 pr-8">
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
