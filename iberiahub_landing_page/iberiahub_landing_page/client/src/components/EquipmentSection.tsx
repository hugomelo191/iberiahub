import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export default function EquipmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const equipmentFeatures = [
    "Computadores de alta performance com GPUs topo de gama",
    "Monitores profissionais com taxas de atualização competitivas",
    "Periféricos profissionais e configurações personalizadas",
    "Redes de alta velocidade e baixa latência"
  ];
  
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
    <section ref={sectionRef} className="py-24 bg-[#151515] relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <motion.h2 
                className="font-rajdhani font-bold text-3xl md:text-4xl mb-6"
                variants={itemVariants}
              >
                <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">TECNOLOGIA </span>
                <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">DE PONTA</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Fornecemos aos nossos jogadores o melhor equipamento possível para treinamento e competições, garantindo que nada limite o seu potencial.
              </motion.p>
              
              <motion.ul className="space-y-4 mb-8" variants={containerVariants}>
                {equipmentFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <CheckCircle className="text-[#FFCC00] mr-3 h-5 w-5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={itemVariants}>
                <a 
                  href="#" 
                  className="inline-block bg-[#0D0D0D] text-[#FFCC00] border border-[#FFCC00] font-rajdhani font-semibold px-6 py-3 rounded-lg hover:bg-[#FFCC00] hover:text-[#0D0D0D] transition-all duration-300"
                >
                  CONHECER NOSSAS INSTALAÇÕES
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                alt="Gaming Equipment" 
                className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                alt="Gaming Setup" 
                className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
