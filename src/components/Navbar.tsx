"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  {
    label: "Programma's",
    children: [
      { label: "GezondeLunch", href: "/gezondelunch" },
      { label: "GezondeKantine", href: "/gezondekantine" },
      { label: "GezondeCatering", href: "/gezondecatering" },
      { label: "Kook- en Smaaklessen", href: "/kook-en-smaaklessen" },
      { label: "GezondeWijk", href: "/gezondewijk" },
    ],
  },
  {
    label: "Over ons",
    children: [
      { label: "Doel", href: "/doel" },
      { label: "Wie zijn wij", href: "/wie-zijn-wij" },
      { label: "Bestuur", href: "/bestuur" },
      { label: "Geschiedenis", href: "/geschiedenis" },
    ],
  },
  { label: "Stagiairs & Vrijwilligers", href: "/stagiairs" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/80 backdrop-blur-xl border-b border-charcoal/5">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <Logo className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-charcoal/70 hover:text-forest transition-colors rounded-lg hover:bg-forest/5">
                  {item.label}
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-charcoal/5 p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-charcoal/70 hover:text-forest hover:bg-forest/5 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={(item as { href: string }).href}
                className="px-3 py-2 text-sm font-medium text-charcoal/70 hover:text-forest transition-colors rounded-lg hover:bg-forest/5"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-charcoal/5 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-warm-gray uppercase tracking-widest">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-base text-charcoal/80 hover:text-forest transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={(item as { href: string }).href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-base text-charcoal/80 hover:text-forest transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
