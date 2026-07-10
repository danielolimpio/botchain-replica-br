import logo from "@/assets/icon_title_logo.webp";
import { Twitter, Github, Send, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Ecossistema",
    links: ["Notícias", "Análises", "Guias", "Cobertura de Projetos", "Newsletter", "Programa Comunidade"],
  },
  {
    title: "Documentação",
    links: ["Sobre nós", "Padrões editoriais", "Fale com a redação"],
  },
  {
    title: "Legal",
    links: ["Política de Privacidade", "Termos de Uso"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="BOT Chain News" className="h-6 mb-4" />
          <p className="text-xs text-muted-foreground mb-4">
            Portal informacional independente cobrindo a BOT Chain e seu ecossistema.
          </p>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="X"><Twitter className="h-4 w-4 hover:text-primary" /></a>
            <a href="#" aria-label="Telegram"><Send className="h-4 w-4 hover:text-primary" /></a>
            <a href="#" aria-label="Discord"><MessageCircle className="h-4 w-4 hover:text-primary" /></a>
            <a href="#" aria-label="GitHub"><Github className="h-4 w-4 hover:text-primary" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground text-center">
        © 2026 BOT Chain News. Todos os direitos reservados.
      </div>
    </footer>
  );
}
