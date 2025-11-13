<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meia Maratona 21K - Ross Campeã!</title>
    <!-- Carrega o Tailwind CSS para garantir os estilos em qualquer ambiente -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Define a fonte Inter (padrão) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Classe para a animação do emoji */
        @keyframes bounce-animation {
            0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
            50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        .animate-bounce-custom {
            animation: bounce-animation 1s infinite;
        }
    </style>
</head>
<body class="bg-gray-900">

    <div id="app" class="min-h-screen flex items-center justify-center p-4">
        <!-- Conteúdo será injetado aqui -->
    </div>

    <script>
        const APP_STATE = {
            status: 0, // 0: Aguardando, 1: Sucesso (Ross), 2: Erro (Outros)
            runningEmoji: '🏃‍♀️',
            successMessage: "🎉 ROSS! VENCEDORA ABSOLUTA! 🎉",
            errorMessage: "🚨 ERRO 404: OPÇÃO ERRADA! 🚨",
            jokeMessage: "Sinto muito, mas essa opção não existe. Tente a única correta! Afinal, só há uma campeã em Jampa! 😉",
            intervalId: null
        };

        const appContainer = document.getElementById('app');

        // --- Funções de Manipulação de Estado ---

        function handleRossClick() {
            APP_STATE.status = 1;
            render();
            animateRoss();
        }

        function handleOutrosClick() {
            APP_STATE.status = 2;
            render();
        }
        
        function resetStatus() {
            APP_STATE.status = 0;
            APP_STATE.runningEmoji = '🏃‍♀️';
            if (APP_STATE.intervalId) {
                clearInterval(APP_STATE.intervalId);
            }
            render();
        }

        // --- Animação ---

        function animateRoss() {
            const emojis = ['🏃‍♀️', '🥇', '🏆', '💖'];
            let index = 0;
            APP_STATE.intervalId = setInterval(() => {
                APP_STATE.runningEmoji = emojis[index % emojis.length];
                document.getElementById('running-emoji').textContent = APP_STATE.runningEmoji;
                index++;
                if (index === 10) {
                    clearInterval(APP_STATE.intervalId);
                    APP_STATE.intervalId = null;
                }
            }, 400);
        }

        // --- Renderização de Conteúdo ---

        function renderHome() {
            return `
                <h1 class="text-3xl sm:text-5xl font-extrabold text-white text-center mb-10 tracking-tight">
                    Quem vai ser a melhor meia maratonista de Jampa?
                </h1>
                <div class="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                    
                    <button onclick="handleRossClick()"
                        class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-400">
                        ROSS 🥇
                    </button>

                    <button onclick="handleOutrosClick()"
                        class="w-full bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold py-4 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-600">
                        OUTROS 🤪
                    </button>
                </div>
                <p class="mt-8 text-sm text-gray-400">
                    (Ps: Jampa = João Pessoa. É a primeira dela, vamos dar uma força!)
                </p>
            `;
        }

        function renderSuccess() {
            return `
                <div class="flex flex-col items-center justify-center text-center">
                    <div id="running-emoji" class="text-8xl mb-8 animate-bounce-custom">
                        ${APP_STATE.runningEmoji}
                    </div>
                    <h2 class="text-4xl sm:text-6xl font-black text-green-400 mb-4 tracking-tighter">
                        ${APP_STATE.successMessage}
                    </h2>
                    <p class="text-xl text-white font-semibold">
                        Sério, você é a mais rápida! Boa sorte na sua primeira meia maratona, estou na torcida!
                    </p>
                    
                    <button onclick="resetStatus()"
                        class="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 active:scale-95">
                        Votar Novamente (Se Atrever!)
                    </button>
                </div>
            `;
        }

        function renderError() {
            return `
                <div class="flex flex-col items-center justify-center text-center p-6 bg-red-900/40 border-l-4 border-red-500 rounded-lg shadow-2xl">
                    <h2 class="text-4xl sm:text-5xl font-black text-red-400 mb-4 tracking-tighter">
                        ${APP_STATE.errorMessage}
                    </h2>
                    <p class="text-lg text-white font-medium mb-6">
                        ${APP_STATE.jokeMessage}
                    </p>
                    
                    <button onclick="resetStatus()"
                        class="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 active:scale-95">
                        OK, Entendi o Recado...
                    </button>
                </div>
            `;
        }

        // Função principal de renderização
        function render() {
            let content;
            if (APP_STATE.status === 1) {
                content = renderSuccess();
            } else if (APP_STATE.status === 2) {
                content = renderError();
            } else {
                content = renderHome();
            }

            // Injeta o conteúdo no container
            appContainer.innerHTML = `
                <div class="w-full max-w-2xl bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl flex flex-col items-center border-t-8 border-yellow-400/80">
                    <h1 class="text-xl sm:text-2xl font-light text-yellow-400 mb-6">
                        Meia Maratona 21K - Jampa 🏃‍♀️
                    </h1>
                    ${content}
                </div>
            `;
        }

        // Inicia a aplicação
        window.onload = render;

    </script>
</body>
</html>