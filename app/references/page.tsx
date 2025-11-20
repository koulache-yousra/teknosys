"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Landmark, Building2, Factory, RadioTower, MapPin } from "lucide-react"

export default function ReferencesPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Hero */}
      <section id="hero" className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black">Références & Partenaires</h1>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Chez Teknosys Group, nous accordons une importance particulière à la confiance de nos clients et à la
            solidité de notre écosystème de partenaires technologiques.
          </p>
        </div>
      </section>

      {/* Nos Références */}
      <section id="references" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/40 dark:bg-secondary/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Nos Références</h2>
            <p className="text-foreground/70">Des secteurs variés, un niveau d'exigence constant.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ministères & Institutions",
                description:
                  "Solutions de sécurité et d'infrastructure critiques pour ministères, ambassades et institutions gouvernementales.",
                icon: Landmark,
              },
              {
                title: "Banques & Finance",
                description:
                  "Cybersécurité avancée, conformité réglementaire et modernisation des infrastructures financières.",
                icon: Building2,
              },
              {
                title: "Industrie",
                description:
                  "Transformation digitale des sites industriels et multinationales avec supervision réseau centralisée.",
                icon: Factory,
              },
              {
                title: "Télécommunications",
                description:
                  "Connectivité avancée et solutions opérateur pour groupes télécom et fournisseurs de services.",
                icon: RadioTower,
              },
            ].map((segment) => {
              const Icon = segment.icon
              return (
                <div
                  key={segment.title}
                  className="group rounded-3xl border border-white/10 dark:border-white/8 bg-background p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{segment.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{segment.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Présence internationale */}
      <section id="presence" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-12 md:p-16 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Présence Internationale</h2>
            <p className="text-white/75">Projets réalisés avec succès dans 6 pays</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Algérie", "EAU", "Arabie Saoudite", "Qatar", "Égypte", "Turquie"].map((country) => (
              <span key={country} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <MapPin className="w-4 h-4" /> {country}
              </span>
            ))}
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-white/20">
            <img src="/references/presence.jpg" alt="Carte de présence internationale" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 dark:bg-secondary/10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Exemples de Projets</h2>
            <p className="text-foreground/70">Quelques réalisations marquantes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Microsegmentation Bancaire",
                description:
                  "Solution avancée pour une banque publique en Afrique du Nord, posture de sécurité renforcée.",
                tags: ["Sécurité renforcée", "Conformité réglementaire"],
              },
              {
                title: "Infrastructure Zoom Complète",
                description:
                  "Visioconférence déployée pour un groupe gouvernemental au Moyen-Orient avec formation des équipes.",
                tags: ["Collaboration moderne", "Formation incluse"],
              },
              {
                title: "CCTV Intelligent – Dubaï",
                description:
                  "Vidéosurveillance avec analyse comportementale pour un consulat général, couverture multi-sites.",
                tags: ["IA intégrée", "Sécurité diplomatique"],
              },
              {
                title: "Infrastructure Opérateur",
                description: "Matériel réseau & cybersécurité pour un opérateur national avec support 24/7.",
                tags: ["Support 24/7", "Infrastructure critique"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl border border-white/10 dark:border-white/8 bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)]"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent/10 text-xs font-semibold text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}


