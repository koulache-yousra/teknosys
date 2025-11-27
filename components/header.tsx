"use client"

import { useMemo, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"

type NavItem = {
  label: string
  href: string
  sections?: { label: string; href: string }[]
}

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, setIsMenuOpen: (value: boolean) => void) => {
  e.preventDefault();
  
  // Fermer le menu mobile si ouvert
  if (window.innerWidth < 1024) {
    setIsMenuOpen(false);
  }

  // Extraire le chemin et le hash de l'URL
  const [path, hash] = href.split('#');
  const currentPath = window.location.pathname;
  
  // Si on est déjà sur la bonne page, on fait simplement défiler vers la section
  if (path === '' || path === currentPath) {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.history.pushState({}, '', `#${hash}`);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  } else {
    // Si on doit changer de page, on navigue d'abord vers la page
    if (hash) {
      // On stocke la section à laquelle on veut accéder
      sessionStorage.setItem('scrollToSection', hash);
    }
    // Navigation vers la nouvelle page
    window.location.href = href;
  }
};

export default function Header({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('home')
  const pathname = usePathname()

  // Gestion du défilement vers une section après le chargement de la page
  useEffect(() => {
    // Vérifier s'il y a une section à laquelle faire défiler après le chargement
    const scrollToHash = () => {
      const hash = window.location.hash.substring(1) || sessionStorage.getItem('scrollToSection');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Nettoyer le stockage après utilisation
          sessionStorage.removeItem('scrollToSection');
        }
      }
    };

    // Observer les sections pour mettre à jour la section active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );

    // Observer toutes les sections de la page
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Délai pour s'assurer que le DOM est complètement chargé
    const timer = setTimeout(() => {
      scrollToHash();
    }, 100);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, [pathname]);

  const navItems: NavItem[] = useMemo(() => {
    const items: NavItem[] = [
      { label: "Accueil", href: "/" },
      { label: "À Propos", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Partenaires", href: "/partners" },
      { label: "Références", href: "/references" },
      { label: "Contact", href: "/contact" },
    ];

    // Si nous sommes sur la page d'accueil, ajouter les sections
    if (pathname === '/') {
      return items.map(item => {
        if (item.href === '/') {
          return {
            ...item,
            sections: [
              { label: "Accueil", href: "#home" },
              { label: "À propos", href: "#about" },
              { label: "Expertise", href: "#services" },
              { label: "Atouts", href: "#atouts" },
              { label: "Partenaires", href: "#partners" },
              { label: "Contact", href: "#contact" },
            ]
          };
        }
        return item;
      });
    }
    return items;
  }, [pathname]);

  const sectionsByRoute: Record<string, { label: string; href: string }[]> = {
    "/": [
      { label: "Accueil", href: "/#home" },
      { label: "À propos", href: "/#about" },
      { label: "Expertise", href: "/#services" },
      { label: "Atouts", href: "/#atouts" },
      { label: "Partenaires", href: "/#partners" },
      { label: "Contact", href: "/#contact" },
    ],
    "/about": [
      { label: "Qui sommes nous ?", href: "/about#intro" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Valeurs", href: "/about#valeurs" },
      { label: "Chiffres clés", href: "/about#chiffres" },
      { label: "Certifications & Qualité", href: "/about#certifications" },
    ],
    "/services": [
      { label: "Services & Integration", href: "/services#pole1" },
      { label: "Distribution", href: "/services#pole2" },
      { label: "Consultancy", href: "/services#pole3" },
      { label: "visioconférence&Collaboration", href: "/services#pole4" },
      { label: "CyberSécurité", href: "/services#securite" },
    ],
    "/partners": [
      { label: "Nos Partenaires", href: "/partners#partners" },
      { label: "Devenir un partenaire", href: "/partners#devenir-partenaire" },
    ],
    "/references": [
      { label: "Références", href: "/references#references" },
      { label: "Présence", href: "/references#presence" },
      { label: "Projets", href: "/references#projets" },
      
    ],
    "/contact": [],
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 border-b border-border/30 ${
        isDark ? "glassmorphism" : "bg-white/90 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between h-16 md:h-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Accueil Teknosys">
            {isDark ? (
              <div className="relative h-[150px] w-[180px]">
                <Image
                  src="/whitelogo_teknosys.png"
                  alt="Logo Teknosys"
                  fill
                  priority
                  sizes="(max-width: 768px) 140px, 170px"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative h-[26px] w-[150px]">
                <Image
                  src="/Logo-teknosys.png"
                  alt="Logo Teknosys"
                  fill
                  priority
                  sizes="(max-width: 768px) 150px, 190px"
                  className="object-contain"
                />
              </div>
            )}
            <span className="sr-only">Teknosys Group</span>
          </Link>

          {/* Navigation principale */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.07, ease: "easeOut" }}
                onMouseEnter={() => sectionsByRoute[item.href] && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
                onFocusCapture={() => sectionsByRoute[item.href] && setActiveDropdown(item.href)}
                onBlurCapture={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href ? 'text-accent' : 'text-foreground/70 hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
                {sectionsByRoute[item.href] && activeDropdown === item.href && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-4">
                    <div className="min-w-[280px] rounded-2xl border border-border/40 bg-background/95 backdrop-blur shadow-2xl shadow-accent/10">
                      <nav className="flex flex-col p-3">
                        {sectionsByRoute[item.href].map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            onClick={(e) => {
                              scrollToSection(e, s.href, setIsMenuOpen);
                              setActiveDropdown(null);
                            }}
                            className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors"
                          >
                            {s.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-foreground/60" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border/30 pt-4">
            {navItems.map((item) => (
              <div key={item.href} className="space-y-1">
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      const sectionId = item.href.substring(1);
                      scrollToSection(e, item.href, setIsMenuOpen);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href ? 'text-accent' : 'text-foreground/70 hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
                {item.sections && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.sections.map((section) => (
                      <a
                        key={section.href}
                        href={section.href}
                        onClick={(e) => {
                          scrollToSection(e, section.href, setIsMenuOpen);
                        }}
                        className={`block px-4 py-1.5 text-sm ${
                          activeSection === section.href.substring(1)
                            ? 'text-accent'
                            : 'text-foreground/60 hover:text-foreground'
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Barre de navigation des sections pour les pages (sauf l'accueil) */}
      {pathname !== '/' && sectionsByRoute[pathname] && (
        <div className="border-t border-border/30 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-4 py-2 overflow-x-auto">
              {sectionsByRoute[pathname].map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(e, section.href, setIsMenuOpen);
                  }}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    activeSection === section.href.split('#')[1]
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/70 hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}