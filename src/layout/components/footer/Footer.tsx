import Button from "../../../common/components/button/Button";
import {
  Github,
  Instagram,
  LinkedIn,
  X,
} from "../../../common/components/icons/Icons";

// Icon obtained from devicons: https://devicon.dev/
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-250 mx-auto flex flex-col items-center gap-4 py-25">
        <div className="flex flex-col items-center">
          <span>Designed and developed by</span>
          <span className="font-display text-body-display">Erick B. Gómez</span>
        </div>
        <Button label="Show credits and tools" variant="transparent" />
        <div className="flex items-center gap-3">
          <a href="https://github.com/ErickBGomez" target="_blank">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/ErickBGomez" target="_blank">
            <LinkedIn className="w-6.5 h-6.5" />
          </a>
          <a href="https://x.com/ErickBGomez" target="_blank">
            <X className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/ErickBGomez" target="_blank">
            <Instagram className="w-6.5 h-6.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
