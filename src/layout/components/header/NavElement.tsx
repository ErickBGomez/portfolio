import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

type HeaderItemProps = {
  label: string;
  href: string;
};

const NavElement = ({ label, href }: HeaderItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            className="absolute translate-1/2 w-2 h-2 bg-primary rotate-45 rounded-[1.5px]"
            initial={{ x: 0 }}
            animate={{ x: -20 }}
            exit={{ x: 0 }}
          />
        )}
      </AnimatePresence>
      <Link
        to={href}
        className="font-display hover:text-primary transition-colors duration-300"
      >
        {label}
      </Link>
    </div>
  );
};

export default NavElement;
