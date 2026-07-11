export type DocLink = { slug: string; label: string };
export type DocSection = { title: string; links: DocLink[] };

export const devDocsSidebar: DocSection[] = [
  {
    title: "Introdução",
    links: [
      { slug: "intro", label: "BOT Chain — Visão geral" },
      { slug: "introduction", label: "Introdução" },
      { slug: "introduction_proof-of-staked-authority", label: "Proof of Staked Authority" },
      { slug: "introduction_fast-finality", label: "Finalidade Rápida" },
      { slug: "introduction_staking-and-governance", label: "Staking e Governança" },
      { slug: "introduction_reward", label: "Recompensas" },
      { slug: "introduction_security", label: "Segurança" },
    ],
  },
  {
    title: "Desenvolvedores",
    links: [
      { slug: "Developers_quick-guide", label: "Guia rápido" },
      { slug: "Developers_node-types", label: "Tipos de nós" },
      { slug: "Developers_bot-chain-node-configuration-best-practices", label: "Boas práticas de configuração de nós" },
      { slug: "Developers_json-rpc-endpoint", label: "Endpoint JSON-RPC" },
      { slug: "Developers_blob-api", label: "Blob API" },
      { slug: "Developers_eoa-paymaster", label: "EOA Paymaster" },
      { slug: "Developers_claim-test-tbot-tokens", label: "Obter tokens tBOT de teste" },
    ],
  },
  {
    title: "DEX",
    links: [
      { slug: "DEX_introduction", label: "Introdução" },
      { slug: "DEX_core-concepts", label: "Conceitos essenciais" },
      { slug: "DEX_bdex-v2", label: "BDEX V2" },
      { slug: "DEX_bdex-v3", label: "BDEX V3" },
      { slug: "DEX_contract-addresses", label: "Endereços de contrato" },
      { slug: "DEX_api-reference", label: "Referência da API" },
    ],
  },
  {
    title: "Bridge",
    links: [
      { slug: "Bridge_introduction", label: "Introdução" },
      { slug: "Bridge_core-concepts", label: "Conceitos essenciais" },
      { slug: "Bridge_supported-chains", label: "Chains e ativos suportados" },
      { slug: "Bridge_fees", label: "Taxas" },
      { slug: "Bridge_contract-addresses", label: "Endereços de contrato" },
    ],
  },
  {
    title: "Staking",
    links: [
      { slug: "staking_validator-creation-guide", label: "Guia de criação de validador" },
    ],
  },
];

export const allDocSlugs = devDocsSidebar.flatMap((s) => s.links.map((l) => l.slug));
