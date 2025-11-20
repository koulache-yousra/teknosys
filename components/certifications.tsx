"use client"

import { Award, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = ["Expert Certifié", "Intégration", "Maintenance", "Formation Continue"]
  const expertise = [
    {
      title: "Expertise Technique Avancée",
      description: "Maîtrise complète des solutions de cybersécurité, vidéosurveillance et collaboration",
    },
    {
      title: "Support Technique Privilégié",
      description: "Accès direct aux équipes techniques des constructeurs partenaires",
    },
  ]

  return (
    <section id="certifications" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5 dark:from-background dark:to-accent/3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
          Nos Certifications & Qualité
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          L'excellence technologique au service de nos clients
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Professional Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </span>
              Certifications Professionnelles
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Nos équipes maintiennent un niveau d'expertise élevé grâce à des certifications régulièrement mises à jour.
              <br />
               Cette démarche garantit la qualité de nos prestations et notre capacité à intégrer les technologies 
               les plus exigeantes.

            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {cert}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 glassmorphism backdrop-blur-xl border border-accent/30 rounded-lg space-y-2 animate-in fade-in slide-in-from-bottom-2"
                >
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-foreground/70">Certifications Actives</p>
          </div>
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-foreground/70">Équipes Certifiées</p>
          </div>
          <div className="glassmorphism backdrop-blur-xl border border-accent/20 p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <p className="text-foreground/70">Années d'Expérience</p>
          </div>
        </div>
      </div>
    </section>
  )
}