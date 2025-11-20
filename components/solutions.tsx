"use client"

const solutions = [
  { title: "Infrastructure IT", description: "Solutions d'infrastructure sécurisées et performantes" },
  { title: "Cloud Computing", description: "Services cloud évolutifs et intégration data center" },
  { title: "Communications VoIP", description: "Solutions de communication moderne et collaboration" },
  { title: "Cybersécurité", description: "Protection avancée et conformité réglementaire" },
  { title: "Solutions SAP", description: "Implémentation, intégration et support SAP" },
  { title: "Mobile Payment", description: "Solutions de paiement mobile sécurisées" },
]

export default function Solutions() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative light-section rounded-[32px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            Nos <span className="text-accent">solutions</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
            Une gamme complète de services adaptés à tous vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-8 border bg-white/95 shadow-lg border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer dark:bg-white/5 dark:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-light">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
