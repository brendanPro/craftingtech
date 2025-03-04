// import { motion } from "framer-motion";
import Header from "./header";
import Home from "./sections/home";
import About from "./sections/about";
import Services from "./sections/services";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Footer from "./footer";

const sections = [
  { id: "home", label: "Home", component: <Home id="home" index={0}/> },
  { id: "about", label: "About", component: <About id="about" index={1} /> },
  { id: "services", label: "Services", component: <Services id="services" index={2} /> },
  { id: "experience", label: "Experience", component: <Experience id="experience" index={3}/> },
  { id: "contact", label: "Contact", component: <Contact id="contact" index={4} /> },
];


export default function OnePager() {


  return (
    <div className="font-sans">
      {/* Header Navigation */}
      <Header sections={sections}/>

      {/* Sections */}
      <div className="pt-12 min-h-screen">
        {sections.map((section) => (
            section.component
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
