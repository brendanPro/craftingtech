import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function OnePager() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-center space-x-6 py-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all ${activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-20">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="min-h-screen flex items-center justify-center p-10 text-center"
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-blue-600">{section.label}</h2>
              <p className="text-gray-600 mt-4">Content for {section.label} section.</p>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
