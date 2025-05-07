import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 px-6 text-center text-white">
      <motion.h2
        className="text-4xl font-[Great Vibes] text-pink-400 mb-4 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Story
      </motion.h2>

      <motion.div
        className="flex justify-center mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <span className="text-3xl animate-pulse">🫰</span>
      </motion.div>

      <motion.p
       className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.5, duration: 1 }}
     >
       Suraj and Rutuja met in November 2024 and have been inseparable ever since. 
       Their journey has been filled with love and unforgettable memories.
       <br />
       Join us as we celebrate their New  story. 🐱
     </motion.p>
     

      <motion.div
        className="bg-white bg-opacity-10 rounded-3xl shadow-2xl max-w-xl mx-auto mt-10 p-6 backdrop-blur-md border border-pink-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h3 className="text-3xl font-[Great Vibes] text-pink-300 glow">Suraj & Rutuja</h3>
        <p className="mt-2 text-pink-100 italic">Together forever, hand in hand.</p>
      </motion.div>
    </section>
  );
}
