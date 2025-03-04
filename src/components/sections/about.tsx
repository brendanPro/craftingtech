import { motion } from "framer-motion";

export default function AboutSection(props: {id:string, index: number}) {
  const {id, index} = props;
  return (
    <>
      <motion.section
        key={id}
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="min-h-(--section-height) flex flex-col p-10 justify-center text-center"
      >
      {/* <section id={id} className="py-20 px-6 text-center max-w-4xl mx-auto"> */}
      <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
        <p className="mt-4 text-gray-300">
          Je suis <span className="text-blue-400 font-semibold">Brendan GOUIN</span>, ingénieur passionné par
          l'artisanat du logiciel. De la conception à la mise en production,
          j'accompagne mes clients à chaque étape du développement.
        </p>
      </motion.section>

    </>
  );
}