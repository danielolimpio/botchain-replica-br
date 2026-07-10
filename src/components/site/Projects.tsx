import { ArrowRight, Coins, Sparkles, Wrench, Compass, Wallet, Database, Radio, Snowflake, Ticket } from "lucide-react";

const projects = [
  { icon: Coins, name: "Moeny", desc: "Gateway de pagamentos e serviços financeiros construídos sobre a BOT Chain, com cobertura editorial dedicada." },
  { icon: Sparkles, name: "ArcadeX", desc: "Plataforma de jogos on-chain: novidades semanais, tokens de recompensa e análises da economia lúdica em Web3." },
  { icon: Wrench, name: "Tendo", desc: "Ferramentas de produtividade para desenvolvedores e usuários avançados, com destaques do que está sendo lançado." },
  { icon: Compass, name: "Meridian", desc: "Portal de descobertas e curadoria de aplicações no ecossistema BOT, com resenhas independentes." },
  { icon: Wallet, name: "Finsect Wallet", desc: "Carteira multichain focada em segurança: guias práticos, comparativos e alertas de vulnerabilidades." },
  { icon: Database, name: "GRAD", desc: "Plataforma de dados on-chain com dashboards e boletins semanais sobre o estado da rede." },
  { icon: Radio, name: "Nssers", desc: "Rede social descentralizada — cobrimos comunidades emergentes e novos padrões de identidade." },
  { icon: Snowflake, name: "Silodex", desc: "Agregador de liquidez: métricas de volume, novas listagens e movimentos institucionais." },
  { icon: Ticket, name: "Choicepop", desc: "Marketplace de tickets e experiências on-chain, com pautas sobre eventos e integrações." },
];

export function Projects() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Ecossistema</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Construindo o Futuro Juntos</h2>
          <p className="mt-3 text-muted-foreground">Conheça os projetos e equipes acompanhados pela nossa redação.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article key={p.name} className="card-panel card-panel-hover p-6 flex gap-4">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn-ghost inline-flex items-center gap-2">
            Ver todas as matérias <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
