"use client";

import { useState } from "react";

export default function CadastroImovelForm() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    endereco: "",
    cidade: "",
    iptu: "",
    preco: "",
    quartos: "",
    banheiros: "",
    vaga: "",
    area: "",
    consultorEmail: "teste@gmail.com",
    images: [],
  });

  const [imagens, setImagens] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      setUrls([]); // Limpa as URLs de upload anteriores
      setError(""); // Limpa o erro
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    setUploading(true);
    setError("");

    if (files.length === 0) {
      setError("Por favor, selecione pelo menos uma imagem.");
      setUploading(false);
      return;
    }

    const res = await fetch("/api/imoveis", {
      method: "POST",
      body: JSON.stringify({
        nome: form.nome,
        descricao: form.descricao,
        endereco: form.endereco,
        area: Number(form.area),
        quartos: Number(form.quartos),
        cidade: form.cidade,
        banheiros: Number(form.banheiros),
        vaga: Number(form.vaga),
        preco: Number(form.preco),
        iptu: Number(form.iptu),
        consultorEmail: form.consultorEmail,
      }),
    });

    if (!res.ok) {
      alert("Erro ao cadastrar imóvel.");
      return; // Importante: interromper o fluxo se o primeiro fetch falhar
    }

    const data = await res.json();
    const id = data.id;

    try {
      // 1. Converte cada arquivo para Base64 de forma assíncrona
      const base64Images = await Promise.all(
        files.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (err) => reject(err);
          });
        })
      );

      // 2. Envia os Base64 para a API Route interna
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, base64: base64Images }),
      });

      if (!res.ok) {
        throw new Error("Erro no upload para a API.");
      }

      const data = await res.json();
      setUrls(data.urls);
      alert("Upload realizado com sucesso!");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erro desconhecido ao fazer o upload.");
    } finally {
      setUploading(false);
    }

    alert("Imóvel cadastrado com sucesso!");
    // Resetar o formulário e as imagens após o envio bem-sucedido
    setForm({
      nome: "",
      descricao: "",
      endereco: "",
      cidade: "",
      iptu: "",
      preco: "",
      quartos: "",
      banheiros: "",
      vaga: "",
      area: "",
      consultorEmail: "teste@gmail.com",
      images: [],
    });
    setImagens([]);
  };

  return (
    <section className="text-black max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Cadastrar Novo Imóvel</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="nome"
          placeholder="Título do Imóvel"
          value={form.nome}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 h-24 resize-none"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="preco"
            placeholder="Preço"
            value={form.preco}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            type="number"
            name="area"
            placeholder="Área (m²)"
            value={form.area}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="number"
            name="quartos"
            placeholder="Quartos"
            value={form.quartos}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="number"
            name="banheiros"
            placeholder="Banheiros"
            value={form.banheiros}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="number"
            name="vaga"
            placeholder="Vagas de Garagem"
            value={form.vaga}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <input
          type="text"
          name="endereco"
          placeholder="Endereço completo"
          value={form.endereco}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <div>
          <label className="block text-sm font-medium mb-2">Imagens do Imóvel</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
          {imagens.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {imagens.map((img, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {img.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={uploading || files.length === 0}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Salvar Imóvel
        </button>
      </form>
    </section>
  );
}