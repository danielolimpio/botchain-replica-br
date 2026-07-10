const stages = [
  {
    q: "2025 Q3 – 2026 Q1",
    items: [
      "Cobertura do lançamento da testnet institucional",
      "Reportagens especiais sobre o whitepaper",
      "Guia editorial: como acompanhar validadores",
      "Análises semanais do desempenho da mainnet",
      "Lançamento da BOT Chain Bridge",
    ],
  },
  {
    q: "2026 Q2 – 2026 Q3",
    items: [
      "Série sobre atualização do Programa de Validação",
      "Reportagens sobre integrações institucionais",
      "Cobertura do primeiro relatório de auditoria",
    ],
  },
  {
    q: "2026 Q4 – 2027 Q1",
    items: [
      "Especial sobre governança on-chain",
      "Análise da nova camada de dados",
      "Cobertura da campanha de expansão global",
    ],
  },
  {
    q: "2027 Q2 – 2027 Q4",
    items: [
      "Anúncio da BOT L2 — cobertura ao vivo",
      "Reportagens sobre novas parcerias corporativas",
      "Retrospectiva anual e prêmios do ecossistema",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="py-24 border-y border-border/50 bg-[oklch(0.16_0.012_180)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Editorial</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Agenda Editorial BOT Chain</h2>
          <p className="mt-3 text-muted-foreground">Nossa pauta e cronograma de reportagens especiais.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {stages.map((s) => (
            <div key={s.q} className="card-panel p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_oklch(0.78_0.15_168)]" />
                <span className="text-xs text-primary font-medium">{s.q}</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                {s.items.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
