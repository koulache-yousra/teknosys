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
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Solutions & Services</h1>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Chez Teknosys Group, nos services sont structurés en trois pôles complémentaires.
          </p>
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Teknosys Services & Integration</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Services & Integration</h3>
            
            <ul className="mt-6 space-y-3">
              {[
                "Déploiement d'infrastructures IT",
                "Solutions réseau, Wi-Fi, switching, câblage",
                "Intégration cloud, data center, VoIP",
                "Vidéosurveillance, contrôle d'accès",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <br />
            <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
              >
               Lire Plus
              </button>
          </div>
          <div className="group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/service-integration.jpg" alt="Infrastructure" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pôle 2 */}
      <section id="pole2" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 dark:bg-accent/10/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/distribution.jpg" alt="Distribution" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Teknosys Distribution</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Distribution</h3>
            
            <ul className="mt-6 space-y-3">
              {[
                "Fourniture d'équipements IT, sécurité et vidéosurveillance",
                "Stock local ou livraison rapide via nos partenaires",
                "Marques : Hikvision, Fortinet, Dahua, Aruba, Zoom",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <br />
            <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
              >
               Lire Plus
              </button>
          </div>
        </div>
      </section>

      {/* Pôle 3 */}
      <section id="pole3" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm">Teknosys Consultancy</span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold">Teknosys Consultancy</h3>
            <p className="mt-3 text-foreground/70">Conseil opérationnel et stratégique pour vos enjeux IT complexes.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Audit IT & cybersécurité",
                "Accompagnement à la transformation digitale",
                "Stratégie cloud & architecture Zero Trust",
                "Solutions SAP (déploiement, intégration, support)",
                "Solutions Mobile Payment (intégration, sécurité, conformité)",
                "Conformité & mise à niveau technologique",
                "Délégation de ressources IT (ingénieurs, chefs de projet, consultants)",

              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <br />
            <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
              >
               Lire Plus
              </button>
          </div>
          <div className="group glassmorphism rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,70,239,0.25)]">
            <img src="/services/consultancy.jpg" alt="Consulting" className="w-full h-full object-cover" />
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
            <br />
            <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
              >
               Lire Plus
              </button>
          </div>
          <div className="rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
            <img src="/services/cybersecurity.jpg" alt="Security" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Formulaire de demande de devis */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Demander un devis</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Société</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none"
                  placeholder="+213 XX XX XX XX XX"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Service concerné <span className="text-red-500">*</span></label>
              <select
                className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none"
                required
              >
                <option value="">Sélectionnez un service</option>
                <option value="integration">Services & Integration</option>
                <option value="distribution">Distribution</option>
                <option value="consultancy">Consulting</option>
                <option value="security">Cybersécurité</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Détails de votre demande <span className="text-red-500">*</span></label>
              <textarea
                rows={5}
                className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none min-h-[120px] resize-none"
                placeholder="Décrivez votre projet ou votre besoin en détail..."
                required
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 rounded border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-gray-700 dark:text-gray-300">
                  J'accepte la <a href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">politique de confidentialité</a> <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
            
            
              <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg shadow-rose-400/30 transition-all hover:-translate-y-0.5"
            >
              Envoyer la Demande
              
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}


