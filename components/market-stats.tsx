"use client"

export default function MarketStats() {
  return (
    <section id="market-stats" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Le marché IT en 2024</h2>
          <p className="text-foreground/70 text-lg">
            Des chiffres qui illustrent l'importance croissante de la transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {n:"8.2%",t:"Croissance du marché IT en 2024"},
            {n:"94%",t:"Entreprises adoptant le cloud"},
            {n:"+12%",t:"Budget cybersécurité"},
            {n:"78%",t:"Transformation digitale"}
          ].map((kpi, i) => (
            <div
              key={i}
              className="glassmorphism rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]"
            >
              <div className="text-4xl md:text-5xl font-black text-accent">{kpi.n}</div>
              <div className="mt-3 font-semibold">{kpi.t}</div>
              <div className="mt-2 text-xs text-foreground/60">Indicateurs de tendance</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}