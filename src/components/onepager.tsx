import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function CraftingTech() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold">Crafting Tech</h1>
        <p className="text-lg mt-4">The Art of Software Craftsmanship</p>
        <p className="mt-6 text-gray-300 max-w-lg">
          Je conçois des applications performantes et évolutives avec une approche
          <span className="text-blue-400 font-semibold"> product-oriented</span>.
        </p>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
        <p className="mt-4 text-gray-300">
          Je suis <span className="text-blue-400 font-semibold">Brendan GOUIN</span>, ingénieur passionné par
          l'artisanat du logiciel. De la conception à la mise en production,
          j'accompagne mes clients à chaque étape du développement.
        </p>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Mes Services</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          <ServiceCard title="Développement sur mesure" description="Création d’applications web et mobiles adaptées à vos besoins." />
          <ServiceCard title="Optimisation et refonte" description="Amélioration de vos logiciels existants pour plus d'efficacité." />
          <ServiceCard title="Conseil et accompagnement" description="Aide à la conception et à la mise en place de solutions technologiques performantes." />
        </div>
      </section>
      
      {/* Expériences & Témoignages (Placeholder) */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Expériences & Témoignages</h2>
        <p className="mt-4 text-gray-300">(À compléter avec des retours clients et expériences clés)</p>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Contactez-moi</h2>
        <p className="mt-4 text-gray-300">Prêt à donner vie à votre projet ?</p>
        <div className="mt-6 flex justify-center gap-6">
          <ContactButton icon={<FaEnvelope />} text="Email" link="mailto:contact@craftingtech.com" />
          <ContactButton icon={<FaCalendarAlt />} text="Calendly" link="#" />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      className="bg-gray-700 p-6 rounded-lg shadow-lg w-80"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </motion.div>
  );
}

function ContactButton({ icon, text, link }) {
  return (
    <a href={link} className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
      {icon} <span>{text}</span>
    </a>
  );
}
