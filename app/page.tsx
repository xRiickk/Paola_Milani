import Image from "next/image";
import PreContactForm from "./PreContactForm";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Paola Milani — início">
          <Image src="/paola/logo-paola.png" alt="Paola Milani Psicóloga" width={2001} height={599} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-cta" href="#pre-contato">Fale comigo</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Psicologia infantojuvenil</p>
          <h1>Um espaço seguro para <em>crescer, sentir</em> e se descobrir.</h1>
          <p className="hero-text">
            Acolhimento psicológico para crianças, adolescentes e suas famílias,
            respeitando cada história e cada fase do desenvolvimento.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#pre-contato">
              Agendar uma conversa <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#sobre">Conheça meu trabalho <span aria-hidden="true">↓</span></a>
          </div>
          <p className="contact-note">Atendimento com escuta, cuidado e leveza.</p>
        </div>

        <div className="hero-visual" aria-label="Retrato da psicóloga Paola Milani">
          <div className="image-frame">
            <Image
              src="/paola/paola-retrato.jpg"
              alt="Paola Milani sorrindo em seu consultório"
              fill
              sizes="(max-width: 860px) 88vw, 42vw"
              className="portrait"
              priority
            />
          </div>
          <div className="visual-card">
            <Image
              className="butterfly-mark"
              src="/paola/borboleta-lilas.png"
              alt=""
              width={731}
              height={781}
              aria-hidden="true"
            />
            <p>Presença e vínculo para transformar desafios em possibilidades.</p>
          </div>
          <span className="soft-orb orb-one" aria-hidden="true" />
          <span className="soft-orb orb-two" aria-hidden="true" />
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-images">
          <div className="about-image-main">
            <Image
              src="/paola/paola-sobre.jpg"
              alt="Paola Milani durante uma atividade em seu consultório"
              fill
              sizes="(max-width: 860px) 84vw, 38vw"
              className="about-photo"
            />
          </div>
          <div className="about-seal" aria-hidden="true">
            <Image src="/paola/borboleta-clara.png" alt="" width={731} height={781} />
            <small>escuta • vínculo • cuidado</small>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">Olá, eu sou a Paola</p>
          <h2>Cuidar das emoções também é uma forma de <em>crescer.</em></h2>
          <p>
            Sou psicóloga clínica, formada pela Universidade Presbiteriana Mackenzie,
            e pedagoga pelo Claretiano. Trabalhar com crianças e adolescentes é algo
            que realmente amo.
          </p>
          <p>
            Me encanta acompanhar suas descobertas, auxiliar na compreensão das
            emoções e construir, junto com cada um, caminhos mais leves, seguros e
            possíveis.
          </p>
          <blockquote>
            “Quando aprendemos a entender o que sentimos, tudo começa a fazer mais sentido.”
          </blockquote>
        </div>
      </section>

      <section className="expertise" id="atendimento">
        <div className="section-shell expertise-shell">
          <div className="expertise-heading">
            <div>
              <p className="section-kicker">Como posso ajudar</p>
              <h2>Um olhar cuidadoso para cada fase.</h2>
            </div>
            <p>
              O acompanhamento é construído de forma individual, considerando a
              história, as necessidades e o ritmo de cada criança ou adolescente.
            </p>
          </div>

          <div className="care-grid">
            <article className="care-card featured">
              <span className="card-number">01</span>
              <h3>Psicologia infantojuvenil</h3>
              <p>Escuta e acolhimento para compreender emoções, comportamentos e desafios do desenvolvimento.</p>
            </article>
            <article className="care-card">
              <span className="card-number">02</span>
              <h3>Psicopedagogia</h3>
              <p>Um olhar integrado para aprendizagem, alfabetização, letramento e desenvolvimento emocional.</p>
            </article>
            <article className="care-card">
              <span className="card-number">03</span>
              <h3>Acompanhamento no TEA</h3>
              <p>Cuidado atento às singularidades, promovendo autonomia, expressão e possibilidades.</p>
            </article>
          </div>

          <div className="credentials">
            <p>Formações e pós-graduações</p>
            <ul>
              <li>Psicopedagogia</li>
              <li>Alfabetização e Letramento</li>
              <li>Clínica Analítico-Comportamental</li>
              <li>Transtorno do Espectro Autista</li>
              <li>Terapia Cognitivo-Comportamental</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="journey section-shell" id="como-funciona" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="section-kicker">Como funciona</p>
          <h2 id="journey-title">Um primeiro passo de cada vez.</h2>
          <p>O início é simples e cuidadoso, para que a família saiba o que esperar em cada etapa.</p>
        </div>
        <div className="journey-steps">
          <article>
            <span>01</span>
            <div>
              <h3>Primeiro contato</h3>
              <p>Você responde a um formulário breve e a mensagem organizada é aberta diretamente no WhatsApp.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Conversa inicial</h3>
              <p>A Paola conhece a necessidade da criança ou do adolescente e orienta sobre formato, disponibilidade e próximos passos.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Início do acompanhamento</h3>
              <p>O cuidado é construído de forma individual, com participação dos responsáveis quando for indicada.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="formats section-shell" aria-labelledby="formats-title">
        <div className="formats-heading">
          <p className="section-kicker">Modalidades</p>
          <h2 id="formats-title">Cuidado que encontra você.</h2>
        </div>
        <div className="format-list">
          <article>
            <span>01</span>
            <div><h3>Atendimento presencial</h3><p>Um ambiente acolhedor, pensado para favorecer vínculo, expressão e segurança.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>Atendimento on-line</h3><p>Acompanhamento com a mesma escuta e proximidade, onde você estiver.</p></div>
          </article>
        </div>
      </section>

      <section className="pre-contact" id="pre-contato">
        <div className="section-shell pre-contact-shell">
          <div className="pre-contact-heading">
            <div>
              <p className="section-kicker">Primeiro contato</p>
              <h2>Conte um pouquinho sobre o que você procura.</h2>
            </div>
            <p>
              Responda às perguntas abaixo para que a Paola receba sua mensagem de
              forma organizada e possa orientar os próximos passos.
            </p>
          </div>
          <PreContactForm />
          <aside className="emergency-note" aria-label="Aviso sobre urgências">
            <strong>Importante:</strong> este site e o WhatsApp não são canais de urgência ou emergência. Em uma situação de risco imediato, procure o serviço de emergência da sua região.
          </aside>
        </div>
      </section>

      <section className="faq section-shell" id="duvidas" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="section-kicker">Dúvidas frequentes</p>
          <h2 id="faq-title">Antes de começar, é natural ter perguntas.</h2>
          <p>Reunimos algumas respostas para deixar esse primeiro passo mais tranquilo.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>Para quem é o atendimento psicológico? <span>+</span></summary>
            <p>O acompanhamento é voltado a crianças e adolescentes. No primeiro contato, a Paola conversa com a família para compreender a necessidade e orientar o formato mais adequado.</p>
          </details>
          <details>
            <summary>Como funciona o primeiro encontro? <span>+</span></summary>
            <p>É um momento inicial de acolhimento e compreensão da demanda. A dinâmica pode variar conforme a idade e a necessidade de participação dos responsáveis.</p>
          </details>
          <details>
            <summary>Os responsáveis participam do processo? <span>+</span></summary>
            <p>Quando necessário, os responsáveis participam de conversas de orientação e acompanhamento. A forma dessa participação é combinada de acordo com cada caso.</p>
          </details>
          <details>
            <summary>Quanto tempo dura e com que frequência acontece? <span>+</span></summary>
            <p>A duração e a frequência são definidas após o contato inicial, considerando as necessidades da criança ou do adolescente e a orientação profissional.</p>
          </details>
          <details>
            <summary>O atendimento on-line é uma opção? <span>+</span></summary>
            <p>Sim. A possibilidade do formato on-line é avaliada considerando idade, contexto e condições para que o atendimento aconteça com privacidade e qualidade.</p>
          </details>
          <details>
            <summary>Como funciona a privacidade nas sessões? <span>+</span></summary>
            <p>O cuidado com a privacidade faz parte do processo terapêutico. Quando há participação dos responsáveis, as orientações são conduzidas preservando o espaço de confiança da criança ou do adolescente.</p>
          </details>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-photo">
          <Image
            src="/paola/paola-acolhimento.jpg"
            alt="Paola Milani sorrindo em um ambiente acolhedor"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
            className="contact-image"
          />
        </div>
        <div className="contact-copy">
          <p className="section-kicker">Vamos conversar?</p>
          <h2>Todo cuidado começa com um primeiro passo.</h2>
          <p>Se você sente que este pode ser o momento de buscar apoio, estou aqui para acolher e orientar sua família.</p>
          <a className="primary-cta light" href="#pre-contato">
            Iniciar primeiro contato <span aria-hidden="true">↑</span>
          </a>
          <small>WhatsApp: (11) 98106-4533</small>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio">
          <Image src="/paola/logo-paola.png" alt="Paola Milani Psicóloga" width={2001} height={599} />
        </a>
        <div className="footer-meta">
          <p>Psicologia infantojuvenil • Atendimento presencial e on-line</p>
          <a href="https://apollundev.com" target="_blank" rel="noopener noreferrer">
            Site criado por <strong>Apollun</strong>
          </a>
        </div>
        <div className="footer-links">
          <a href="/privacidade">Privacidade</a>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>

      <a className="floating-contact" href="#pre-contato" aria-label="Iniciar primeiro contato com Paola Milani">
        <Image src="/paola/borboleta-clara.png" alt="" width={731} height={781} aria-hidden="true" />
        <span>Falar com a Paola</span>
      </a>
    </main>
  );
}
