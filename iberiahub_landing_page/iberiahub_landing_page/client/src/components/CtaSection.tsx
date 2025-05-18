import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#0D0D0D] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-rajdhani font-bold text-4xl md:text-5xl mb-8"
            variants={itemVariants}
          >
            <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">JUNTE-SE </span>
            <span className="text-white">AO </span>
            <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">MOVIMENTO</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Mais que uma plataforma, somos um movimento para quebrar barreiras e unir povos através dos esports. Seja jogador, equipa, streamer ou caster, há um lugar para ti no futuro dos esports ibéricos.
          </motion.p>
          
          <motion.div 
            className="mb-10"
            variants={itemVariants}
          >
            <a 
              href="#" 
              className="inline-block bg-gradient-to-r from-[#FF2D55] to-[#FFCC00] text-white font-rajdhani font-bold text-xl px-10 py-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[0_0_15px_#FF2D55]"
            >
              LIGA-TE AO FUTURO DOS ESPORTS
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-8 mb-12"
            variants={itemVariants}
          >
            <a href="#" className="text-white hover:text-[#FF2D55] transition-colors duration-300">
              <FaTwitter className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
            </a>
            <a href="#" className="text-white hover:text-[#FFCC00] transition-colors duration-300">
              <FaInstagram className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
            </a>
            <a href="#" className="text-white hover:text-[#FF2D55] transition-colors duration-300">
              <FaTiktok className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3"
            variants={itemVariants}
          >
            <span className="font-rajdhani text-lg opacity-70">ou contacte-nos em:</span>
            <a href="mailto:info@esportsibericos.com" className="font-rajdhani text-lg text-[#FFCC00] hover:[text-shadow:_0_0_10px_#FFCC00]">
              info@esportsibericos.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
