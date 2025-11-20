"use client"

import { Zap, Users, MapPin, Award } from "lucide-react"
import { motion } from 'framer-motion';

const strengths = [
  {
    icon: Zap,
    title: "Approche modulaire",
    description: "Des briques qui s'assemblent et évoluent selon vos priorités.",
  },
  {
    icon: Users,
    title: "Équipe certifiée & multiculturelle",
    description: "Compétences validées, diversité des profils, communication fluide.",
  },
  {
    icon: MapPin,
    title: "Présence locale & support rapide",
    description: "Disponibilité terrain et réponse prioritaire de nos équipes.",
  },
  {
    icon: Award,
    title: "Partenaires technologiques de référence",
    description: "Intégrations stables, sécurisées et pérennes avec des leaders.",
  },
]

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 25,
      mass: 0.5,
      delay: delay * 0.2,
      duration: 0.5,
    },
  },
});

export default function Strengths() {
  return (
    <section id="atouts" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
            Nos <span className="text-[#00B5FF]">Atouts</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <motion.div
                key={index}
                variants={item(index)}
                className="rounded-2xl p-8 border bg-white shadow-lg border-slate-200/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 dark:bg-white/5 dark:border-white/10"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{strength.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">{strength.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
