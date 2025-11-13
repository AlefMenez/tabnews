import React, { useState } from 'react';

// Componente principal que será exportado
const MeiaMaratonaRoss = () => {
  // 0: Aguardando voto, 1: Voto em Ross (Sucesso), 2: Voto em Outros (Erro/Piada)
  const [status, setStatus] = useState(0);
  // Controla o emoji que vai correr na tela quando Ross ganha
  const [runningEmoji, setRunningEmoji] = useState('🏃‍♀️');
  
  // Mensagens
  const successMessage = "🎉 ROSS! VENCEDORA ABSOLUTA! 🎉";
  const errorMessage = "🚨 ERRO 404: OPÇÃO ERRADA! 🚨";
  const jokeMessage = "Sinto muito, mas essa opção não existe. Tente a única correta! Afinal, só há uma campeã em Jampa! 😉";

  // Função para lidar com o voto na Ross
  const handleRossClick = () => {
    setStatus(1);
    // Simula a animação trocando o emoji
    const emojis = ['🏃‍♀️', '🥇', '🏆', '💖'];
    let index = 0;
    const interval = setInterval(() => {
      setRunningEmoji(emojis[index % emojis.length]);
      index++;
      if (index === 10) {
        clearInterval(interval);
      }
    }, 400);
  };

  // Função para lidar com o voto em Outros
  const handleOutrosClick = () => {
    // Aqui forçamos o erro/piada
    setStatus(2);
  };

  // Renderiza os botões e a pergunta principal
  const renderHome = () => (
    <>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-10 tracking-tight">
        Quem vai ser a melhor meia maratonista de Jampa?
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
        
        {/* Botão Ross (Opção Certa) */}
        <button
          onClick={handleRossClick}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-400"
        >
          ROSS 🥇
        </button>

        {/* Botão Outros (Opção Errada) */}
        <button
          onClick={handleOutrosClick}
          className="w-full bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold py-4 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-600"
        >
          OUTROS 🤪
        </button>
      </div>
      <p className="mt-8 text-sm text-gray-400">
        (Ps: Jampa = João Pessoa. É a primeira dela, vamos dar uma força!)
      </p>
    </>
  );

  // Renderiza a tela de Sucesso (Ross)
  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-8xl mb-8 animate-bounce transition duration-500">
        {runningEmoji}
      </div>
      <h2 className="text-4xl sm:text-6xl font-black text-green-400 mb-4 tracking-tighter">
        {successMessage}
      </h2>
      <p className="text-xl text-white font-semibold">
        Sério, você é a mais rápida! Boa sorte na sua primeira meia maratona, estou na torcida!
      </p>
      
      {/* Botão para resetar o estado */}
      <button
        onClick={() => setStatus(0)}
        className="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 active:scale-95"
      >
        Votar Novamente (Se Atrever!)
      </button>
    </div>
  );

  // Renderiza a tela de Erro (Outros)
  const renderError = () => (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-red-900/40 border-l-4 border-red-500 rounded-lg shadow-2xl">
      <h2 className="text-4xl sm:text-5xl font-black text-red-400 mb-4 tracking-tighter">
        {errorMessage}
      </h2>
      <p className="text-lg text-white font-medium mb-6">
        {jokeMessage}
      </p>
      
      {/* Botão para resetar o estado */}
      <button
        onClick={() => setStatus(0)}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 active:scale-95"
      >
        OK, Entendi o Recado...
      </button>
    </div>
  );

  // Define o conteúdo a ser renderizado com base no status
  let content;
  if (status === 1) {
    content = renderSuccess();
  } else if (status === 2) {
    content = renderError();
  } else {
    content = renderHome();
  }

  return (
    // Container principal com Tailwind e estilos de fundo
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      
      {/* Card central, responsivo e com design visual */}
      <div className="w-full max-w-2xl bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center border-t-8 border-yellow-400/80">
        
        <h1 className="text-xl sm:text-2xl font-light text-yellow-400 mb-6">
            Meia Maratona 21K - Jampa 🏃‍♀️
        </h1>

        {content}

      </div>
    </div>
  );
};

export default MeiaMaratonaRoss;