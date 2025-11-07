"use client"

import { useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const sectionNav = useMemo(() => {
    if (pathname?.startsWith("/services")) {
      return [
        { label: "Le marché", href: "#marche" },
        { label: "Pôle 1", href: "#pole1" },
        { label: "Pôle 2", href: "#pole2" },
        { label: "Pôle 3", href: "#pole3" },
        { label: "Sécurité", href: "#securite" },
      ]
    }
    return []
  }, [pathname])

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partenaires", href: "/partners" },
    { label: "Références", href: "/references" },
    { label: "Contact", href: "/contact" },
  ]

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
      { label: "Introduction", href: "/about#intro" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Valeurs", href: "/about#valeurs" },
      { label: "Chiffres clés", href: "/about#chiffres" },
      { label: "Certifications", href: "/about#certifications" },
      { label: "Qualité", href: "/about#qualite" },
    ],
    "/services": [
      { label: "Le marché 2024", href: "/services#marche" },
      { label: "Pôle 1", href: "/services#pole1" },
      { label: "Pôle 2", href: "/services#pole2" },
      { label: "Pôle 3", href: "/services#pole3" },
      { label: "Sécurité", href: "/services#securite" },
    ],
    "/references": [
      { label: "Haut de page", href: "/references#hero" },
      { label: "Références", href: "/references#references" },
      { label: "Présence", href: "/references#presence" },
      { label: "Projets", href: "/references#projets" },
      { label: "Partenaires", href: "/references#partenaires" },
      { label: "Contact", href: "/references#contact-form" },
    ],
    "/contact": [],
  }

  return (
    <header className="fixed w-full top-0 z-50 glassmorphism border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">TEKNOSYS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => sectionsByRoute[item.href] && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown((current) => (current === item.href ? null : current))}
                onFocusCapture={() => sectionsByRoute[item.href] && setActiveDropdown(item.href)}
                onBlurCapture={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
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
                            className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {s.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                )}
              </div>
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
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border/30 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Section navigation for current page */}
      {sectionNav.length > 0 && (
        <div className="border-t border-border/30 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-4 py-2 overflow-x-auto">
              {sectionNav.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
