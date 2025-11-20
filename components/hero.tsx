"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split('');

  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 100,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 md:pt-28 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(115deg, rgba(5,10,30,0.92), rgba(7,34,82,0.65)), url('/background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="space-y-6 w-full max-w-5xl">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black leading-[1.1] tracking-tighter text-white drop-shadow-2xl animate-fade-in">
  Teknosys
  <br />
  <span className="text-[#00B5FF]">Group</span>
</h1>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow animate-slide-up">
                Protéger. <span className="text-[#00B5FF]">Connecter.</span> Transformer.
              </p>
              
              {/* Texte centré avec animation améliorée */}
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative inline-block w-full max-w-4xl">
                 <motion.div
                className="relative w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative inline-block w-full max-w-4xl">
                  <p className="text-2xl md:text-3xl font-light text-white/85 leading-relaxed drop-shadow">
                    <TypewriterText 
                      text="Votre partenaire IT pour un environnement plus sécurisé, " 
                      delay={0.5}
                    />
                  </p>
                  <p className="text-2xl md:text-3xl font-light text-white/85 leading-relaxed drop-shadow">
                    <TypewriterText 
                      text=" plus agile et plus performant" 
                      delay={0.5}
                    />
                  </p>
                </div>
              </motion.div>
                  
                  {/* Effet de lueur */}
                  <motion.div 
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 
                              rounded-2xl blur-xl opacity-70 -mx-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

     


    </section>
  )
}