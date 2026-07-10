import { Link } from "@tanstack/react-router";
import { Github, Search } from "lucide-react";
import logo from "@/assets/icon_title_logo.webp";

const nav = [
  { label: "Notícias", href: "/noticias" },
  { label: "Análises", href: "/analises" },
  { label: "Guias", href: "/guias" },
  { label: "Comunidade", href: "/comunidade" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BOT Chain News" className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-wide text-foreground/90">News</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Buscar" className="p-2 text-muted-foreground hover:text-primary transition">
            <Search className="h-4 w-4" />
          </button>
          <a href="#" aria-label="GitHub" className="p-2 text-muted-foreground hover:text-primary transition">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
