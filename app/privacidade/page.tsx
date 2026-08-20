import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacidade | Paola Milani",
  description: "Como as informações do primeiro contato são tratadas no site da psicóloga Paola Milani.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a className="brand" href="/" aria-label="Voltar ao site de Paola Milani">
          <Image src="/paola/logo-paola.png" alt="Paola Milani Psicóloga" width={2001} height={599} priority />
        </a>
        <a className="header-cta" href="/">Voltar ao site</a>
      </header>

      <article className="privacy-content">
        <p className="section-kicker">Aviso de privacidade</p>
        <h1>Seu primeiro contato, com cuidado e transparência.</h1>
        <p className="privacy-intro">
          Esta página explica o que acontece com as informações preenchidas no formulário antes de você continuar para o WhatsApp.
        </p>

        <section>
          <h2>Quais informações são solicitadas?</h2>
          <p>Nome, idade de quem poderá receber o atendimento, relação da pessoa que entra em contato, serviço procurado, modalidade, período de preferência e uma mensagem opcional.</p>
        </section>

        <section>
          <h2>Como elas são usadas?</h2>
          <p>As respostas servem somente para organizar o primeiro contato e ajudar a Paola a compreender, de forma inicial, qual orientação você procura.</p>
        </section>

        <section>
          <h2>O site armazena essas respostas?</h2>
          <p>Não. O preenchimento acontece no seu navegador. Ao enviar, o site monta uma mensagem e abre o WhatsApp; você ainda pode revisar ou desistir do envio antes de conversar com a Paola.</p>
        </section>

        <section>
          <h2>Cuidados ao escrever</h2>
          <p>Compartilhe apenas o necessário para esse primeiro contato. Evite inserir diagnósticos detalhados, documentos, laudos, imagens ou outras informações sensíveis. Quando se tratar de criança ou adolescente, o contato deve ser feito por um responsável, sempre que aplicável.</p>
        </section>

        <section>
          <h2>Uso do WhatsApp</h2>
          <p>Depois que você decidir enviar a mensagem, o tratamento das informações também seguirá as configurações e os termos de privacidade do WhatsApp.</p>
        </section>

        <aside className="emergency-note">
          <strong>Atenção:</strong> o formulário e o WhatsApp não são canais de urgência ou emergência. Em uma situação de risco imediato, procure o serviço de emergência da sua região.
        </aside>

        <a className="primary-cta" href="/#pre-contato">Voltar ao primeiro contato <span aria-hidden="true">↗</span></a>
      </article>
    </main>
  );
}
