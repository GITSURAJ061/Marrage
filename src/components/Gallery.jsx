import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: '/images/sakharpuda.jpg', alt: 'Sakharpuda' },
    { src: '/images/haldi.jpg', alt: 'Haldi' },
    { src: '/images/marrage.jpg', alt: 'Wedding' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl font-[Great Vibes] text-center text-pink-400 mb-8 drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        ✨ Wedding Memories
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-3xl shadow-2xl mx-auto border-4 border-pink-900"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
