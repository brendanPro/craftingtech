import { motion } from "framer-motion";

export default function HomeSection(props: {id:string, index: number}) {
  const {id, index} = props;
  return (
    <>
      <motion.section
        key={id}
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="min-h-(--section-height) flex flex-col p-10 justify-around"
      >
        <h1 className="text-5xl font-bold"> Crafting Tech </h1>
        <p className="text-lg mt-4">The Art of Software Craftsmanship</p>
        <p className="max-w-lg text-justify">
        Je conçois des applications performantes et évolutives avec une approche <span className="text-blue-400 font-semibold">product-oriented</span>. 
        Mon objectif : aligner la technique avec votre vision produit pour maximiser la valeur ajoutée.
        Pas de superflu, juste des solutions robustes et efficaces. 
        <br /><span className="text-blue-400 font-semibold"> Discutons de votre projet !</span>
        </p>
      </motion.section>
    </>
  );
}
{/* <span className="text-blue-400 font-semibold"> product-oriented</span>. */}