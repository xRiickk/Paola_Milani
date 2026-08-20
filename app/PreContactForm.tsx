"use client";

import { FormEvent, useState } from "react";

const phone = "5511981064533";

export default function PreContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, Paola! Vim pelo seu site e gostaria de receber informações.",
      "",
      `*Nome:* ${form.get("nome")}`,
      `*Idade de quem receberá o atendimento:* ${form.get("idade")} anos`,
      `*Quem está entrando em contato:* ${form.get("responsavel")}`,
      `*Interesse:* ${form.get("servico")}`,
      `*Modalidade preferida:* ${form.get("modalidade")}`,
      `*Melhor período:* ${form.get("periodo")}`,
      form.get("mensagem") ? `*Como posso ajudar:* ${form.get("mensagem")}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return (
    <form className="pre-contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Seu nome</span>
          <input name="nome" type="text" autoComplete="name" placeholder="Como podemos te chamar?" required />
        </label>

        <label>
          <span>Idade de quem receberá o atendimento</span>
          <input name="idade" type="number" min="1" max="99" inputMode="numeric" placeholder="Ex.: 12" required />
        </label>

        <label>
          <span>Quem está entrando em contato?</span>
          <select name="responsavel" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option>Sou mãe, pai ou responsável</option>
            <option>Sou adolescente e busco atendimento</option>
            <option>Sou familiar</option>
            <option>Sou profissional e gostaria de encaminhar</option>
          </select>
        </label>

        <label>
          <span>Sobre qual serviço deseja informações?</span>
          <select name="servico" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option>Psicologia infantojuvenil</option>
            <option>Psicopedagogia</option>
            <option>Acompanhamento relacionado ao TEA</option>
            <option>Orientação para responsáveis</option>
            <option>Ainda não sei qual atendimento procurar</option>
          </select>
        </label>

        <label>
          <span>Modalidade de preferência</span>
          <select name="modalidade" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option>Presencial</option>
            <option>On-line</option>
            <option>Sem preferência</option>
          </select>
        </label>

        <label>
          <span>Melhor período para atendimento</span>
          <select name="periodo" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Noite</option>
            <option>A combinar</option>
          </select>
        </label>
      </div>

      <label className="full-field">
        <span>Em poucas palavras, como a Paola pode ajudar? <small>(opcional)</small></span>
        <textarea
          name="mensagem"
          rows={4}
          maxLength={300}
          placeholder="Compartilhe apenas o necessário para este primeiro contato."
        />
      </label>

      <label className="consent-field">
        <input type="checkbox" required />
        <span>
          Entendo que estas informações serão enviadas à Paola pelo WhatsApp e li o{" "}
          <a href="/privacidade">aviso de privacidade</a>.
        </span>
      </label>

      <div className="form-footer">
        <p>Para preservar sua privacidade, não inclua diagnósticos, documentos ou informações muito sensíveis neste formulário.</p>
        <button type="submit" disabled={sending}>
          {sending ? "Preparando mensagem…" : "Continuar no WhatsApp"} <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
