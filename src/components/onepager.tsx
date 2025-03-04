import { motion } from "framer-motion";
import Header from "./header";
import Home from "./sections/home";
import About from "./sections/about";
import Services from "./sections/services";
import Experience from "./sections/experience";
import Contact from "./sections/contact";

const sections = [
  { id: "home", label: "Home", component: <Home id="home"/> },
  { id: "about", label: "About", component: <About id="about" /> },
  { id: "services", label: "Services", component: <Services id="services" /> },
  { id: "experience", label: "Experience", component: <Experience id="experience" /> },
  { id: "contact", label: "Contact", component: <Contact id="contact" /> },
];


export default function OnePager() {


  return (
    <div className="font-sans">
      {/* Header Navigation */}
      <Header sections={sections}/>

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
            {section.component}
            {/* <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-blue-600">{section.label}</h2>
              <p className="text-gray-600 mt-4">Content for {section.label} section.</p>
            </div> */}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
