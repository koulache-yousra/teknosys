"use client"

export default function AboutHero() {
  return (
    <section id="intro" className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-6xl sm:text-7xl font-black leading-[1.1] tracking-tighter text-foreground">
            Qui sommes-nous ?
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl font-light">
            TeknosysGroup est une entreprise algérienne spécialisée dans les technologies de l'information.
          </p>

          <div className="space-y-4 text-foreground/80 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed">
              Nous aidons les entreprises à{" "}
              <span className="font-semibold text-accent">
                protéger, moderniser et optimiser leur infrastructure IT
              </span>
              , tout en améliorant leur communication.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Notre expertise couvre{" "}
              <span className="font-semibold text-accent">
                l'intégration de solutions, la distribution de matériel, le conseil et les services IT managés
              </span>
              , avec des partenaires technologiques de premier plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
