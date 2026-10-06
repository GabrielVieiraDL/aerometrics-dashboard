<div align="center">
  <img src="./assets/logo_aerometrics_v2.png" alt="Aerometrics Logo" width="180"/>
  <h1>🛫 Aerometrics Dashboard</h1>
  <p><strong>Consultoria de Dados Aéreos — Painel Executivo e Monitoramento</strong></p>
</div>

Uma Single Page Application (SPA) responsiva e moderna, desenvolvida para fornecer visualizações gerenciais em tempo real sobre a malha aérea, gargalos logísticos e On-Time Performance (OTP).

## 🎯 Visão Geral
O projeto **Aerometrics** atua na linha de frente do monitoramento de performance da aviação civil. Este dashboard web serve como portal de acesso aos relatórios do Power BI Embedded, trazendo métricas críticas como Efeito Cascata (Reactionary Delays), taxa de cancelamentos e custos contingenciais (Resolução ANAC nº 400).

## 🚀 Tecnologias Utilizadas
A interface foi construída seguindo princípios de Clean Code, garantindo um carregamento ultrarrápido e sem dependência de pesados frameworks frontend:
- **HTML5 Semântico**: Estruturação acessível e otimizada.
- **Tailwind CSS**: Estilização utilitária, garantindo um design system fluído, responsivo e de fácil manutenção.
- **Vanilla JavaScript**: Lógica de roteamento SPA (Single Page Application) nativa, limpa e performática.
- **Power BI Embedded**: Integração de Data Viz com suporte nativo a `fitToWidth` e proporção estrita 16:9 sem letterboxing.

## 📁 Arquitetura do Projeto
O frontend foi refatorado e componentizado nos seguintes arquivos essenciais:
```text
/
├── index.html            # Estrutura principal
├── tailwind.config.js    # Design System (paleta de cores)
├── README.md             # Documentação
├── css/
│   └── style.css         # Estilos customizados
├── js/
│   └── script.js         # Lógica da SPA
├── assets/
│   └── logo_*            # Arquivos de imagem e marca
├── data/
│   └── *.csv             # Arquivos CSV da base de dados
└── pbi/
    └── .gitkeep          # Pasta reservada para os arquivos .pbix
```

## 🛠️ Como Executar
Por ser uma aplicação inteiramente *Client-Side* e sem dependências locais no `node_modules`, a execução é imediata:

1. Clone o repositório:
   ```bash
   git clone https://github.com/GabrielVieiraDL/aerometrics-dashboard.git
   ```
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
   - *(Opcional)*: Utilize o *Live Server* do VSCode para habilitar hot-reload durante edições.

## 👥 Data Squad
Este painel integra as entregas analíticas e arquiteturais do nosso esquadrão de dados:
- Gabriel Vieira
- Alef Reis
- Roberta Salyna
- Douglas Serafim
- Evelin Lins
- Anna Callejon
- Luana Silva

---
*Aerometrics — Consultoria de Dados Aéreos @ Generation 2026*
