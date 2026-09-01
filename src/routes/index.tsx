import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Nayara Justimiano | Psicóloga Clínica e Hospitalar" },
      {
        name: "description",
        content:
          "Psicoterapia acolhedora para ansiedade, TDAH e autismo. Dra. Nayara Justimiano, Psicóloga CRP 06/162278. Agende sua consulta pelo WhatsApp.",
      },
      { property: "og:title", content: "Dra. Nayara Justimiano | Psicologia" },
      {
        property: "og:description",
        content:
          "Um espaço acolhedor e seguro para cuidar da sua saúde mental. Atendimento especializado em ansiedade, TDAH e autismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MENU = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const DORES = [
  "Ansiedade constante e pensamentos acelerados",
  "Dificuldade de foco e organização (Sintomas de TDAH)",
  "Sensação de exaustão e sobrecarga emocional diária",
  "Dificuldade em estabelecer limites e focar no autocuidado",
];

const ESPECIALIDADES = [
  {
    title: "Psicoterapia para Ansiedade e TDAH",
    description:
      "Estratégias práticas e acolhimento para lidar com a sobrecarga emocional, melhorar o foco e reduzir os impactos da ansiedade na rotina.",
  },
  {
    title: "Suporte no Autismo (ABA)",
    description:
      "Compreensão profunda de como cada pessoa funciona, indo muito além do diagnóstico para oferecer suporte real, respeitoso e focado no desenvolvimento.",
  },
  {
    title: "Autocuidado e Regulação Emocional",
    description:
      "Um espaço para você aprender a olhar para si mesma com mais amor, estabelecer limites saudáveis e lidar com os dias difíceis.",
  },
];

const BENEFICIOS = [
  {
    title: "Autoconhecimento Profundo",
    description:
      "Entenda seus padrões de comportamento e tome decisões mais alinhadas com a sua verdadeira essência.",
  },
  {
    title: "Alívio da Sobrecarga",
    description:
      "Desenvolva ferramentas práticas para lidar com o estresse, a ansiedade e as pressões do dia a dia.",
  },
  {
    title: "Relacionamentos Mais Saudáveis",
    description:
      "Melhore sua comunicação, aprenda a dizer 'não' quando necessário e construa vínculos mais fortes.",
  },
];

const JORNADA = [
  {
    title: "1. Contato via WhatsApp",
    description:
      "Você clica no botão de agendamento e fala diretamente com o suporte para tirar dúvidas e conhecer a disponibilidade de horários.",
  },
  {
    title: "2. Agendamento da Sessão",
    description:
      "Escolhemos o melhor horário para o seu atendimento, garantindo flexibilidade para a sua rotina.",
  },
  {
    title: "3. O seu Espaço Seguro",
    description:
      "Iniciamos os atendimentos em um ambiente totalmente confidencial, onde você será ouvida de verdade por uma hora inteira.",
  },
];

const FAQ = [
  {
    q: "O atendimento é apenas para quem tem diagnóstico de TDAH ou Autismo?",
    a: "Não. Atendo qualquer pessoa que deseje cuidar da saúde mental — com ou sem diagnóstico. O suporte em TDAH e autismo é uma especialidade, não uma exigência.",
  },
  {
    q: "Como funciona a primeira sessão de terapia?",
    a: "A primeira sessão é um momento de acolhimento e escuta. Conversamos sobre a sua história, suas queixas atuais e definimos juntas os objetivos do processo terapêutico.",
  },
  {
    q: "Qual a duração de cada consulta?",
    a: "Cada sessão tem duração de aproximadamente 50 a 60 minutos, com frequência ajustada à sua necessidade.",
  },
  {
    q: "Você emite recibo para reembolso de plano de saúde?",
    a: "Sim. Emito recibo com CRP e todos os dados necessários para solicitação de reembolso junto ao seu plano de saúde.",
  },
];

function Reveal({
  children,
  variant = "reveal",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "reveal" | "reveal-left" | "reveal-right";
  delay?: number;
  className?: string;
}) {
  return (
    <div data-reveal data-reveal-delay={delay} className={`${variant} ${className}`}>
      {children}
    </div>
  );
}

