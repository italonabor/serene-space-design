import { useState } from "react";

const DOCTOR_EMAIL = "contato@nayjustimiano.com.br";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const corpo = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      "",
      mensagem,
    ].join("\n");
    window.location.href = `mailto:${DOCTOR_EMAIL}?subject=${encodeURIComponent(
      `Contato pelo site — ${nome}`,
    )}&body=${encodeURIComponent(corpo)}`;
    setEnviado(true);
  }

  const inputClass =
    "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[var(--olive)]";

  return (
    <form onSubmit={handleSubmit} className="surface-card mx-auto mt-10 max-w-2xl p-7 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] text-foreground/70">NOME</span>
          <input
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={inputClass}
            placeholder="Seu nome completo"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] text-foreground/70">TELEFONE</span>
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className={inputClass}
            placeholder="(19) 90000-0000"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-xs tracking-[0.14em] text-foreground/70">E-MAIL</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="voce@email.com"
        />
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-xs tracking-[0.14em] text-foreground/70">MENSAGEM</span>
        <textarea
          required
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Conte um pouco sobre o que você está buscando."
        />
      </label>

      <button type="submit" className="btn-primary mt-6 w-full">
        Enviar mensagem
      </button>

      {enviado && (
        <p className="mt-4 text-center text-sm text-foreground/70">
          Abrimos seu aplicativo de e-mail com a mensagem pronta para {DOCTOR_EMAIL}.
        </p>
      )}
    </form>
  );
}
