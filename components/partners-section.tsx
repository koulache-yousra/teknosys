"use client"

import { Handshake } from "lucide-react"
import { partners as partnerData } from "@/data/partners-section"

export default function PartnersSection() {
  const partners = partnerData.slice(0, 12)

  return (
    <section id="partners" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos   <span className="text-[#00B5FF]">Partenaires Stratégiques</span> 
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Nous collaborons avec les leaders technologiques mondiaux pour vous apporter les solutions les plus innovantes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-xl p-6 flex items-center justify-center hover:border-accent/50 transition-all animate-in fade-in"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        




        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-foreground/70">Partenaires Technologiques</p>
          </div>
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-foreground/70">Solutions Intégrées</p>
          </div>
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-foreground/70">Satisfaction Client</p>
          </div>
        </div>
      </div>
    </section>
  )
}