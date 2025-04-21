import { motion } from "framer-motion";
import profile from '../../assets/profile.jpg';

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
        className="min-h-(--section-height) flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6"
      >
      <div className="w-full md:w-2/6 flex justify-center">
        <img
          src={profile} // Replace with your image path
          alt="Brendan Gouin"
          className="w-32 h-32 md:w-60 md:h-60 rounded-full object-cover "
        />
      </div>
      <div className="text-center md:text-left max-w-3xl">
        <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
        <p className="mt-4 text-gray-300">
          Je suis <span className="text-blue-400 font-semibold">Brendan GOUIN</span>, ingénieur passionné par
          l'artisanat du logiciel. De la conception à la mise en production,
          j'accompagne mes clients à chaque étape du développement.
          Mon expertise couvre l’ensemble du processus, du backend au frontend en passant par le mobile et les opérations.
          J’ai travaillé avec des entreprises de toutes tailles, mais j’ai une préférence pour l’univers des startups, où l’impact est immédiat et mesurable.
        </p>
      </div>
      </motion.section>

    </>
  );
}