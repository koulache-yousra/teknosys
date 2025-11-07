"use client"

import { Handshake, Award, Zap, Rocket } from "lucide-react"

export default function Values() {
  const values = [
    {
      title: "Nos valeurs",
      description: "Une relation transparente avec nos clients et partenaires.",
      icon: Handshake,
    },
    {
      title: "Excellence",
      description: "Des solutions fiables, livrées avec rigueur.",
      icon: Award,
    },
    {
      title: "Agilité",
      description: "Capacité à s'adapter aux besoins locaux et internationaux.",
      icon: Zap,
    },
    {
      title: "Innovation",
      description: "Anticiper les défis technologiques de demain.",
      icon: Rocket,
    },
  ]

  return (
    <section id="valeurs" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 to-background dark:from-accent/5 dark:to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Nos valeurs</h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Les principes fondamentaux qui guident nos actions
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 space-y-4 animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
