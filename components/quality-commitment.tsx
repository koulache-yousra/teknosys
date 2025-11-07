"use client"

import { Lightbulb, GraduationCap, Handshake, ShieldCheck, Star } from "lucide-react"

export default function QualityCommitment() {
  const commitments = [
    {
      title: "Innovation Permanente",
      description:
        "Veille technologique constante et adoption rapide des nouvelles solutions pour offrir des services à la pointe de l'innovation.",
      icon: Lightbulb,
    },
    {
      title: "Expertise Reconnue",
      description:
        "Nos techniciens suivent des formations régulières et maintiennent leurs certifications pour garantir un service de qualité optimale.",
      icon: GraduationCap,
    },
    {
      title: "Partenariats Durables",
      description:
        "Relations privilégiées avec les leaders technologiques pour bénéficier des meilleures conditions et du support technique avancé.",
      icon: Handshake,
    },
    {
      title: "Sécurité & Fiabilité",
      description:
        "Déploiement de solutions éprouvées avec des garanties constructeur et un support technique réactif 24h/7j.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="qualite" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-accent/15 to-accent/5 backdrop-blur-2xl border border-accent/30 rounded-3xl p-12 md:p-16 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notre Engagement Qualité</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commitments.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex gap-4 p-6 glassmorphism backdrop-blur-xl border border-accent/20 rounded-xl hover:border-accent/50 transition-all animate-in fade-in slide-in-from-bottom-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
