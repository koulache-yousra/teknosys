"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const itemRight = {
    hidden: { opacity: 0, x: 50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div 
            className="relative"
            variants={itemLeft}
          >
            <img 
              src="/about/hero.jpg" 
              alt="Équipe Teknosys" 
              className="rounded-2xl w-full h-auto shadow-2xl" 
            />
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={container}
          >
            <motion.div 
              className="space-y-4"
              variants={itemRight}
            >
              <p className="text-4xl font-semibold text-foreground/80">A Propos de nous</p>
            </motion.div>

            <motion.p 
              className="text-lg text-foreground/70 leading-relaxed font-light"
              variants={itemRight}
            >
              Bienvenue chez <span className="font-semibold text-foreground">Teknosys Group</span>, votre partenaire de
              confiance en intégration IT en Afrique du Nord.
              <br />
              Nous accompagnons les organisations dans la mise en place de solutions de pointe en Cybersécurité,
              Cloud, Réseaux et Communications Unifiées, afin de créer un environnement technologique plus sûr,
              plus agile et hautement performant.




            </motion.p>

            <motion.div variants={itemRight}>
              <Link
                href="/about"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/40 flex items-center gap-2 text-base"
              >
                Lire plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
