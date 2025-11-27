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
    <section id="services" className="py-16 md:py-24 w-full relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground">
            Nos pôles <span className="text-[#00B5FF]">d'expertise</span>   
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // Appliquer des animations différentes selon la ligne
            const isTopRow = index < 2;
            const animationVariant = isTopRow 
              ? itemTop(index * 0.2) 
              : itemBottom((index - 2) * 0.2);

            return (
              <motion.div
                key={index}
                variants={animationVariant}
                className={`group relative h-full rounded-xl p-6 md:p-8 border-2 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                  service.featured
                    ? "bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-400/30 shadow-2xl"
                    : "bg-white/90 backdrop-blur-sm border-slate-200/80 hover:border-blue-300 dark:bg-slate-800/50 dark:border-slate-700/50 dark:hover:border-blue-400/50"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  service.featured 
                    ? 'from-blue-500/10 to-blue-600/10' 
                    : 'from-blue-100/30 to-blue-200/30 dark:from-blue-900/20 dark:to-blue-800/20'
                }`}></div>
                <div className="relative z-10 space-y-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.featured 
                        ? "bg-white/20 backdrop-blur-md shadow-lg" 
                        : "bg-blue-50 dark:bg-slate-700/50 shadow-md group-hover:bg-blue-100 dark:group-hover:bg-slate-700/70"
                    }`}
                  >
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      service.featured 
                        ? "text-white" 
                        : "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                    }`} />
                  </div>

                  <h3 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                    service.featured 
                      ? "from-white to-blue-100 group-hover:from-blue-200 group-hover:to-white"
                      : "from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 group-hover:from-blue-600 group-hover:to-blue-400 dark:group-hover:from-blue-400 dark:group-hover:to-blue-200"
                  }`}>
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start text-sm leading-relaxed transition-colors duration-300 ${
                          service.featured 
                            ? "text-blue-100/90 group-hover:text-white" 
                            : "text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white"
                        }`}
                      >
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400 group-hover:bg-blue-500"></span>
                        <span>{highlight}</span>
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
