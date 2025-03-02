import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const sections = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "Qui suis-je ?" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Expériences" },
    { id: "contact", label: "Contact" },
  ];
function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <nav className="flex justify-center space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`px-4 py-2 font-semibold ${
                activeSection === section.id ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>
    </>

  )
}

export default Header