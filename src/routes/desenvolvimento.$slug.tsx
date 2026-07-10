import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { DocsLayout } from "@/components/site/DocsLayout";
import { devDocsSidebar } from "@/data/devDocsSidebar";
import devDocs from "@/data/devDocs.json";

type DocEntry = { title: string; html: string };
const docs = devDocs as Record<string, DocEntry>;

export const Route = createFileRoute("/desenvolvimento/$slug")({
  loader: ({ params }) => {
    const entry = docs[params.slug];
    if (!entry) throw notFound();
    return { entry, slug: params.slug };
  },
  component: DocPage,
  notFoundComponent: DocNotFound,
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${cleanTitle(loaderData.entry.title)} — BOT Chain News` },
          { name: "description", content: `Documentação BOT Chain: ${cleanTitle(loaderData.entry.title)}.` },
        ]
      : [{ title: "Documento não encontrado — BOT Chain News" }, { name: "robots", content: "noindex" }],
  }),
});

function cleanTitle(t: string) {
  return t.replace(/\|\s*BOT Chain Dev Docs$/, "").replace(/\|\s*BOT Chain Documentation$/, "").trim();
}

function DocPage() {
  const { entry, slug } = Route.useLoaderData();
  const title = cleanTitle(entry.title);
  const flat = devDocsSidebar.flatMap((s) => s.links);
  const idx = flat.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  return (
    <DocsLayout activeSlug={slug}>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="docs-content" dangerouslySetInnerHTML={{ __html: entry.html }} />
      <div className="flex justify-between mt-12 pt-6 border-t border-border/60 gap-4">
        {prev ? (
          <Link
            to="/desenvolvimento/$slug"
            params={{ slug: prev.slug }}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← {prev.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link
            to="/desenvolvimento/$slug"
            params={{ slug: next.slug }}
            className="text-sm text-muted-foreground hover:text-primary text-right"
          >
            {next.label} →
          </Link>
        ) : <span />}
      </div>
    </DocsLayout>
  );
}

function DocNotFound() {
  return (
    <DocsLayout>
      <h1 className="text-2xl font-bold mb-3">Documento não encontrado</h1>
      <p className="text-muted-foreground">O tópico solicitado não existe. Escolha um item no menu lateral.</p>
    </DocsLayout>
  );
}
