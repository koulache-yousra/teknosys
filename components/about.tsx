"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img src="/about/A-team.svg" alt="Équipe Teknosys" className="rounded-2xl w-full h-auto shadow-2xl" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Votre solution tout-en-un pour des <span className="text-accent">infrastructures IT</span> sécurisées,
                agiles et performantes
              </h2>
              <p className="text-xl font-semibold text-foreground/80">A Propos de nous</p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              Bienvenue chez <span className="font-semibold text-foreground">Teknosys Group</span>, votre partenaire de
              confiance en intégration IT en Afrique du Nord. Nous vous accompagnons dans la mise en place de solutions
              de pointe en Cybersécurité, Cloud, Réseaux et Communications Unifiées, pour un environnement technologique
              plus sûr, plus agile et plus performant.
            </p>

            <Link
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-400 to-rose-400 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/40 flex items-center gap-2 text-base"
            >
              Lire plus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
