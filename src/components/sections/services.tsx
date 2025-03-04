import { motion } from "framer-motion";

export default function ServicesSection(props: {id:string}) {
  const {id} = props;
  return (
    <>
      <section id={id} className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Mes Services</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          <ServiceCard title="Développement sur mesure" description="Création d’applications web et mobiles adaptées à vos besoins." />
          <ServiceCard title="Optimisation et refonte" description="Amélioration de vos logiciels existants pour plus d'efficacité." />
          <ServiceCard title="Conseil et accompagnement" description="Aide à la conception et à la mise en place de solutions technologiques performantes." />
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, description }:{
    title: string;
    description: string;}) {
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