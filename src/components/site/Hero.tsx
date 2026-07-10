import heroImage from "@/assets/image.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip mb-6">● BOT Chain News</span>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Inteligência<br />
            <span className="text-gradient-teal">Reinventada</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-lg">
            O portal informacional da BOT Chain — cobertura completa sobre a rede de próxima geração
            que combina consenso híbrido, mineração dupla e finalidade rápida para uma economia computacional aberta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary">Ler as notícias</button>
            <button className="btn-ghost">Explorar guias</button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full" />
          <img src={heroImage} alt="Ilustração BOT Chain" className="relative w-full rounded-xl border border-border/60" />
        </div>
      </div>
    </section>
  );
}
