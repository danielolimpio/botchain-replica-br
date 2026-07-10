import wallet from "@/assets/icon_wallet.webp";
import bridge from "@/assets/icon_bridge.webp";
import dex from "@/assets/icon_dex.webp";

const portals = [
  { icon: wallet, title: "Carteira BO", sub: "Cobertura DeFi & Gateway", desc: "Notícias, tutoriais e atualizações sobre a carteira oficial da rede: novos recursos, integrações e alertas de segurança para usuários finais." },
  { icon: bridge, title: "BOT Bridge", sub: "Interoperabilidade L1", desc: "Reportagens sobre a ponte multichain, novos ativos suportados, movimentações relevantes e análises de risco em pontes de mensagens." },
  { icon: dex, title: "B DEX", sub: "Câmbio Descentralizado", desc: "Panorama do DEX nativo: listagens de pares, volumes, análises de liquidez e destaques semanais de tokens do ecossistema BOT." },
];

export function Portals() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Portais</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Portais do Ecossistema</h2>
          <p className="mt-3 text-muted-foreground">Lendo o caminho para a inovação em blockchain.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {portals.map((p) => (
            <article key={p.title} className="card-panel card-panel-hover p-8 flex flex-col items-center text-center">
              <img src={p.icon} alt="" className="h-20 w-20 mb-6 drop-shadow-[0_0_25px_oklch(0.78_0.15_168/0.5)]" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <div className="text-xs text-primary/90 mt-1 mb-3">{p.sub}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