function Index() {
  useScrollReveal();
  useParallax("[data-parallax]", 0.12);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
          scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:py-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Logotipo Dra. Nayara Justimiano"
              className="h-11 w-11 shrink-0 rounded-full object-cover"
              width={44}
              height={44}
            />
            <span className="truncate font-display text-base leading-tight md:text-lg">
              Dra. Nayara Justimiano
              <span className="block text-[11px] font-body tracking-widest text-muted-foreground">
                PSICOLOGIA · CRP 06/162278
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {MENU.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="relative text-sm text-foreground/80 transition-colors duration-300 hover:text-rose-strong after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-rose-strong after:transition-transform after:duration-500 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {m.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
              Agendar Minha Consulta
            </a>
          </nav>

          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary lg:hidden"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background px-5 pb-5 pt-3 lg:hidden">
            <nav className="flex flex-col gap-3">
              {MENU.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm text-foreground/80"
                >
                  {m.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2 text-sm"
              >
                Agendar Minha Consulta
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{ background: "var(--gradient-warm)" }}
      >
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-40 blur-3xl float-soft"
          style={{ background: "var(--rose-soft)" }} />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-30 blur-3xl float-soft"
          style={{ background: "var(--sky-soft)" }} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal variant="reveal-left">
            <p className="mb-4 inline-block rounded-full bg-card px-4 py-1.5 text-xs tracking-[0.2em] text-olive">
              PSICOLOGIA CLÍNICA E HOSPITALAR
            </p>
            <h1 className="font-display text-4xl leading-[1.1] md:text-6xl">
              Cuide da sua <span className="text-rose-strong">Saúde Mental</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Um espaço acolhedor e seguro para você se reconectar consigo mesma. Porque uma
              mente bem cuidada muda toda a sua vida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Agendar pelo WhatsApp
              </a>
              <a href="#sobre" className="btn-olive" style={{ background: "transparent", color: "var(--olive)", border: "1px solid var(--olive)" }}>
                Conheça a Dra. Nayara
              </a>
            </div>
          </Reveal>

          <Reveal variant="reveal-right" delay={150}>
            <div className="relative mx-auto max-w-sm">
              <img
                data-parallax
                src="/images/hero.jpg"
                alt="Dra. Nayara Justimiano, psicóloga clínica, em seu consultório"
                width={574}
                height={1024}
                className="relative z-10 w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-4xl">
              Você tem se sentido sobrecarregada ultimamente?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-foreground/75">
              É comum ignorarmos nossos próprios limites até que o corpo e a mente peçam socorro.
              Não se compare, o que você vê nas redes não é a vida inteira.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {DORES.map((d, i) => (
              <Reveal key={d} delay={i * 120}>
                <div className="surface-card flex h-full items-start gap-4 p-6">
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: "var(--rose-strong)" }}
                  />
                  <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PONTE / SOLUÇÃO */}
      <section className="py-20 md:py-28" style={{ background: "var(--sand)" }}>
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Não precisa ser difícil o tempo todo.
              <span className="mt-2 block text-rose-strong">
                A terapia é o seu espaço de recomeço.
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              No processo terapêutico, você encontra um ambiente livre de julgamentos para
              entender suas dores, desenvolver ferramentas de enfrentamento e reconquistar sua
              qualidade de vida com leveza e respeito ao seu tempo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-9"
            >
              Quero iniciar meu tratamento
            </a>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="reveal-left">
            <div className="relative">
              <div
                className="absolute -bottom-5 -left-5 h-40 w-40 rounded-[2rem] opacity-70"
                style={{ background: "var(--sky-soft)" }}
              />
              <img
                src="/images/sobre.jpg"
                alt="Dra. Nayara Justimiano sentada em seu consultório de psicologia"
                width={1296}
                height={1920}
                className="relative z-10 w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </Reveal>

          <Reveal variant="reveal-right" delay={120}>
            <p className="text-xs tracking-[0.25em] text-olive">QUEM SOU</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Dra. Nayara Justimiano</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                Acredito que cada pessoa carrega batalhas que não aparecem nas fotos. Meu papel é
                caminhar ao seu lado nessa jornada, oferecendo uma escuta ativa e acolhedora.
              </p>
              <p>
                Sou Psicóloga Clínica e Hospitalar, com Pós-graduação em Psicologia Clínica e
                Hospitalar, e Pós-graduação em ABA (Autismo e Deficiência Intelectual). Atualmente,
                sigo aprimorando meu trabalho como Graduanda em Psicomotricidade.
              </p>
              <p>
                Minha abordagem é focada no acolhimento genuíno, oferecendo suporte especializado
                para quem lida com ansiedade, TDAH e para pessoas no espectro autista, respeitando
                a neurodiversidade e a individualidade de cada paciente.
              </p>
              <p className="text-sm tracking-wide text-olive">Psicóloga | CRP 06/162278</p>
            </div>
            <p className="mt-7 font-display text-xl text-rose-strong">
              Dê o primeiro passo para cuidar de quem mais importa: você.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              Falar com a Dra. Nayara
            </a>
          </Reveal>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              Conheça meu espaço e minha abordagem
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/75">
              Aperte o play e saiba como a psicoterapia pode transformar a sua rotina e trazer mais
              leveza para os seus dias.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="relative mt-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-[2rem] border border-border"
              style={{ background: "var(--sand)" }}
            >
              <img
                src="/images/hero.jpg"
                alt="Prévia do vídeo de apresentação do consultório"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-45"
              />
              <button
                aria-label="Reproduzir vídeo de apresentação"
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full text-2xl shadow-[var(--shadow-soft)] transition-transform duration-500 hover:scale-110"
                style={{ background: "var(--gradient-rose)", color: "#fff" }}
              >
                ▶
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-4xl">Áreas de Atendimento</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-foreground/75">
              Suporte especializado, humanizado e focado na sua qualidade de vida.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {ESPECIALIDADES.map((e, i) => (
              <Reveal key={e.title} delay={i * 160}>
                <div className="surface-card h-full p-8">
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg"
                    style={{ background: "var(--rose-soft)", color: "var(--olive)" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-display text-xl leading-snug">{e.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/75">{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 md:py-28" style={{ background: "var(--sand)" }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-4xl">
              Por que investir na sua Saúde Mental?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-foreground/75">
              Os benefícios da psicoterapia refletem em todas as áreas da sua vida.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.title} delay={i * 160} variant={i === 1 ? "reveal" : i === 0 ? "reveal-left" : "reveal-right"}>
                <div className="surface-card h-full p-8">
                  <h3 className="font-display text-xl text-rose-strong">{b.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/75">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-4xl">
              Como funciona o atendimento?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-foreground/75">
              Um processo simples, seguro e focado em você desde o primeiro contato.
            </p>
          </Reveal>
          <div className="mt-14 space-y-6">
            {JORNADA.map((s, i) => (
              <Reveal key={s.title} delay={i * 180} variant={i % 2 === 0 ? "reveal-left" : "reveal-right"}>
                <div className="surface-card grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 p-7">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display"
                    style={{ background: "var(--olive)", color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl md:text-4xl">Dúvidas Frequentes</h2>
            <p className="mt-4 text-center text-foreground/75">
              Ainda não tem certeza? Veja as perguntas mais comuns de novos pacientes:
            </p>
          </Reveal>
          <div className="mt-12 space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 120}>
                <div className="surface-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6 text-left"
                  >
                    <span className="min-w-0 font-display text-base md:text-lg">{item.q}</span>
                    <span
                      className="shrink-0 text-xl transition-transform duration-500"
                      style={{
                        color: "var(--rose-strong)",
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-700 ease-out"
                    style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/75">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO / FOOTER */}
      <footer id="contato" className="py-20 md:py-28" style={{ background: "var(--olive)" }}>
        <div className="mx-auto max-w-4xl px-5 text-center" style={{ color: "#FFFFFF" }}>
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              Nunca é tarde para se olhar com amor.
            </h2>
            <p className="mx-auto mt-5 max-w-xl opacity-90">
              Não deixe seu bem-estar para depois. Agende seu horário hoje mesmo.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary mt-9">
              Agendar pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 grid gap-6 border-t border-white/20 pt-10 text-sm sm:grid-cols-3">
              <div>
                <p className="opacity-70">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-1 block">
                  +55 19 98430-3943
                </a>
              </div>
              <div>
                <p className="opacity-70">E-mail</p>
                <a href="mailto:contato@nayjustimiano.com.br" className="mt-1 block break-all">
                  contato@nayjustimiano.com.br
                </a>
              </div>
              <div>
                <p className="opacity-70">Instagram</p>
                <a
                  href="https://www.instagram.com/nayjustimiano_psi/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block"
                >
                  @nayjustimiano_psi
                </a>
              </div>
            </div>
            <p className="mt-10 text-xs opacity-70">
              Atendimento Especializado · Dra. Nayara Justimiano · Psicóloga CRP 06/162278
            </p>
          </Reveal>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
