"use client"

import { partners } from "@/data/partners"

const stats = [
  { number: "+10", label: "ANS DE SERVICE" },
  { number: "+21", label: "PARTENAIRES TECHNOLOGIQUE" },
  { number: "+200", label: "CLIENTS SATISFAITS" },
  { number: "+500", label: "APPELS D'OFFRES" },
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8">
            Nos <span className="text-accent">Partenaires</span>
          </h2>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group glassmorphism rounded-2xl p-6 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-in fade-in zoom-in-50">
              <div className="text-5xl md:text-6xl font-black text-accent mb-4">{stat.number}</div>
              <div className="text-foreground/70 font-semibold text-sm tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
