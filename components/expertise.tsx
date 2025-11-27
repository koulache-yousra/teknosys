"use client"

import { FileText, CheckCircle, TrendingUp, Video } from "lucide-react"
import { motion } from 'framer-motion';

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
  {
    icon: Video,
    title: "Teknosys Videoconferencing & Collaboration",
    highlights: [
      "Solutions de visioconférence professionnelles",
      "Zoom Rooms & Microsoft Teams Rooms",
      "Intégration complète audio/vidéo",
      "Casques, micros, speakerphones",
      "Écrans interactifs & salles de réunion intelligentes",
    ],
  },
]

export default function Expertise() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemTop = (delay = 0) => ({
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      },
    },
  });

  const itemBottom = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      },
    },
  });

  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
            Nos pôles <span className="text-[#00B5FF]">d'expertise</span>   
          </h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // Appliquer des animations différentes selon l'index
            const animationVariant = index % 2 === 0 
              ? itemTop(index * 0.2) 
              : itemBottom(index * 0.2);

            return (
              <motion.div
                key={index}
                variants={animationVariant}
                className={`group rounded-2xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(217,70,239,0.25)] ${
                  service.featured
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black border-accent/50 shadow-2xl"
                    : "bg-white shadow-xl border-slate-200/80 hover:border-accent/40 dark:bg-white/5 dark:border-white/10 dark:shadow-none"
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
