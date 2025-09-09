"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      const data = await res.json();
      setSuccess("Mensagem enviada com sucesso!");
      setForm({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
      console.log("Resposta da API:", data);
    } catch (err) {
      console.error(err);
      setError("Não foi possível enviar sua mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Texto à esquerda */}
      <div className="flex-1">
        <p className="text-gray-900 text-sm mb-2">Contato</p>
        <h2 className="text-4xl text-black font-bold leading-snug mb-4">
          Fale conosco agora!
        </h2>
        <p className="text-gray-600 max-w-md text-xl">
          Entre em contato e receba nosso atendimento pelo whatsapp!
        </p>
      </div>

      {/* Formulário à direita */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-neutral-900 text-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white px-2 py-2"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="You@Example.com"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white px-2 py-2"
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="+001253533"
          value={form.telefone}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white px-2 py-2"
        />
        <textarea
          name="mensagem"
          placeholder="Write A Message..."
          value={form.mensagem}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white px-2 py-2 h-24 resize-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-medium py-2 rounded-full flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Submit →"}
        </button>

        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </section>
  );
}
