"use client"

import { useEffect, useState } from 'react';

// Define a interface para as propriedades do botão
interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

// Componente do botão de compartilhamento
export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [isShareSupported, setIsShareSupported] = useState(false);

  // Usa useEffect para verificar o suporte à API no lado do cliente
  useEffect(() => {
    // navigator.share só existe no navegador, então a verificação typeof window !== 'undefined'
    // garante que o código não será executado no servidor.
    if (typeof window !== 'undefined') {
      setIsShareSupported(true);
    }
  }, []);

  // Função para lidar com o clique no botão
  const handleShare = async () => {
    // Se a API for suportada, executa o compartilhamento
    if (isShareSupported) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log('Conteúdo compartilhado com sucesso!');
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    }
  };

  // Se a API não for suportada, o componente não renderiza nada
  if (!isShareSupported) {
    return null;
  }

  return (
    <button
      onClick={handleShare}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
    >
      Compartilhar
    </button>
  );
}