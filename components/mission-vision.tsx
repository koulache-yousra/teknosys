"use client"

export default function MissionVision() {
  return (
    <section id="mission" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glassmorphism backdrop-blur-2xl border border-white/10 dark:border-white/8 rounded-2xl p-12 md:p-16 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notre Mission</h2>
            </div>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Chez <span className="text-accent font-semibold">Teknosys</span>, nous nous engageons à offrir des solutions technologiques   
              <span className="text-accent font-semibold"> innovantes fiables</span> et parfaitement <span className="text-accent font-semibold">adaptées </span> 
              aux besoins de chaque organisation.
{" "}             <br />

                  Notre mission est d’accompagner nos clients dans leur <span className="text-accent font-semibold">transformation digitale </span> 
                   en leur fournissant des infrastructures sécurisées, des outils performants et un <span className="text-accent font-semibold">service d’excellence</span>  à chaque étape du projet.
            </p>
            
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-2xl border border-accent/20 rounded-2xl p-12 md:p-16 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Notre Vision</h2>
            </div>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Devenir le <span className="text-accent font-semibold"> partenaire technologique de référence </span> en Afrique du Nord, en anticipant les évolutions du marché et les nouveaux défis numériques.
              <br />
             Nous aspirons à bâtir un écosystème où <span className="text-accent font-semibold"> innovation, sécurité, performance et agilité </span>   se renforcent mutuellement, afin d’aider nos clients à se 
             développer, se protéger et se transformer durablement.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
