import { motion } from "framer-motion";
import { JSX } from "react";
import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection(props: {id:string, index: number}) {
  const {id, index} = props;
  return (
    <>
      <motion.section
        key={id}
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="min-h-(--section-height) flex flex-col p-10 justify-center text-center bg-gray-300"
      >
      {/* <section id={id} className="py-20 px-6 text-center"> */}
        <h2 className="text-3xl font-bold">Contactez-moi</h2>
        <p className="mt-4">Prêt à donner vie à votre projet ?</p>
        <div className="mt-6 flex justify-center gap-6">
          <ContactButton icon={<FaEnvelope />} text="Email" link="mailto:contact@craftingtech.com" />
          <ContactButton icon={<FaCalendarAlt />} text="Calendly" link="#" />
        </div>
      {/* </section> */}
      </motion.section>
    </>
  );
}

function ContactButton({ icon, text, link }:{
  icon: JSX.Element;
  text: string;
  link: string;}) {
  return (
    <a href={link} className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
      {icon} <span>{text}</span>
    </a>
  );
}