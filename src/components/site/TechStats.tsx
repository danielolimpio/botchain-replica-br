const rows = [
  {
    title: "Consenso PoSA & Dual-Mining",
    desc: "Cobrimos como a BOT Chain combina Prova de Autoridade e mineração dupla para entregar throughput de rede validado por operadores institucionais, com incentivos econômicos para produtores de blocos e nós de referência.",
    metric: "0,75 segundos",
    label: "Tempo de bloco",
  },
  {
    title: "Finalidade Rápida & Segurança",
    desc: "Reportagens sobre a estrutura de finalidade em duas fases, resistente a censura e otimizada para participação de validadores em múltiplas jurisdições, com auditoria contínua de código e provas criptográficas.",
    metric: "~0,9s méd.",
    label: "Finalidade",
  },
  {
    title: "Economia de Emissão Zero",
    desc: "Análises sobre o modelo de tokenomics deflacionário: recompras via receita de taxas, queima programada e alinhamento de longo prazo entre validadores, desenvolvedores e a comunidade que sustenta a rede.",
    metric: "64 tx / lote",
    label: "Execução paralela",
  },
];

export function TechStats() {
  return (
    <section className="relative py-24 bg-[oklch(0.16_0.012_180)] border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Tecnologia</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tecnologia & Mineração Dupla</h2>
        </div>
        <div className="divide-y divide-border/60">
          {rows.map((r) => (
            <div key={r.title} className="grid md:grid-cols-[1.5fr_1fr] gap-6 py-8 items-start">
              <div>
                <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{r.desc}</p>
              </div>
              <div className="md:text-right">
                <div className="text-3xl md:text-4xl font-bold text-gradient-teal">{r.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
