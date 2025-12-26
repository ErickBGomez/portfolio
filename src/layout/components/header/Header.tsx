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
    <div className="w-full p-6">
      <div className="max-w-250 mx-auto">
        <div className="flex items-center justify-between">
          {navElements.map((element, index) => (
            <NavElement key={index} label={element.label} href={element.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
