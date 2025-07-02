import { useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [progress] = useState(50); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Site en cours de construction</h1>
      <h3 className="text-4xl font-bold mb-4">On y travaille ! 🚀</h3>
      <p className="text-lg mb-6">Suivez les avancées de Crafting Tech</p>
      
      <div className="w-full max-w-md bg-gray-700 rounded-full h-6 overflow-hidden mb-4">
        <motion.div 
          className="bg-blue-500 h-full" 
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <p className="text-sm">Progression : {progress}%</p>
    </div>
  );
}
