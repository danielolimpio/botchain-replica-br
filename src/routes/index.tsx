import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { CoreArchitecture } from "@/components/site/CoreArchitecture";
import { TechStats } from "@/components/site/TechStats";
import { Portals } from "@/components/site/Portals";
import { Projects } from "@/components/site/Projects";
import { Security } from "@/components/site/Security";
import { Roadmap } from "@/components/site/Roadmap";
import { MediaKit } from "@/components/site/MediaKit";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BOT Chain News — Inteligência Reinventada" },
      { name: "description", content: "Portal informacional em português sobre a BOT Chain: notícias, análises, guias e cobertura de todo o ecossistema." },
      { property: "og:title", content: "BOT Chain News — Inteligência Reinventada" },
      { property: "og:description", content: "Notícias e análises sobre a BOT Chain e seu ecossistema." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoreArchitecture />
        <TechStats />
        <Portals />
        <Projects />
        <Security />
        <Roadmap />
        <MediaKit />
      </main>
      <Footer />
    </div>
  );
}
