"use client"

import { partners } from "@/data/partners"
import { useEffect, useRef } from "react"

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Dupliquer les partenaires pour une animation fluide
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section id="partners" className="py-16 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos <span className="text-[#00B5FF]">Partenaires</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Teknosys s'appuie sur un réseau de partenaires technologiques de premier
             plan pour offrir les solutions les plus performantes du marché.
             <br />
              Notre statut de partenaire officiel nous permet d'accéder aux dernières
               innovations et de bénéficier d'un support technique privilégié.

          </p>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex items-center py-8 animate-scroll"
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-32 h-32 rounded-full bg-white dark:bg-slate-800 shadow-lg p-4 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-accent/50">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-center text-foreground/80">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          <style jsx global>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% / 2)); }
            }
            .animate-scroll {
              display: flex;
              width: calc(200%);
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            @media (max-width: 768px) {
              .animate-scroll {
                animation-duration: 30s;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}