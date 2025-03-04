import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import logo from '../assets/logo.png';

  // Todo : type the sections
function Header(props:{ sections: { id: string; label: string }[]}) {
  const { sections } = props;
  const [activeSection, setActiveSection] = useState(sections[0].id);

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
    <>
    <nav className="fixed justify-center top-0 left-0 w-full bg-white shadow-md z-50  flex">
        <Link
          style={{ position: 'absolute', top: 0, left: 0}}
          key="home"
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 h-full"
        >
          <img src={logo} alt="Logo" className="h-full" />
        </Link>
        <div className="flex justify-center justify-items-stretch space-x-6">
          {sections.filter(section => section.id !== "home").map((section) => (
            <Link
              key={section.id}
              to={section.id}
              href={section.id}
              smooth={true}
              duration={500}
              className={`cursor-pointer px-10 py-4 transition-all ${activeSection === section.id ? "bg-main-blue text-white" : "text-gray-700 hover:bg-gray-200"}`}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </nav>
    </>

  )
}

export default Header