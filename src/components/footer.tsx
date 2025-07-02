import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} CraftingTech. Tous droits réservés.
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/brendan-gouin-a354028b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/brendanPro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
} 