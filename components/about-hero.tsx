"use client"

import { motion } from 'framer-motion';

const textContainer = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: -30 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

export default function AboutHero() {
  return (
    <section id="intro" className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="space-y-8 max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textContainer}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl font-black leading-[1.1] tracking-tighter text-foreground"
              variants={textItem}
            >
              Qui sommes-nous ?
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light"
              variants={textItem}
            >
              TeknosysGroup est une entreprise algérienne spécialisée dans les technologies de l'information.
            </motion.p>

            <motion.div 
              className="space-y-4 text-foreground/80"
              variants={textItem}
            >
              <p className="text-base md:text-lg leading-relaxed">
                Depuis plus d'une décennie nous aidons les entreprises à{" "}
                <span className="font-semibold text-accent">
                  protéger, moderniser et optimiser leur infrastructure IT
                </span>
                , tout en améliorant leur communication interne et externe.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Notre expertise couvre{" "}
                <span className="font-semibold text-accent">
                  l'intégration de solutions, la distribution de matériel, le conseil et les services IT managés
                </span>
                , avec des partenaires technologiques de premier plan.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            <img 
              src="/about/about.jpg" 
              alt="Teknosys Group - Distribution et intégration réseaux et télécommunications"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
