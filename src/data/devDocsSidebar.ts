export type DocLink = { slug: string; label: string };
export type DocSection = { title: string; links: DocLink[] };

export const devDocsSidebar: DocSection[] = [
  {
    title: "Introdução",
    links: [
      { slug: "intro", label: "BOT Chain — Visão geral" },
      { slug: "introduction", label: "Introduction" },
      { slug: "introduction_proof-of-staked-authority", label: "Proof of Staked Authority" },
      { slug: "introduction_fast-finality", label: "Fast Finality" },
      { slug: "introduction_staking-and-governance", label: "Staking and Governance" },
      { slug: "introduction_reward", label: "Reward" },
      { slug: "introduction_security", label: "Security" },
    ],
  },
  {
    title: "Developers",
    links: [
      { slug: "Developers_quick-guide", label: "Quick Guide" },
      { slug: "Developers_node-types", label: "Node Types" },
      { slug: "Developers_bot-chain-node-configuration-best-practices", label: "Node Configuration Best Practices" },
      { slug: "Developers_json-rpc-endpoint", label: "JSON-RPC Endpoint" },
      { slug: "Developers_blob-api", label: "Blob API" },
      { slug: "Developers_eoa-paymaster", label: "EOA Paymaster" },
      { slug: "Developers_claim-test-tbot-tokens", label: "Claim test tBOT Tokens" },
    ],
  },
  {
    title: "DEX",
    links: [
      { slug: "DEX_introduction", label: "Introduction" },
      { slug: "DEX_core-concepts", label: "Core Concepts" },
      { slug: "DEX_bdex-v2", label: "BDEX V2" },
      { slug: "DEX_bdex-v3", label: "BDEX V3" },
      { slug: "DEX_contract-addresses", label: "Contract Addresses" },
      { slug: "DEX_api-reference", label: "API Reference" },
    ],
  },
  {
    title: "Bridge",
    links: [
      { slug: "Bridge_introduction", label: "Introduction" },
      { slug: "Bridge_core-concepts", label: "Core Concepts" },
      { slug: "Bridge_supported-chains", label: "Supported Chains & Assets" },
      { slug: "Bridge_fees", label: "Fees" },
      { slug: "Bridge_contract-addresses", label: "Contract Addresses" },
    ],
  },
  {
    title: "Staking",
    links: [
      { slug: "staking_validator-creation-guide", label: "Validator Creation Guide" },
    ],
  },
];

export const allDocSlugs = devDocsSidebar.flatMap((s) => s.links.map((l) => l.slug));
