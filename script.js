// Seleção de Elementos da Interface (DOM)
const btnSucesso = document.getElementById('btnSucesso');
const btnErro = document.getElementById('btnErro');
const httpStatusSpan = document.getElementById('httpStatus');
const txtPressao = document.getElementById('txtPressao');
const badgeStatus = document.getElementById('badgeStatus');
const cardIndicador = document.getElementById('cardIndicador');
const alertaSeguranca = document.getElementById('alertaSeguranca');
const alertaIcone = document.getElementById('alertaIcone');
const alertaMensagem = document.getElementById('alertaMensagem');

// Endpoints do JSONPlaceholder para Testes de Rotas (Slide 8)
const URL_SUCESSO = 'https://jsonplaceholder.typicode.com/posts/1';
const URL_ERRO = 'https://jsonplaceholder.typicode.com/posts/invalid-route-error-code';

// Valores de Telemetria Industrial
const PRESSAO_ESTAVEL = "2450.5";
const PRESSAO_ZERADA = "0.0";

// Controla e renderiza os estados do supervisório da Prensa-H5

function requisitarDadosTelemetria(urlAlvo) {
    // Estado Visual de Carregamento de Pacotes
    httpStatusSpan.textContent = "Carregando...";
    httpStatusSpan.className = "text-warning fw-bold";

    fetch(urlAlvo)
        .then(response => {
            // Atualiza o display com o código HTTP retornado
            httpStatusSpan.textContent = `${response.status} ${response.statusText || (response.ok ? 'OK' : 'NOT FOUND')}`;
            
            if (!response.ok) {
                throw new Error(`Falha de comunicação HTTP: Status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // === CENÁRIO DE SUCESSO (Sistema Online / 200 OK) ===
            badgeStatus.textContent = "Online";
            badgeStatus.className = "badge bg-success text-uppercase font-digital";
            
            // Injeta o valor e aplica o Efeito de Brilho (Glow Verde)
            txtPressao.innerHTML = `${PRESSAO_ESTAVEL} <span class="h4 text-success font-digital">PSI</span>`;
            txtPressao.className = "display-1 fw-bold my-3 font-digital transition-all glow-verde";
            
            // Configurações do Painel e Alertas
            cardIndicador.className = "card shadow-sm h-100 border-start border-4 estado-sucesso";
            alertaSeguranca.className = "alert alert-success border m-0 mt-3 d-flex align-items-center justify-content-center gap-2 transition-all";
            alertaIcone.className = "fas fa-check-circle text-success fs-4";
            alertaMensagem.textContent = "SISTEMA OPERACIONAL: Transmissão estável.";
            
            httpStatusSpan.className = "text-success fw-bold";
        })
        .catch(error => {
            // === CENÁRIO DE ERRO (Falha de Conexão ou Rotas Inexistentes) ===
            badgeStatus.textContent = "Falha Crítica";
            badgeStatus.className = "badge bg-danger text-uppercase font-digital";
            
            // Injeta o valor zerado e aplica o Efeito de Brilho (Glow Vermelho)
            txtPressao.innerHTML = `${PRESSAO_ZERADA} <span class="h4 text-danger font-digital">PSI</span>`;
            txtPressao.className = "display-1 fw-bold my-3 font-digital transition-all glow-vermelho";
            
            // Configurações do Painel de Emergência
            cardIndicador.className = "card shadow-sm h-100 border-start border-4 estado-perigo";
            alertaSeguranca.className = "alert alert-danger border m-0 mt-3 d-flex align-items-center justify-content-center gap-2 transition-all";
            alertaIcone.className = "fas fa-exclamation-triangle text-danger fs-4";
            alertaMensagem.textContent = "ALERTA DE SEGURANÇA: Sensor Inacessível!";
            
            httpStatusSpan.className = "text-danger fw-bold";
            console.warn(error.message);
        });
}

// Configuração dos Gatilhos de Eventos dos Botões do Operador
btnSucesso.addEventListener('click', () => requisitarDadosTelemetria(URL_SUCESSO));
btnErro.addEventListener('click', () => requisitarDadosTelemetria(URL_ERRO));
