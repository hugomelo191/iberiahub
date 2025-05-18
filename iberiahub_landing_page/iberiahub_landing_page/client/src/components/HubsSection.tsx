import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const games = [
  {
    name: "CS2",
    color: "text-[#FF2D55]",
    image: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
    description: "Seremos o elo de ligação entre equipas e jogadores, o centro de notícias ibérico, a casa dos casters e streamers, com resultados ao vivo de todas as equipas."
  },
  {
    name: "VALORANT",
    color: "text-[#FFCC00]",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
    description: "Em desenvolvimento para lançamento futuro. Mais informações serão disponibilizadas após o lançamento do hub de CS2."
  },
  {
    name: "LOL",
    color: "text-[#FF2D55]",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
    description: "Em planeamento para expansão futura. Acompanhe nossas redes sociais para atualizações sobre o cronograma de lançamento."
  }
];

export default function HubsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hubs" ref={sectionRef} className="py-24 bg-[#0D0D0D] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-rajdhani font-bold text-4xl md:text-5xl mb-6"
            variants={itemVariants}
          >
            <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">NOSSOS </span>
            <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">HUBS</span>
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-80"
            variants={itemVariants}
          >
            Como empresa-mãe, a IberiaHub vai lançar em breve o hub de CS2, e gradualmente expandir para outras modalidades, dando visibilidade e estrutura profissional à cena ibérica.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {games.map((game, index) => (
            <motion.div 
              key={game.name}
              className="bg-[#2D2D2D] rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 group"
              variants={itemVariants}
              custom={index}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image}
                  alt={`${game.name} Competition`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
                <div className={`absolute bottom-4 left-4 font-rajdhani font-bold text-2xl ${game.color} [text-shadow:_0_0_10px_currentColor]`}>
                  {game.name}
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-6">
                  {game.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-70">
                    {game.name === "CS2" ? "Lançamento em breve" : "Lançamento futuro"}
                  </span>
                  <a href="#" className="text-[#FFCC00] hover:[text-shadow:_0_0_10px_#FFCC00] transition-all duration-300 font-rajdhani font-semibold">
                    Saber mais →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
