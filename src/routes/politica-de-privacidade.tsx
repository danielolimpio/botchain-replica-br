import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — BOT Chain News" },
      { name: "description", content: "Política de Privacidade do BOT Chain News: como coletamos, usamos e protegemos suas informações." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 docs-content">
        <h1 className="text-4xl font-bold mb-3 text-foreground">Política de Privacidade</h1>
        <p className="text-sm">Última atualização: 24 de fevereiro de 2026</p>
        <p>
          Este Aviso de Privacidade descreve como o BOT Chain News ("nós", "nos" ou "nossos") coleta,
          usa e divulga informações pessoais em conexão com nosso site, canais de comunidade e todos os
          serviços relacionados (coletivamente, os "Serviços").
        </p>
        <p>Este Aviso de Privacidade tem caráter meramente informativo e não constitui um contrato nem cria direitos ou obrigações legais.</p>

        <h2>1. Informações que coletamos</h2>
        <p>Coletamos informações pessoais de diversas maneiras: diretamente de você, automaticamente durante o uso de nossos Serviços e de terceiros.</p>

        <h3>1.1. Informações que você fornece diretamente</h3>
        <ul>
          <li><strong>Informações de contato:</strong> endereço de e-mail, perfis em redes sociais e preferências de comunicação.</li>
          <li><strong>Informações de encaminhamento:</strong> detalhes sobre as pessoas que você encaminha para nossos serviços.</li>
          <li><strong>Informações sobre a consulta:</strong> conteúdo enviado por meio de formulários, do Assistente BOT ou de comunicação direta com nossa equipe.</li>
          <li><strong>Informações da conta:</strong> nome de usuário, foto e descrição do perfil, localização geral e data de cadastro.</li>
          <li><strong>Informações da Comunidade:</strong> dias de visita, tópicos/posts criados/visualizados/lidos, tempo de leitura, curtidas dadas/recebidas, distintivos conquistados e preferências da comunidade.</li>
        </ul>

        <h3>1.2. Informações coletadas automaticamente</h3>
        <ul>
          <li><strong>Dados de registro:</strong> endereço IP, sistema operacional, tipo/ID do navegador, URLs, fonte de referência, data/hora, duração da sessão e registros de erros.</li>
          <li><strong>Dados analíticos:</strong> seu caminho de navegação em nossos Serviços e sua atividade de uso.</li>
          <li><strong>Dados de localização:</strong> localização geográfica geral derivada do seu endereço IP.</li>
        </ul>

        <h3>1.3. Informações de terceiros</h3>
        <p>Podemos receber informações pessoais de outras fontes que combinamos com as informações que coletamos, incluindo redes sociais públicas, fornecedores de verificação de identidade, parceiros de eventos/promoções, fornecedores de serviços e análise de dados, afiliadas e fontes publicamente disponíveis.</p>

        <h3>1.4. Informações sobre Blockchain</h3>
        <p>Em relação aos nossos Serviços, podemos coletar os seguintes dados públicos da blockchain (por exemplo, da BOT Chain): endereço da conta, saldo da conta e detalhes da transação (ID, data, valor, taxas, endereços do remetente/destinatário e tamanho de armazenamento).</p>

        <h2>2. Como usamos a informação</h2>
        <ul>
          <li>Operar, manter, aprimorar e personalizar nossos Serviços.</li>
          <li>Entrar em contato com você por e-mail, redes sociais e outros canais.</li>
          <li>Comercializar nossos serviços, de acordo com suas preferências.</li>
          <li>Facilitar transações, benefícios, suporte ao cliente, concursos e promoções.</li>
          <li>Analisar a utilização, monitorar tendências e personalizar Serviços.</li>
          <li>Apoiar o desenvolvimento da blockchain e da comunidade BOT.</li>
          <li>Testar, atualizar, monitorar e proteger nossos serviços e ativos.</li>
          <li>Proteger nossos direitos, propriedade e segurança, bem como os de nossos usuários e de terceiros.</li>
          <li>Detectar, prevenir e investigar atividades fraudulentas ou ilegais.</li>
          <li>Cumprir as obrigações legais.</li>
        </ul>

        <h2>3. Como divulgamos informações</h2>
        <ul>
          <li><strong>Parceiros:</strong> empresas sob propriedade ou controle comum para prestação de serviços colaborativos.</li>
          <li><strong>Prestadores de serviços:</strong> fornecedores que realizam serviços em nosso nome (hospedagem, análise de dados, marketing).</li>
          <li><strong>Assessores profissionais:</strong> advogados, auditores e consultores.</li>
          <li><strong>Requisitos legais:</strong> quando exigido por lei ou processo legal, ou para proteger direitos, propriedade ou segurança.</li>
          <li><strong>Transferências empresariais:</strong> em fusão, venda de ativos, financiamento ou aquisição.</li>
          <li><strong>Com o seu consentimento:</strong> quando você nos autoriza a compartilhar.</li>
        </ul>

        <h2>4. Cookies e tecnologias relacionadas</h2>
        <p>Utilizamos cookies, web beacons e tecnologias similares para coletar informações automaticamente. Nossos Serviços podem usar serviços de análise como o Google Analytics. A maioria dos navegadores permite controlar cookies notificando você antes da aceitação, desativando cookies existentes ou configurando o navegador para rejeitar cookies.</p>

        <h2>5. Privacidade infantil</h2>
        <p>Nossos serviços não se destinam a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos.</p>

        <h2>6. Links de terceiros</h2>
        <p>Nossos Serviços podem conter links para sites ou serviços de terceiros. Este Aviso de Privacidade não se aplica a esses terceiros.</p>

        <h2>7. Atualizações a este Aviso de Privacidade</h2>
        <p>Podemos atualizar este Aviso de Privacidade periodicamente. A data da "Última Atualização" no topo refletirá quaisquer alterações.</p>

        <h2>8. Entre em contato conosco</h2>
        <p>Para dúvidas sobre este Aviso de Privacidade, entre em contato conosco através dos canais oficiais listados na página <a href="/sobre">Sobre</a>.</p>
      </main>
      <Footer />
    </div>
  );
}
