export type Partner = {
  name: string
  logo: string
  description: string
  url: string
  category?: string
}

export const partners: Partner[] = [
  {
    name: "Reserva",
    logo: "/reserva-logo.jpg",
    description: "Solutions d'affichage et de réservation d'espaces collaboratifs.",
    url: "https://reserva.sedao.com/",
    category: "Collaboration",
  },
  {
    name: "Poly",
    logo: "/poly-logo.jpg",
    description: "Matériel de visioconférence et terminaux voix premium pour salles connectées.",
    url: "https://www.poly.com/",
    category: "Collaboration",
  },
  {
    name: "Avaya",
    logo: "/partners/avaya.svg",
    description: "Plateformes de communication unifiée et centres de contact.",
    url: "https://www.avaya.com/",
    category: "Communication",
  },
  {
    name: "Barco",
    logo: "/partners/barco.svg",
    description: "Solutions de visualisation, murs d'images et ClickShare pour les salles de réunion.",
    url: "https://www.barco.com/",
    category: "Collaboration",
  },
  {
    name: "Evoko",
    logo: "/partners/evoko.svg",
    description: "Gestion intelligente des salles de réunion et signalétique connectée.",
    url: "https://evoko.se/",
    category: "Collaboration",
  },
  {
    name: "Yealink",
    logo: "/partners/yealink.svg",
    description: "Terminaux voix, visioconférence et périphériques Microsoft Teams Rooms.",
    url: "https://www.yealink.com/",
    category: "Collaboration",
  },
  {
    name: "Angekis",
    logo: "/partners/angekis.svg",
    description: "Caméras PTZ haute définition pour salles de réunion et auditoriums.",
    url: "https://www.angekis.com/",
    category: "Vidéo",
  },
  {
    name: "Logitech",
    logo: "/partners/logitech.svg",
    description: "Écosystème de visioconférence, périphériques audio et collaboration.",
    url: "https://www.logitech.com/",
    category: "Collaboration",
  },
  {
    name: "Jabra GN",
    logo: "/jabra-gn-logo.jpg",
    description: "Casques, speakerphones et solutions audio intelligentes pour le travail hybride.",
    url: "https://www.jabra.com/",
    category: "Audio",
  },
  {
    name: "Alcatel",
    logo: "/alcatel-logo.jpg",
    description: "Réseaux d'entreprise, switching, Wi-Fi et solutions de communication.",
    url: "https://www.al-enterprise.com/",
    category: "Réseau",
  },
  {
    name: "Mersive",
    logo: "/mersive-logo.jpg",
    description: "Plateformes de collaboration sans fil et partage de contenu multi-utilisateurs.",
    url: "https://www.mersive.com/",
    category: "Collaboration",
  },
]


