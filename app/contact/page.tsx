"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  // Initialiser EmailJS (remplacez avec vos vraies clés)
  useEffect(() => {
    emailjs.init("mUAX2qS54Gkk0MOoJ") // Remplacez par votre clé publique EmailJS
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget

    try {
      const result = await emailjs.sendForm(
        'service_bxjnj0o', //  Service ID
        'template_015m5wl', //  Template ID
        form,
        'mUAX2qS54Gkk0MOoJ' // clé publique
      )

      if (result.text === 'OK') {
        setMessageSent(true)
        form.reset()
        
        // Reset du message de succès après 5 secondes
        setTimeout(() => {
          setMessageSent(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black">Contactez-nous</h1>
          <p className="text-foreground/70 text-lg">
            Parlons de vos projets IT. Notre équipe vous répond sous 24 heures.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="glassmorphism rounded-3xl p-10 space-y-8">
            <h2 className="text-2xl font-semibold">Coordonnées directes</h2>
            <div className="space-y-6 text-foreground/70">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:contact@teknosys.com" className="hover:text-accent">
                    sales@teknosysgroup.com 
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <a href="tel:+21300000000" className="hover:text-accent">
                     ‪+213 20301061‬ 
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Adresse</p>
                  <p>Algerie - Alger</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 space-y-2">
              <p className="text-sm uppercase text-accent font-semibold">Disponibilité</p>
              <p className="text-foreground">Du dimanche au jeudi – 9h à 17h</p>
              <p className="text-foreground/70 text-sm">Support prioritaire pour nos clients sous contrat.</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
            <div className="space-y-2 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contactez-nous</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>

            {messageSent && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet <span className="text-red-500">*</span></label>
                  <input 
                    name="from_name"
                    className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="from_email"
                    className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none" 
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet <span className="text-red-500">*</span></label>
                <input 
                  name="subject"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none" 
                  placeholder="Intégration IT, support, conseil..."
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message <span className="text-red-500">*</span></label>
                <textarea 
                  name="message"
                  className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-200 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none min-h-[160px] resize-none" 
                  placeholder="Décrivez votre besoin ou votre projet..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-400/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}