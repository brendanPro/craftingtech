import { JSX } from "react";
import { FaCalendarAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection(props: {id:string}) {
  const {id} = props;
  return (
    <>
      <section id={id} className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Contactez-moi</h2>
        <p className="mt-4 text-gray-300">Prêt à donner vie à votre projet ?</p>
        <div className="mt-6 flex justify-center gap-6">
          <ContactButton icon={<FaEnvelope />} text="Email" link="mailto:contact@craftingtech.com" />
          <ContactButton icon={<FaCalendarAlt />} text="Calendly" link="#" />
        </div>
      </section>
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