"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 max-w-4xl">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-foreground">
              Teknosys
              <br />
              <span className="text-accent">Group</span>
            </h1>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Protéger. <span className="text-accent">Connecter.</span> Transformer.
              </p>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl font-light">
                Des solutions IT intelligentes, sécurisées et évolutives au service de votre entreprise.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/#about"
              className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold transition-all duration-300 hover:border-accent hover:text-accent flex items-center justify-center gap-2 text-base"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
