import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Logo className="h-8 w-auto brightness-0 invert opacity-80" />
            <p className="mt-4 text-sm leading-relaxed max-w-[35ch]">
              Stichting VoedselEducatie010 biedt dagelijks gezonde lunches en
              voedselwijsheid op basisscholen in Rotterdam.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Programma&apos;s
            </h4>
            <div className="space-y-2.5">
              <Link href="/gezondelunch" className="block text-sm hover:text-white transition-colors">GezondeLunch</Link>
              <Link href="/gezondekantine" className="block text-sm hover:text-white transition-colors">GezondeKantine</Link>
              <Link href="/gezondecatering" className="block text-sm hover:text-white transition-colors">GezondeCatering</Link>
              <Link href="/kook-en-smaaklessen" className="block text-sm hover:text-white transition-colors">Kook- en Smaaklessen</Link>
              <Link href="/gezondewijk" className="block text-sm hover:text-white transition-colors">GezondeWijk</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Over ons
            </h4>
            <div className="space-y-2.5">
              <Link href="/doel" className="block text-sm hover:text-white transition-colors">Doel</Link>
              <Link href="/wie-zijn-wij" className="block text-sm hover:text-white transition-colors">Wie zijn wij</Link>
              <Link href="/bestuur" className="block text-sm hover:text-white transition-colors">Bestuur</Link>
              <Link href="/geschiedenis" className="block text-sm hover:text-white transition-colors">Geschiedenis</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-2.5">
              <a href="mailto:info@voedseleducatie010.nl" className="block text-sm hover:text-white transition-colors">
                info@voedseleducatie010.nl
              </a>
              <Link href="/partners" className="block text-sm hover:text-white transition-colors">Partners</Link>
              <Link href="/stagiairs" className="block text-sm hover:text-white transition-colors">Stagiairs & Vrijwilligers</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-white/30">
          &copy; {new Date().getFullYear()} Stichting VoedselEducatie010, Rotterdam
        </div>
      </div>
    </footer>
  );
}
