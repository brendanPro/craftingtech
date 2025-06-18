import { motion } from "framer-motion";

export default function ServicesSection(props: {id:string, index: number}) {
  const {id, index} = props;
  return (
    <>
      <motion.section
        key={id}
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="min-h-(--section-height) flex flex-col p-10 justify-center text-center bg-gray-50"
      >
      {/* <section id={id} className="py-20 px-6 text-center"> */}
        <h2 className="text-3xl font-bold text-black">Mes Services</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
          <ServiceCard title="Développement sur mesure" description="Création d’applications web et mobiles adaptées à vos besoins." />
          <ServiceCard title="Optimisation et refonte" description="Amélioration de vos logiciels existants pour plus d'efficacité." />
          <ServiceCard title="Conseil et accompagnement" description="Aide à la conception et à la mise en place de solutions technologiques performantes." />
        </div>
      {/* </section> */}
      </motion.section>
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