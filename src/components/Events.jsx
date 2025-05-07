import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl font-[Great Vibes] text-pink-100 text-center mb-8 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💐 Wedding Events
      </motion.h2>

      <motion.ul
        className="max-w-xl mx-auto space-y-4 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Sakharpuda:</strong> <span className="text-gray-300">May 16, 2025</span><span className="text-gray-400 grid md:gap-1">09:00 AM</span>
        </li>
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Haldi:</strong> <span className="text-gray-300">May 16, 2025</span><span className="text-gray-400 grid md:gap-1">10:00 AM</span>
        </li>
        <li className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-pink-100 shadow-md">
          <strong className="text-pink-300">Wedding:</strong> <span className="text-gray-300">May 16, 2025</span><span className="text-gray-400 grid md:gap-1">12:31 PM</span>
        </li>
      </motion.ul>
    </section>
  );
}
