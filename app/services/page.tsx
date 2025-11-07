"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, Shield, Cloud, Network, Users } from "lucide-react"

export default function ServicesPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Solutions & Services</h1>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Chez Teknosys Group, nos services sont structurés en trois pôles complémentaires.
          </p>
        </div>
      </section>

      {/* Le marché IT 2024 */}
      <section id="marche" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Le marché IT en 2024</h2>
            <p className="text-foreground/70 text-lg">
              Des chiffres qui illustrent l'importance croissante de la transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{n:"8.2%",t:"Croissance du marché IT en 2024"},{n:"94%",t:"Entreprises adoptant le cloud"},{n:"+12%",t:"Budget cybersécurité"},{n:"78%",t:"Transformation digitale"}].map((kpi, i) => (
              <div
                key={i}
                className="glassmorphism rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="text-4xl md:text-5xl font-black text-accent">{kpi.n}</div>
                <div className="mt-3 font-semibold">{kpi.t}</div>
                <div className="mt-2 text-xs text-foreground/60">Indicateurs de tendance</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction pôles */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border text-sm text-foreground/70">
            Nos 3 Pôles d'Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Une approche complète</h2>
          <p className="text-foreground/70 text-base md:text-lg">
            De la conception à l'exécution, jusqu'au conseil stratégique, nous vous accompagnons à chaque étape de vos projets IT.
          </p>
          <p className="text-foreground/70 text-base md:text-lg">
            Chez Teknosys Group, nos services sont structurés en trois pôles complémentaires. Cette approche nous permet d’accompagner nos clients à chaque étape de leurs projets IT : de la conception à l’exécution, jusqu’au conseil stratégique.
          </p>
        </div>
      </section>

      {/* Pôle 1 */}
      <section id="pole1" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Pôle 1</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Services & Integration</h3>
            <p className="mt-3 text-foreground/70">Déploiement d'infrastructures IT de bout en bout.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Déploiement d'infrastructures IT",
                "Solutions réseau : switching, Wi‑Fi, câblage structuré",
                "Intégration cloud : migration, data center, services managés",
                "VoIP & UC : Zoom, Teams",
                "Vidéosurveillance & contrôle d'accès",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/S-pole1.svg" alt="Infrastructure" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pôle 2 */}
      <section id="pole2" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 dark:bg-accent/10/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/S-pole2.svg" alt="Distribution" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Pôle 2</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Distribution</h3>
            <p className="mt-3 text-foreground/70">Fourniture d'équipements IT avec logistique fiable.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Équipements IT, cybersécurité, vidéosurveillance",
                "Stock local et livraison projet",
                "Réseau de partenaires stratégiques",
                "Produits certifiés : Hikvision, Fortinet, Dahua, Aruba, Zoom",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pôle 3 */}
      <section id="pole3" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Pôle 3</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Consultancy</h3>
            <p className="mt-3 text-foreground/70">Conseil opérationnel et stratégique pour vos enjeux IT complexes.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Audit IT & cybersécurité",
                "Transformation digitale",
                "Stratégie cloud & architecture Zero Trust",
                "Intégration & support de solutions SAP",
                "Délégation de ressources (ingénieurs, PM, consultants)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/S-pole3.svg" alt="Consulting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Sécurité & Conformité */}
      <section id="securite" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center glassmorphism rounded-3xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(217,70,239,0.2)]">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm">
              <Shield className="w-4 h-4" /> Cybersécurité
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Sécurité & Conformité au cœur de nos solutions</h3>
            <p className="mt-3 text-foreground/70">
              Avec l'augmentation des budgets cybersécurité, nous plaçons la sécurité au centre de toutes nos interventions.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Certifications sécurité internationales",
                "Architecture Zero Trust",
                "Conformité réglementaire GDPR",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <img src="/services/S-security.svg" alt="Security" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


