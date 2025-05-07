import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-center p-6 bg-gradient-to-r from-black via-gray-900 to-black text-pink-200 border-t border-pink-700 shadow-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-xl md:text-2xl font-[Dancing Script] tracking-wide italic drop-shadow-md">
        With love and gratitude, we thank you for blessing our journey 💐
      </p>
    </motion.footer>
  );
}
