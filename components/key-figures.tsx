"use client"

export default function KeyFigures() {
  return (
    <section id="chiffres" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">Chiffres clés</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20">
            <img
              src="/about/cleschiffres.jpg"
              alt="Chiffres clés Teknosys"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-8 text-center space-y-3 hover:border-accent/50 transition-all">
              <div className="text-5xl font-bold text-accent">10+</div>
              <p className="text-sm text-foreground/70">d'expertise régionale</p>
            </div>
            <div className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-8 text-center space-y-3 hover:border-accent/50 transition-all">
              <div className="text-5xl font-bold text-accent">50+</div>
              <p className="text-sm text-foreground/70">projets livrés avec succès</p>
            </div>
            <div className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-8 text-center space-y-3 hover:border-accent/50 transition-all">
              <div className="text-5xl font-bold text-accent">6+</div>
              <p className="text-sm text-foreground/70">Présence dans 6 pays</p>
            </div>
            <div className="glassmorphism backdrop-blur-xl border border-white/10 dark:border-white/8 rounded-2xl p-8 text-center space-y-3 hover:border-accent/50 transition-all">
              <div className="text-5xl font-bold text-accent">20+</div>
              <p className="text-sm text-foreground/70">Réseau partenaires stratégiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
