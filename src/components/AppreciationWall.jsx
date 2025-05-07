import { motion } from "framer-motion";

const appreciations = [
  {
    name: "Sister",
    message: "Thank you for your thoughtful gift! Your love means the world to us. 🫰",
    image: "/images/image3.png",
  },
  {
    name: "Brother Balaji",
    message: "Your gift is truly appreciated! Thank you  so much. 🌸",
    image: "/images/image11.png",
  },
  {
    name: "Brother",
    message: "Thank you for the amazing gift! We are so grateful for your love and support. 🫰",
    image: "/images/image2.png",
  },
];

export default function AppreciationWall() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-5xl font-[Dancing Script] text-center text-pink-400 mb-10 drop-shadow-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Appreciation 
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {appreciations.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur-md border border-pink-300 rounded-2xl shadow-2xl p-3 text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-[Playfair Display] text-pink-300">
              {item.name}
            </h3>
            <p className="italic text-gray-300 mt-2 text-lg md:text-xl">
              {item.message}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
