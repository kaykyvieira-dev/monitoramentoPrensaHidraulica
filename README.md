# 🛠️ Sistema de Monitoramento de Pressão Hidráulica (Prensa-H5)

Este projeto foi desenvolvido como parte da **Atividade Prática** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas. Trata-se de uma interface de supervisório industrial (IHM/SCADA) para o monitoramento contínuo da pressão interna da prensa hidráulica **Prensa-H5**, com validação em tempo real de requisições assíncronas e códigos de status HTTP.

---

## 📺 Visão Geral e Recursos

O painel foi projetado seguindo padrões estritos de engenharia de software para salas de controle e interfaces de operação industrial:

*   **Estética Anti-Fadiga Visual:** Interface com paleta de cores predominantemente escuras (`#1a1a1a`), reduzindo o cansaço do operador em turnos longos.
*   **Tipografia LED Digital:** Utilização da fonte do Google Fonts `'Orbitron'`, simulando perfeitamente mostradores físicos de painéis elétricos e CLPs.
*   **Efeito Luminoso Dinâmico (Glow):** O valor numérico de telemetria emite brilho neon verde quando em funcionamento perfeito e brilho neon vermelho em caso de interrupção ou falha.
*   **Validação de Status HTTP (Slide 8):** Mecanismo de captura e tratamento de códigos de resposta (Ex: `200 OK` vs `404 Not Found`) utilizando a Fetch API.
*   **Responsividade Industrial:** Grade estruturada com **Bootstrap 5**, adaptando-se a telas de supervisórios industriais ou dispositivos móveis.

---

## 📂 Estrutura do Projeto

O projeto é composto por três arquivos principais na raiz do diretório:

```text
├── index.html       # Estrutura e marcação HTML5 estruturada com Bootstrap 5
├── style.css        # Estilização visual industrial, fontes e animações de Glow
└── script.js        # Lógica de consumo de API assíncrona (Fetch) e manipulação do DOM
