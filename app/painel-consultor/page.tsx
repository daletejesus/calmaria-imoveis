'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function PainelConsultor() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState<{
    nome: string;
    descricao: string;
    endereco: string;
    area: string;
    quartos: string;
    banheiros: string;
    vaga: string;
    preco: string;
    iptu: string;
    imagem: File | null;
    consultorEmail: string;
  }>({
    nome: '',
    descricao: '',
    endereco: '',
    area: '',
    quartos: '',
    banheiros: '',
    vaga: '',
    preco: '',
    iptu: '',
    imagem: null,
    consultorEmail: '',
  });

  useEffect(() => {
    if (session?.user?.email) {
      setFormData(prev => ({ ...prev, consultorEmail: session.user.email! }));
    }
  }, [session]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, imagem: e.target.files![0] }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    const res = await fetch('/api/imoveis', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      alert('Imóvel cadastrado com sucesso!');
      setFormData({
        nome: '',
        descricao: '',
        endereco: '',
        area: '',
        quartos: '',
        banheiros: '',
        vaga: '',
        preco: '',
        iptu: '',
        imagem: null,
        consultorEmail: session?.user?.email || '',
      });
    } else {
      const result = await res.json();
      alert('Erro ao cadastrar imóvel: ' + (result.error || 'Erro desconhecido.'));
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Painel do Consultor</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nome"
              placeholder="Título do imóvel"
              value={formData.nome}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              step="0.01"
              name="area"
              placeholder="Área (m²)"
              value={formData.area}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              name="quartos"
              placeholder="Quartos"
              value={formData.quartos}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              name="banheiros"
              placeholder="Banheiros"
              value={formData.banheiros}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              name="vaga"
              placeholder="Vagas de garagem"
              value={formData.vaga}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              step="0.01"
              name="preco"
              placeholder="Preço"
              value={formData.preco}
              onChange={handleChange}
              required
              className="input-style"
            />
            <input
              type="number"
              step="0.01"
              name="iptu"
              placeholder="Valor do IPTU"
              value={formData.iptu}
              onChange={handleChange}
              required
              className="input-style"
            />
          </div>

          <textarea
            name="descricao"
            placeholder="Descrição"
            value={formData.descricao}
            onChange={handleChange}
            required
            className="input-style h-24 resize-none"
          ></textarea>

          <input
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
