# Korun Intelligence — Sistema Operacional Territorial

![Korun Banner](https://via.placeholder.com/1200x400/0A1C2F/E4C46F?text=KORUN+INTELLIGENCE)

**Korun** é uma plataforma de **Inteligência Territorial e Ciência Comportamental** aplicada à gestão pública e corporativa. Este projeto demonstra um front-end de alta fidelidade para uma consultoria "GovTech" premium, integrando simulações de dashboards urbanos com capacidades reais de Inteligência Artificial generativa via Google Gemini API.

A aplicação segue uma estética **"High-End Behavioral Science Consultancy"**, combinando autoridade institucional (Midnight Blue), precisão científica (Teal) e inteligência central (Gold).

---

## 🚀 Funcionalidades Principais

### 1. **Metodologia Figital (Físico + Digital)**
Apresentação interativa da metodologia proprietária de 5 etapas da Korun, integrando:
- Escuta Territorial Inteligente.
- Predição & Priorização.
- **Verificação Colaborativa (Integração Colab)**.
- Ação & Governança.
- Aprendizado Contínuo.

### 2. **Simulação de Dashboard Operacional**
Uma interface visual rica que simula o "Cérebro da Operação", exibindo métricas fictícias de:
- Risco Climático e Alagamentos.
- Sentimento Social.
- Feed de Ocorrências em Tempo Real.
- Mapas de Calor e Pinos de Ocorrência.

### 3. **Korun Live Terminal (AI Powered)**
Um terminal interativo funcional integrado ao SDK `@google/genai`, permitindo:

*   **🧠 Thinking Mode (Raciocínio Complexo):**
    *   Utiliza o modelo **`gemini-3-pro-preview`**.
    *   Configurado com um orçamento de pensamento (`thinkingBudget`) de 32k tokens para resolver consultas complexas de gestão urbana.
*   **🎙️ Voice Briefing (Text-to-Speech):**
    *   Utiliza o modelo **`gemini-2.5-flash-preview-tts`**.
    *   Converte relatórios de texto em áudio falado natural (Voz: 'Kore').
*   **🎨 Visual Edit (Edição de Imagem):**
    *   Utiliza o modelo **`gemini-2.5-flash-image`**.
    *   Permite upload de imagens e edição via prompt de texto (ex: "Adicionar filtro de mapa de calor").

---

## 🛠️ Tech Stack

*   **Frontend Framework:** React 19
*   **Styling:** Tailwind CSS (configurado com paleta personalizada: Midnight, Teal, Gold, Mist).
*   **AI Integration:** Google GenAI SDK (`@google/genai`).
*   **Icons:** Lucide React.
*   **Fonts:** Inter, Manrope, Playfair Display (Google Fonts).

---

## 📦 Instalação e Uso

### Pré-requisitos
*   Node.js instalado.
*   Uma **API Key do Google Gemini** (necessária para as funcionalidades do Terminal). Você pode obter uma no [Google AI Studio](https://aistudio.google.com/).

### Passos
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/korun-intelligence.git
    cd korun-intelligence
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

4.  **Configuração da API Key:**
    *   Ao abrir a aplicação no navegador, um modal solicitará sua chave de API.
    *   Insira sua chave (ela será salva apenas no `localStorage` do seu navegador para persistência durante os testes).

---

## 📂 Estrutura do Projeto

*   `App.tsx`: Componente principal contendo toda a lógica da SPA (Single Page Application), navegação, integração com Gemini e UI.
*   `index.html`: Ponto de entrada com configurações de Tailwind via CDN (para portabilidade), fontes e meta tags de SEO.
*   `metadata.json`: Metadados da aplicação.

---

## 🎨 Design System

O design system "Mineral Ritual" foi adaptado para "Behavioral Science":

| Cor | Hex | Uso |
| :--- | :--- | :--- |
| **Deep Midnight** | `#0A1C2F` | Autoridade, Backgrounds de Sistema |
| **Korun Teal** | `#008F89` | Ciência, Dados, Ações Primárias |
| **Signal Gold** | `#E4C46F` | Núcleo, Alertas, Destaques |
| **Gray Mist** | `#F2F4F5` | Fundo Editorial (Leitura) |

---

## 📄 Licença

Este projeto é uma demonstração técnica e conceitual.
© 2026 Korun Intelligence. Todos os direitos reservados.
