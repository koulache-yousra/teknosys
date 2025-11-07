"use client"

import { Zap, Users, MapPin, Award } from "lucide-react"

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

export default function Strengths() {
  return (
    <section id="atouts" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
            Nos <span className="text-accent">atouts</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{strength.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">{strength.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
