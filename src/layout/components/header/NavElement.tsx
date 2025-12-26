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
    <Link
      to={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-6 py-6 font-display hover:text-primary transition-colors duration-300"
    >
      <div className="relative">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-[40%] left-0"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -20, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
            >
              <div className="w-1.5 h-1.5 bg-primary rotate-45 rounded-[1.5px]" />
            </motion.div>
          )}
          {isHovered && (
            <motion.div
              className="absolute top-[40%] right-0"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
            >
              <div className="w-1.5 h-1.5 bg-primary rotate-45 rounded-[1.5px]" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavElement;
