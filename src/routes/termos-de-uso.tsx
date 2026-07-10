import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso — BOT Chain News" },
      { name: "description", content: "Termos de Uso do BOT Chain News: condições que regem o acesso e uso dos nossos produtos e serviços." },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 docs-content">
        <h1 className="text-4xl font-bold mb-3 text-foreground">Termos de Uso</h1>
        <p className="text-sm">Última modificação: 24 de fevereiro de 2026</p>
        <p>
          Este Contrato de Termos de Serviço ("Contrato") estabelece os termos e condições que regem seu
          acesso e uso dos produtos e serviços ("Produtos") fornecidos pelo BOT Chain News ("nós" ou "nossos"),
          incluindo nossa interface de usuário baseada na web e quaisquer serviços relacionados que façam
          referência a este Contrato.
        </p>
        <p>É obrigatória a leitura deste Contrato na íntegra. Ao acessar ou usar qualquer um dos nossos Produtos, você confirma que leu, entendeu e concorda integralmente com todas as disposições. Caso não concorde, fica expressamente proibido o acesso ou uso.</p>

        <blockquote>
          <strong>Aviso importante:</strong> Este Contrato contém termos juridicamente vinculantes, incluindo uma cláusula de arbitragem e uma renúncia à ação coletiva, que podem limitar seus direitos legais. Leia-o atentamente.
        </blockquote>

        <h2>1. Elegibilidade</h2>
        <p>Você deve ter pelo menos a idade legal para celebrar este Contrato em sua jurisdição (por exemplo, 18 anos nos Estados Unidos) e possuir plena capacidade legal para celebrá-lo e cumpri-lo.</p>
        <p>Você declara ainda que não é: (a) sujeito a sanções econômicas ou comerciais impostas por qualquer órgão governamental, nem listado em qualquer lista de partes restritas ou proibidas; ou (b) um residente, cidadão ou entidade organizada em uma jurisdição sujeita a sanções econômicas de amplo alcance.</p>

        <h2>2. Nossos Produtos</h2>
        <h3>2.1 A Interface</h3>
        <p>A Interface fornece um meio baseado na web para acessar e interagir com protocolos descentralizados ("Protocolos") implantados em redes blockchain públicas. Não controlamos, operamos ou mantemos os Protocolos.</p>
        <h3>2.2 Natureza Não Custodial</h3>
        <p>Nossos produtos são totalmente não custodiais. Você deve usar uma carteira com custódia própria para interagir com a interface. Não armazenamos, gerenciamos ou temos a capacidade de acessar, recuperar ou transferir quaisquer ativos mantidos em sua carteira.</p>

        <h2>3. Direitos de Propriedade Intelectual</h2>
        <p>Todos os direitos de propriedade intelectual dos nossos Produtos são de nossa titularidade ou licenciados para nós. Concedemos a você uma licença limitada, revogável, não exclusiva e não transferível para acessar e usar nossos Produtos.</p>

        <h2>4. Suas Responsabilidades</h2>
        <h3>4.1 Atividades Proibidas</h3>
        <ul>
          <li>Violação de direitos de propriedade intelectual;</li>
          <li>Condução de ataques cibernéticos (malware, negação de serviço);</li>
          <li>Conduta fraudulenta ou enganosa;</li>
          <li>Manipulação de mercado (rug pulls, wash trading);</li>
          <li>Violação de leis de valores mobiliários ou derivativos;</li>
          <li>Venda ou transferência de ativos roubados;</li>
          <li>Extração ou coleta não autorizada de dados;</li>
          <li>Qualquer outra atividade ilegal.</li>
        </ul>
        <h3>4.2 Conformidade Tributária</h3>
        <p>Você é o único responsável por determinar as implicações tributárias de suas transações e pelo relato e pagamento de todos os impostos aplicáveis.</p>
        <h3>4.3 Taxas de transação</h3>
        <p>Você é o único responsável por todas as taxas de transação (incluindo "Taxas de Combustível") incorridas pelo uso de nossos Produtos.</p>
        <h3>4.4 Liberação de Reivindicações</h3>
        <p>Você aceita expressamente todos os riscos relacionados ao uso de nossos Produtos e renuncia irrevogavelmente a qualquer responsabilidade, reclamação, demanda ou dano decorrente de tal uso.</p>

        <h2>5. Assunção de Riscos e Isenções de Responsabilidade</h2>
        <h3>5.1 Suposição de Risco</h3>
        <p>Ao utilizar nossos Produtos, você declara possuir conhecimento financeiro e técnico suficiente para compreender e aceitar os riscos inerentes, incluindo: riscos de contratos inteligentes, risco de mercado, risco do provedor de liquidez, risco regulatório e risco de terceiros.</p>
        <h3>5.2 Sem garantias</h3>
        <p>Nossos produtos são fornecidos "no estado em que se encontram" e "conforme disponibilidade". Isentamo-nos de todas as garantias, expressas ou implícitas.</p>
        <h3>5.3 Sem aconselhamento de investimento</h3>
        <p>Todas as informações fornecidas por meio de nossos Produtos têm caráter meramente informativo e não devem ser consideradas conselhos financeiros, de investimento ou de negociação.</p>

        <h2>6. Indenização</h2>
        <p>Você concorda em indenizar, defender e isentar o BOT Chain News, suas afiliadas e seus respectivos diretores, executivos, funcionários e agentes de quaisquer reclamações, danos, perdas, responsabilidades e despesas decorrentes do seu uso de nossos Produtos ou da sua violação deste Contrato.</p>

        <h2>7. Limitação de Responsabilidade</h2>
        <p>Em nenhuma circunstância nós ou nossas afiliadas seremos responsáveis perante você por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou por qualquer perda de lucros, dados ou fundo de comércio. Nossa responsabilidade total perante você por quaisquer reivindicações não excederá, em hipótese alguma, cem dólares americanos (US$ 100,00).</p>

        <h2>8. Lei Aplicável e Resolução de Controvérsias</h2>
        <h3>8.1 Lei Aplicável</h3>
        <p>Este Contrato será regido e interpretado de acordo com as leis do Estado de Nova York, sem levar em consideração seus princípios de conflito de leis.</p>
        <h3>8.2 Arbitragem</h3>
        <p>Qualquer disputa, controvérsia ou reclamação decorrente deste Contrato será resolvida definitivamente por meio de arbitragem vinculativa administrada pela Associação Americana de Arbitragem (AAA), conduzida no Estado do Colorado.</p>
        <h3>8.3 Renúncia à Ação Coletiva</h3>
        <p>Você e nós concordamos em resolver disputas individualmente. Você renuncia ao direito de participar de ações coletivas, arbitragem coletiva ou qualquer forma de processo representativo.</p>

        <h2>9. Diversos</h2>
        <h3>9.1 Modificações</h3>
        <p>Reservamo-nos o direito de modificar este Contrato a qualquer momento. O uso continuado dos Produtos após tais atualizações constitui aceitação dos termos revisados.</p>
        <h3>9.2 Divisibilidade</h3>
        <p>Caso alguma disposição deste Contrato seja considerada inválida, ilegal ou inexequível, tal disposição será limitada ou eliminada na medida mínima necessária.</p>
        <h3>9.3 Acordo Integral</h3>
        <p>Este Contrato constitui o acordo integral entre você e nós com relação ao assunto aqui tratado.</p>

        <h2>10. Informações de contato</h2>
        <p>Para quaisquer dúvidas referentes a este Contrato, entre em contato conosco pelos canais oficiais listados na página <a href="/sobre">Sobre</a>.</p>
      </main>
      <Footer />
    </div>
  );
}
