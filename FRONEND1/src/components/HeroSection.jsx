import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero relative h-screen overflow-hidden">
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="/restaurant.jpg"
        alt="restaurant"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="item relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-down"
        >
          Dream Maker
        </motion.h3>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
            data-aos="fade-up"
          >
            Your Personal Dream Maker
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We believe that it is all about the BIG DREAMS and the small details!
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold text-lg transition-all hover:bg-opacity-90 hover:shadow-lg cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              BOOK NOW
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;