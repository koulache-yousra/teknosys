"use client"

import { FileText, CheckCircle, TrendingUp } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Teknosys Services & Integration",
    highlights: [
      "Déploiement d'infrastructures IT",
      "Solutions réseau, Wi-Fi, switching, câblage",
      "Intégration cloud, data center, VoIP",
      "Vidéosurveillance, contrôle d'accès",
    ],
    featured: true,
  },
  {
    icon: CheckCircle,
    title: "Teknosys Distribution",
    highlights: [
      "Fourniture d'équipements IT",
      "Sécurité et vidéosurveillance",
      "Stock local ou livraison rapide",
      "Partenaires: Hikvision, Fortinet, Dahua, Aruba, Zoom...",
    ],
  },
  {
    icon: TrendingUp,
    title: "Teknosys Consultancy",
    highlights: [
      "Audit IT & cybersécurité",
      "Accompagnement à la transformation digitale",
      "Stratégie cloud & architecture Zero Trust",
      "Solutions SAP, Mobile Payment, conformité technique",
    ],
  },
]

export default function Expertise() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
            Nos pôles <span className="text-accent">d'expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group rounded-2xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(217,70,239,0.25)] ${
                  service.featured
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black border-accent/50 shadow-2xl"
                    : "bg-white/5 border-white/10 hover:border-accent/50"
                }`}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      service.featured ? "bg-accent/20" : "bg-accent/10"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${service.featured ? "text-white" : "text-accent"}`} />
                  </div>

                  <h3 className={`text-2xl font-bold transition-colors ${service.featured ? "text-white" : "text-foreground"}`}>
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className={`text-sm leading-relaxed ${
                          service.featured ? "text-gray-200" : "text-foreground/70"
                        }`}
                      >
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
