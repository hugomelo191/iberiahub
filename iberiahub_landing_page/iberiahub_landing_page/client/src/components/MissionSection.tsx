import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MissionSection() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-[#151515] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2 relative rounded-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2D55]/20 to-[#FFCC00]/20 z-10 mix-blend-overlay"></div>
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                  alt="Portugal Flag" 
                  className="w-full h-40 md:h-52 object-cover rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                  alt="Spain Flag" 
                  className="w-full h-40 md:h-52 object-cover rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1511882150382-421056c89033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                  alt="Gaming Competition" 
                  className="w-full h-40 md:h-52 object-cover rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                  alt="Esports Team" 
                  className="w-full h-40 md:h-52 object-cover rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <motion.h2 
                className="font-rajdhani font-bold text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00] text-3xl md:text-4xl mb-6"
                variants={itemVariants}
              >
                NOSSA MISSÃO
              </motion.h2>
              
              <motion.div
                className="flex flex-col gap-4 mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-[#FF2D55] font-bold">💡</div>
                  <p className="text-lg leading-relaxed">Ligar comunidades que compartilham a mesma paixão além das fronteiras.</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-[#FF2D55] font-bold">💡</div>
                  <p className="text-lg leading-relaxed">Criar oportunidades reais para jogadores, equipas, streamers e casters.</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-[#FF2D55] font-bold">💡</div>
                  <p className="text-lg leading-relaxed">Levar os esports ibéricos a outro nível como empresa-mãe de hubs dedicados.</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-lg mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Mais do que uma plataforma, o IberiaHub é um movimento para quebrar barreiras e mostrar que o esports une povos.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
              >
                <div className="w-1/2 h-1 bg-[#FF2D55] rounded-full"></div>
                <div className="w-1/2 h-1 bg-[#FFCC00] rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
