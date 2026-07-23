// korun-theme/App.tsx
import { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { GoogleGenAI } from "@google/genai";
import {
  Menu,
  X,
  ArrowRight,
  Activity,
  BrainCircuit,
  Users,
  TrendingUp,
  ChevronRight,
  Phone,
  MapPin,
  LayoutDashboard,
  ShieldCheck,
  Download,
  Globe,
  Share2,
  Mic,
  Image as ImageIcon,
  MessageSquare,
  Loader2,
  Upload,
  Key,
  Radio,
  CloudRain,
  Map,
  Zap,
  Landmark,
  Palette,
  Zap as Lightning
} from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
var KorunLogo = ({ className, dark = false }) => /* @__PURE__ */ jsxs("svg", { className: `${className}`, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "45", stroke: dark ? "#0A1C2F" : "#F2F4F5", strokeWidth: "3", className: "opacity-80" }),
  /* @__PURE__ */ jsx("line", { x1: "50", y1: "5", x2: "50", y2: "95", stroke: dark ? "#008F89" : "#E4C46F", strokeWidth: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "8", fill: dark ? "#008F89" : "#E4C46F", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "1;0.5;1", dur: "3s", repeatCount: "indefinite" }) })
] });
var Button = ({ children, variant = "primary", className = "", onClick, disabled }) => {
  const base = "px-6 py-3 rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-teal text-white hover:bg-midnight hover:shadow-lg font-bold",
    outline: "border border-teal text-teal hover:bg-teal/10",
    editorial: "bg-white border border-gray-200 text-midnight hover:border-teal hover:text-teal font-sans shadow-sm",
    dark: "bg-gold text-midnight hover:bg-white font-bold",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };
  return /* @__PURE__ */ jsx("button", { onClick, disabled, className: `${base} ${variants[variant]} ${className}`, children });
};
var blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
var playAudio = async (base64Audio) => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const audioBuffer = await audioContext.decodeAudioData(bytes.buffer);
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0);
  } catch (error) {
    console.error("Error playing audio:", error);
  }
};
var ClientSimulation = () => /* @__PURE__ */ jsxs("div", { className: "hidden md:block relative h-[600px] w-full", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-20" }),
  /* @__PURE__ */ jsx("div", { className: "w-full h-full relative opacity-80 animate-float", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 400", className: "w-full h-full", children: [
    /* @__PURE__ */ jsx("path", { d: "M50,350 Q200,380 350,350 Q380,200 350,50 Q200,20 50,50 Q20,200 50,350", fill: "none", stroke: "#008F89", strokeWidth: "0.5", opacity: "0.3" }),
    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "3", fill: "#E4C46F", className: "animate-pulse", style: { animationDelay: "0s" } }),
    /* @__PURE__ */ jsx("circle", { cx: "250", cy: "150", r: "3", fill: "#E4C46F", className: "animate-pulse", style: { animationDelay: "1.5s" } }),
    /* @__PURE__ */ jsx("circle", { cx: "150", cy: "250", r: "3", fill: "#E4C46F", className: "animate-pulse", style: { animationDelay: "0.8s" } }),
    /* @__PURE__ */ jsx("circle", { cx: "300", cy: "300", r: "3", fill: "#E4C46F", className: "animate-pulse", style: { animationDelay: "2.2s" } }),
    /* @__PURE__ */ jsx("line", { x1: "100", y1: "100", x2: "250", y2: "150", stroke: "#008F89", strokeWidth: "0.5", opacity: "0.4" }),
    /* @__PURE__ */ jsx("line", { x1: "250", y1: "150", x2: "300", y2: "300", stroke: "#008F89", strokeWidth: "0.5", opacity: "0.4" }),
    /* @__PURE__ */ jsx("line", { x1: "150", y1: "250", x2: "100", y2: "100", stroke: "#008F89", strokeWidth: "0.5", opacity: "0.4" }),
    /* @__PURE__ */ jsx("line", { x1: "150", y1: "250", x2: "300", y2: "300", stroke: "#008F89", strokeWidth: "0.5", opacity: "0.4" }),
    /* @__PURE__ */ jsx("circle", { cx: "200", cy: "200", r: "40", fill: "none", stroke: "#008F89", strokeWidth: "1", strokeDasharray: "4 4", className: "animate-[spin_10s_linear_infinite]" }),
    /* @__PURE__ */ jsx("circle", { cx: "200", cy: "200", r: "10", fill: "#E4C46F", opacity: "0.8" })
  ] }) })
] });
var ApiKeyModal = ({ onSave }) => {
  const [key, setKey] = useState("");
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center p-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-white max-w-md w-full p-8 rounded shadow-2xl border-t-4 border-teal", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(KorunLogo, { className: "w-16 h-16", dark: true }) }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-midnight mb-2 text-center", children: "Acesso ao Sistema" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-center mb-6 text-sm", children: "Insira sua credencial (API Key) para acessar o terminal de intelig\xEAncia artificial Gemini." }),
    /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ jsx(Key, { className: "absolute left-3 top-3 text-gray-400", size: 20 }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          placeholder: "Cole sua API Key do Google aqui",
          className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:border-teal focus:ring-1 focus:ring-teal outline-none font-mono text-sm",
          value: key,
          onChange: (e) => setKey(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Button, { variant: "primary", className: "w-full", onClick: () => onSave(key), disabled: !key, children: [
      "Autenticar ",
      /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
    ] })
  ] }) });
};
var StatWidget = ({ title, value, sub, trend, positive }) => /* @__PURE__ */ jsxs("div", { className: "bg-midnight-light/50 border border-white/5 p-6 rounded hover:border-teal/50 transition-colors group backdrop-blur-md", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-3", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-gray-400 text-xs uppercase tracking-widest font-sans", children: title }),
    trend && /* @__PURE__ */ jsx("span", { className: `text-xs px-2 py-0.5 rounded border ${positive ? "bg-teal/10 text-teal border-teal/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`, children: trend })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "text-3xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors", children: value }),
  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 font-sans", children: sub })
] });
var PaperCard = ({ year, title, category, description }) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 border border-gray-200 hover:border-teal hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
    /* @__PURE__ */ jsx("span", { className: "bg-mist-dark text-midnight px-3 py-1 text-xs font-bold uppercase tracking-wider", children: category }),
    /* @__PURE__ */ jsx("span", { className: "text-teal font-serif italic", children: year })
  ] }),
  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-midnight mb-4 group-hover:text-teal transition-colors leading-tight", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-graphite text-sm leading-relaxed mb-8 flex-grow", children: description }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center text-midnight font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 mt-auto", children: [
    /* @__PURE__ */ jsx(Download, { size: 16, className: "mr-2 text-teal" }),
    " Download PDF"
  ] })
] });
var SolutionCard = ({ icon, title, description, tags }) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group", children: [
  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-mist rounded-full flex items-center justify-center text-midnight mb-4 group-hover:bg-gold group-hover:text-midnight transition-colors", children: icon }),
  /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-midnight mb-3", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-graphite text-sm leading-relaxed mb-6 h-20", children: description }),
  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag, i) => /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-teal bg-teal/5 px-2 py-1 rounded border border-teal/10", children: tag }, i)) })
] });
var MethodologyStep = ({ number, title, text, icon, stats }) => /* @__PURE__ */ jsxs("div", { className: "relative pl-12 pb-12 border-l border-gray-200 last:border-0 last:pb-0", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute -left-5 top-0 w-10 h-10 bg-white border-2 border-teal rounded-full flex items-center justify-center text-teal font-bold shadow-sm z-10", children: icon }),
  /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-teal uppercase tracking-widest mb-1 block", children: [
      "Fase ",
      number
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-midnight mb-2", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-graphite text-sm leading-relaxed max-w-md", children: text }),
    stats && /* @__PURE__ */ jsx("div", { className: "mt-4 inline-block bg-mist px-4 py-2 rounded text-xs font-bold text-midnight border-l-2 border-gold", children: stats })
  ] })
] });
var HomeView = ({ onChangeView }) => /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in duration-500", children: [
  /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90vh] flex items-center bg-midnight text-white overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "60", height: "60", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 60 0 L 0 0 0 60", fill: "none", stroke: "#008F89", strokeWidth: "0.5" }) }) }),
      /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 w-[800px] h-[800px] bg-teal/20 blur-[150px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in slide-in-from-bottom duration-1000", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-3 px-4 py-2 rounded-sm border-l-2 border-gold bg-white/5 backdrop-blur", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono tracking-widest text-gold uppercase", children: "Intelig\xEAncia Urbana" }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight", children: [
          "Gest\xE3o Preditiva ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-teal to-white", children: "que sente o territ\xF3rio." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-light leading-relaxed max-w-lg", children: "O Sistema Operacional que transforma dados em decis\xE3o. Antecipamos riscos e coordenamos a\xE7\xF5es com precis\xE3o." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "primary", onClick: () => onChangeView("system"), children: "Acessar O Sistema" }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", className: "border-white/20 text-white hover:bg-white/10", onClick: () => onChangeView("methodology"), children: "Conhecer Metodologia" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ClientSimulation, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce", children: /* @__PURE__ */ jsx(ChevronRight, { className: "rotate-90", size: 32 }) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "bg-white border-b border-gray-100 py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 grayscale opacity-60", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-bold text-xl font-display", children: [
      /* @__PURE__ */ jsx(LayoutDashboard, { size: 24 }),
      " GOVTECH BRASIL"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-bold text-xl font-display", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { size: 24 }),
      " METR\xD3POLES"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-bold text-xl font-display", children: [
      /* @__PURE__ */ jsx(Users, { size: 24 }),
      " COLAB"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-bold text-xl font-display", children: [
      /* @__PURE__ */ jsx(Globe, { size: 24 }),
      " ONU HABITAT"
    ] })
  ] }) }),
  /* @__PURE__ */ jsx("section", { className: "py-24 bg-mist", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-between items-end mb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-teal font-bold tracking-widest uppercase text-xs mb-2 block", children: "Portf\xF3lio Estrat\xE9gico" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-display font-bold text-midnight mb-4", children: "Protocolos de Intelig\xEAncia" }),
      /* @__PURE__ */ jsx("p", { className: "text-graphite", children: "Nossas solu\xE7\xF5es s\xE3o desenhadas para gerar recorr\xEAncia, predi\xE7\xE3o e efici\xEAncia operacional em territ\xF3rios complexos." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(LayoutDashboard, {}),
          title: "CIT: Centro de Intelig\xEAncia",
          description: "O c\xE9rebro da opera\xE7\xE3o urbana. Centraliza\xE7\xE3o de dados, monitoramento 360\xBA e despacho automatizado.",
          tags: ["Recorr\xEAncia Mensal", "GovTech", "Integra\xE7\xE3o"]
        }
      ),
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(CloudRain, {}),
          title: "Sistema de Predi\xE7\xE3o (SPR)",
          description: "Antecipe o caos. Modelos preditivos para risco clim\xE1tico, mobilidade e seguran\xE7a por ambi\xEAncia.",
          tags: ["Risco Clim\xE1tico", "Mobilidade", "Alertas"]
        }
      ),
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(Users, {}),
          title: "Auditoria Colaborativa",
          description: "Verifica\xE7\xE3o de campo em escala. Ativa\xE7\xE3o da rede Colab para validar zeladoria e servi\xE7os com 97% de precis\xE3o.",
          tags: ["Baseado no Colab", "Redu\xE7\xE3o de Custo"]
        }
      ),
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(Map, {}),
          title: "Intelig\xEAncia Tur\xEDstica",
          description: "Gest\xE3o de fluxo, impacto econ\xF4mico e roteiros figitais para destinos hist\xF3ricos e eventos (COP30).",
          tags: ["Territ\xF3rio", "Economia Criativa"]
        }
      ),
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(Zap, {}),
          title: "Solu\xE7\xF5es Figitais",
          description: "Unidade de inova\xE7\xE3o para hubs e ecossistemas. Hackathons, laborat\xF3rios vivos e prototipagem com dados.",
          tags: ["Inova\xE7\xE3o", "Hubs", "Consultoria"]
        }
      ),
      /* @__PURE__ */ jsx(
        SolutionCard,
        {
          icon: /* @__PURE__ */ jsx(Landmark, {}),
          title: "Governan\xE7a de Dados",
          description: "Consultoria estrat\xE9gica para estrutura\xE7\xE3o de LGPD, Data Lakes e cultura de decis\xE3o baseada em evid\xEAncia.",
          tags: ["Compliance", "Estrat\xE9gia"]
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ jsx("section", { className: "py-24 bg-white border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-teal font-bold tracking-widest uppercase text-xs mb-2 block", children: "Biblioteca de Conhecimento" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-display font-bold text-midnight", children: "\xDAltimos Insights" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "editorial", onClick: () => onChangeView("papers"), children: [
        "Ver Biblioteca ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx(
        PaperCard,
        {
          year: "2026",
          category: "Trend Report",
          title: "A Era da Governan\xE7a Figital",
          description: "Como a integra\xE7\xE3o entre f\xEDsico, digital e social est\xE1 redefinindo a gest\xE3o de territ\xF3rios na Am\xE9rica Latina."
        }
      ),
      /* @__PURE__ */ jsx(
        PaperCard,
        {
          year: "2025",
          category: "Case Study",
          title: "Territ\xF3rio Costeiro",
          description: "Resultados da implementa\xE7\xE3o do Hub de Intelig\xEAncia: 40% de redu\xE7\xE3o no tempo de resposta a incidentes urbanos."
        }
      ),
      /* @__PURE__ */ jsx(
        PaperCard,
        {
          year: "2025",
          category: "Metodologia",
          title: "Verifica\xE7\xE3o Colaborativa",
          description: "A ci\xEAncia por tr\xE1s do protocolo Colab: como transformar cidad\xE3os em sensores verificados com 97% de precis\xE3o."
        }
      )
    ] })
  ] }) })
] });
var MethodologyView = () => /* @__PURE__ */ jsx("div", { className: "bg-white animate-in fade-in pt-32 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
  /* @__PURE__ */ jsx("span", { className: "text-teal font-bold tracking-widest uppercase text-xs mb-4 block", children: "Nosso Protocolo" }),
  /* @__PURE__ */ jsx("h2", { className: "text-5xl font-serif font-bold text-midnight mb-8", children: "Metodologia Propriet\xE1ria" }),
  /* @__PURE__ */ jsx("p", { className: "text-xl text-graphite mb-12 leading-relaxed", children: "Uma metodologia propriet\xE1ria de 5 etapas. Integramos a ci\xEAncia de dados com a verifica\xE7\xE3o humana. N\xE3o confiamos apenas em algoritmos; confiamos no territ\xF3rio. Nossa parceria com o Colab garante que cada dado seja validado por quem vive a cidade." }),
  /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mb-16", children: "Solicitar Documenta\xE7\xE3o T\xE9cnica" }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx(
      MethodologyStep,
      {
        number: "01",
        title: "Escuta Territorial Inteligente",
        icon: /* @__PURE__ */ jsx(Radio, { size: 20 }),
        text: "Varredura cont\xEDnua de redes sociais, imprensa, sensores IoT e bases legadas. Capturamos o ru\xEDdo urbano antes que ele vire manchete."
      }
    ),
    /* @__PURE__ */ jsx(
      MethodologyStep,
      {
        number: "02",
        title: "Predi\xE7\xE3o & Prioriza\xE7\xE3o",
        icon: /* @__PURE__ */ jsx(TrendingUp, { size: 20 }),
        text: "IA contextual classifica eventos por criticidade. Nossos modelos antecipam alagamentos, crises de seguran\xE7a e falhas urbanas."
      }
    ),
    /* @__PURE__ */ jsx(
      MethodologyStep,
      {
        number: "03",
        title: "Verifica\xE7\xE3o Colaborativa (Colab)",
        icon: /* @__PURE__ */ jsx(Users, { size: 20 }),
        text: "Ativa\xE7\xE3o da base de usu\xE1rios do Colab para validar ocorr\xEAncias em campo. Dados auditados e precisos.",
        stats: "97% de Informa\xE7\xE3o Conclusiva"
      }
    ),
    /* @__PURE__ */ jsx(
      MethodologyStep,
      {
        number: "04",
        title: "A\xE7\xE3o & Governan\xE7a",
        icon: /* @__PURE__ */ jsx(Activity, { size: 20 }),
        text: "Despacho autom\xE1tico para as equipes respons\xE1veis. Pain\xE9is de controle em tempo real para gestores."
      }
    ),
    /* @__PURE__ */ jsx(
      MethodologyStep,
      {
        number: "05",
        title: "Aprendizado Cont\xEDnuo",
        icon: /* @__PURE__ */ jsx(BrainCircuit, { size: 20 }),
        text: "O sistema aprende com cada resolu\xE7\xE3o, criando um banco de intelig\xEAncia preditiva para o futuro."
      }
    )
  ] })
] }) });
var PapersView = () => /* @__PURE__ */ jsx("div", { className: "bg-mist min-h-screen pt-32 pb-24 animate-in fade-in", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-5xl font-serif font-bold text-midnight mb-12", children: "Biblioteca de Conhecimento" }),
  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2026",
        category: "Trend Report",
        title: "A Era da Governan\xE7a Figital",
        description: "An\xE1lise profunda sobre a fus\xE3o de camadas f\xEDsicas, digitais e sociais na gest\xE3o p\xFAblica moderna. O relat\xF3rio definitivo sobre o futuro das cidades."
      }
    ),
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2025",
        category: "Whitepaper",
        title: "O Custo do Ru\xEDdo Urbano",
        description: "Quanto cidades e empresas perdem por n\xE3o escutarem os sinais do territ\xF3rio? Uma an\xE1lise econ\xF4mica de R$ 50 bilh\xF5es."
      }
    ),
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2025",
        category: "Case Study",
        title: "Seguran\xE7a por Ambi\xEAncia",
        description: "Aplicando a teoria das janelas quebradas com IA: como a ilumina\xE7\xE3o preditiva reduziu crimes em \xE1reas monitoradas."
      }
    ),
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2024",
        category: "Research",
        title: "Behavioral AI na Sa\xFAde P\xFAblica",
        description: "Utilizando an\xE1lise de sentimento para prever surtos epid\xEAmicos antes dos hospitais lotarem."
      }
    ),
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2024",
        category: "Metodologia",
        title: "Auditoria Cidad\xE3 Digital",
        description: "Como o modelo Colab transformou a fiscaliza\xE7\xE3o de obras p\xFAblicas em um processo transparente e participativo."
      }
    ),
    /* @__PURE__ */ jsx(
      PaperCard,
      {
        year: "2024",
        category: "GovTech",
        title: "A Cidade como Plataforma",
        description: "O guia definitivo para transformar prefeituras anal\xF3gicas em sistemas operacionais territoriais."
      }
    )
  ] })
] }) });
var SystemView = ({ apiKey }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [aiInput, setAiInput] = useState("");
  const [terminalLog, setTerminalLog] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [aiMode, setAiMode] = useState("thinking");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageSize, setImageSize] = useState("1K");
  const fileInputRef = useRef(null);
  const terminalEndRef = useRef(null);
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLog]);
  const addToLog = (type, content, meta) => {
    setTerminalLog((prev) => [...prev, {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content,
      timestamp: /* @__PURE__ */ new Date(),
      meta
    }]);
  };
  const executeAI = async () => {
    if (!apiKey) return;
    if (!aiInput.trim() && aiMode !== "visual_analysis") return;
    setIsThinking(true);
    addToLog("user", aiInput || (uploadedImage ? "[Image Uploaded]" : "..."));
    try {
      const ai = new GoogleGenAI({ apiKey });
      let responseContent = "";
      let responseType = "system";
      let metaInfo = "";
      if (aiMode === "thinking") {
        metaInfo = "gemini-3-pro-preview (Thinking: 32k budget)";
        const response = await ai.models.generateContent({
          model: "gemini-3-pro-preview",
          contents: [{ parts: [{ text: aiInput }] }],
          config: {
            thinkingConfig: { thinkingBudget: 32768 }
          }
        });
        responseContent = response.text || "Sem resposta.";
      } else if (aiMode === "chat") {
        metaInfo = "gemini-3-pro-preview";
        const history = terminalLog.filter((entry) => entry.type === "user" || entry.type === "system").slice(-10).map((entry) => ({
          role: entry.type === "user" ? "user" : "model",
          parts: [{ text: entry.content }]
        }));
        const response = await ai.models.generateContent({
          model: "gemini-3-pro-preview",
          contents: [...history, { role: "user", parts: [{ text: aiInput }] }]
        });
        responseContent = response.text || "Sem resposta.";
      } else if (aiMode === "fast") {
        metaInfo = "gemini-2.5-flash-lite";
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-lite",
          contents: [{ parts: [{ text: aiInput }] }]
        });
        responseContent = response.text || "Sem resposta.";
      } else if (aiMode === "behavioral") {
        metaInfo = "Behavioral Analyst";
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [{ parts: [{ text: aiInput }] }],
          config: {
            systemInstruction: "Voc\xEA \xE9 o Chief Behavioral Officer da Korun. Analise a entrada sob a \xF3tica da Ci\xEAncia Comportamental (Behavioral Science). Identifique vieses cognitivos, sentimentos coletivos e proponha 'Nudges' (interven\xE7\xF5es comportamentais) para resolver o problema urbano."
          }
        });
        responseContent = response.text || "Sem an\xE1lise comportamental.";
      } else if (aiMode === "visual_gen") {
        metaInfo = `gemini-3-pro-image-preview (${imageSize})`;
        const response = await ai.models.generateContent({
          model: "gemini-3-pro-image-preview",
          contents: { parts: [{ text: aiInput }] },
          config: {
            imageConfig: {
              imageSize
            }
          }
        });
        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
          for (const part of parts) {
            if (part.inlineData) {
              responseContent = part.inlineData.data;
              responseType = "image";
            }
          }
        }
        if (!responseContent) responseContent = "Erro ao gerar imagem.";
      } else if (aiMode === "voice") {
        metaInfo = "gemini-2.5-flash-preview-tts";
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text: aiInput }] }],
          config: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } }
            }
          }
        });
        const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (audioData) {
          responseContent = audioData;
          responseType = "audio";
        } else {
          responseContent = "Erro ao gerar \xE1udio.";
          responseType = "error";
        }
      } else if (aiMode === "visual_analysis" && uploadedImage) {
        metaInfo = "gemini-2.5-flash-image";
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-image",
          contents: {
            parts: [
              { inlineData: { mimeType: "image/jpeg", data: uploadedImage } },
              { text: aiInput || "Analyze this image for urban risks." }
            ]
          }
        });
        responseContent = response.text || "An\xE1lise visual conclu\xEDda.";
      }
      addToLog(responseType, responseContent, metaInfo);
    } catch (error) {
      console.error(error);
      addToLog("error", "Erro de execu\xE7\xE3o. Verifique console ou chave API.");
    } finally {
      setIsThinking(false);
      setAiInput("");
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      blobToBase64(file).then((base64) => setUploadedImage(base64));
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-midnight min-h-screen pt-24 pb-12 px-6 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-8 border-b border-white/10 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-gold font-mono text-xs uppercase tracking-widest mb-1 block", children: "Live Environment" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-display font-bold", children: [
          "Korun OS ",
          /* @__PURE__ */ jsx("span", { className: "text-teal text-lg font-normal", children: "v3.0.0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 bg-white/5 p-1 rounded", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("overview"), className: `px-4 py-2 rounded text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-teal text-white" : "text-gray-400 hover:text-white"}`, children: "Dashboard CIT" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("terminal"), className: `px-4 py-2 rounded text-sm font-medium transition-colors ${activeTab === "terminal" ? "bg-gold text-midnight" : "text-gray-400 hover:text-white"}`, children: "AI Terminal" })
      ] })
    ] }),
    activeTab === "overview" ? /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx(StatWidget, { title: "Sinais Captados (CIT)", value: "854.710", sub: "Escuta Territorial Ativa", trend: "+12%", positive: true }),
        /* @__PURE__ */ jsx(StatWidget, { title: "Alerta SPR", value: "Ativo", sub: "Predi\xE7\xE3o Clim\xE1tica", trend: "Risco", positive: false }),
        /* @__PURE__ */ jsx(StatWidget, { title: "Verifica\xE7\xF5es Colab", value: "1.204", sub: "Auditoria de Campo", trend: "+97%", positive: true }),
        /* @__PURE__ */ jsx(StatWidget, { title: "Efici\xEAncia Resposta", value: "94%", sub: "SLA M\xE9dio: 14min", trend: "+4%", positive: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 h-[500px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-midnight-light border border-white/10 rounded p-6 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 z-10 flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded text-xs font-bold animate-pulse", children: "SPR ALERT" }),
            /* @__PURE__ */ jsx("span", { className: "bg-black/40 text-gray-300 border border-white/10 px-2 py-1 rounded text-xs", children: "Zona Norte" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-40", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", children: [
            /* @__PURE__ */ jsx("pattern", { id: "mapGrid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "#2C3E50", strokeWidth: "0.5" }) }),
            /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#mapGrid)" }),
            /* @__PURE__ */ jsx("circle", { cx: "30%", cy: "40%", r: "80", fill: "#E4C46F", filter: "blur(40px)", opacity: "0.4" }),
            /* @__PURE__ */ jsx("circle", { cx: "70%", cy: "60%", r: "60", fill: "#008F89", filter: "blur(40px)", opacity: "0.3" }),
            /* @__PURE__ */ jsx("circle", { cx: "30%", cy: "40%", r: "4", fill: "#E4C46F", className: "animate-pulse" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 max-w-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-xl mb-1", children: "Movimenta\xE7\xE3o At\xEDpica Detectada" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Alta concentra\xE7\xE3o de relatos sobre falha de ilumina\xE7\xE3o na Av. Principal. Risco de seguran\xE7a elevado." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
              /* @__PURE__ */ jsx(Button, { variant: "dark", className: "py-2 text-xs", children: "Despachar Equipe" }),
              /* @__PURE__ */ jsx(Button, { variant: "outline", className: "py-2 text-xs", children: "Verificar (Colab)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-midnight-light border border-white/10 rounded p-6 flex flex-col", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display font-bold text-white mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Activity, { size: 16, className: "text-teal" }),
            " Feed de Protocolos"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 overflow-y-auto flex-grow pr-2", children: [
            { time: "10:42", cat: "Seguran\xE7a", text: "Falha ilumina\xE7\xE3o p\xFAblica - Setor 4", priority: "High" },
            { time: "10:38", cat: "Mobilidade", text: "Sem\xE1foro intermitente - Centro", priority: "Med" },
            { time: "10:15", cat: "Zeladoria", text: "Descarte irregular - Via Sul", priority: "Low" },
            { time: "09:50", cat: "Social", text: "Acolhimento solicitado - P\xE7a Matriz", priority: "Med" }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 p-3 rounded border-l-2 border-teal hover:bg-white/10 transition-colors cursor-pointer", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500 mb-1", children: [
              /* @__PURE__ */ jsx("span", { children: item.time }),
              /* @__PURE__ */ jsx("span", { className: item.priority === "High" ? "text-gold" : "text-teal", children: item.cat })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-200", children: item.text })
          ] }, i)) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "animate-in slide-in-from-right duration-300 grid md:grid-cols-3 gap-8 h-[650px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-midnight-light border border-white/10 rounded p-4 flex flex-col overflow-y-auto", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-gold font-mono text-xs uppercase tracking-widest mb-4 sticky top-0 bg-midnight-light z-10 py-2", children: "M\xF3dulos de Intelig\xEAncia" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2 flex-grow", children: [
          { id: "thinking", icon: BrainCircuit, label: "Strategic Thinking", sub: "Gemini 3 Pro + Thinking", color: "text-teal" },
          { id: "chat", icon: MessageSquare, label: "Chatbot Assistant", sub: "Conversational AI", color: "text-blue-400" },
          { id: "fast", icon: Lightning, label: "Fast Response", sub: "Gemini Flash Lite", color: "text-yellow-400" },
          { id: "visual_gen", icon: Palette, label: "Visual Generation", sub: "Nano Banana Pro", color: "text-pink-400" },
          { id: "behavioral", icon: Users, label: "Behavioral Analysis", sub: "Sentiment & Bias", color: "text-gold" },
          { id: "voice", icon: Mic, label: "Voice Briefing", sub: "Text-to-Speech", color: "text-purple-500" },
          { id: "visual_analysis", icon: ImageIcon, label: "Visual Analysis", sub: "Image Upload", color: "text-blue-500" }
        ].map((mode) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setAiMode(mode.id),
            className: `w-full text-left p-3 rounded flex items-center gap-3 transition-all ${aiMode === mode.id ? "bg-white/10 border border-white/20" : "hover:bg-white/5 opacity-70 hover:opacity-100"}`,
            children: [
              /* @__PURE__ */ jsx(mode.icon, { size: 18, className: mode.color }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-xs text-white", children: mode.label }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] text-gray-400", children: mode.sub })
              ] })
            ]
          },
          mode.id
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t border-white/10 pt-4", children: [
          aiMode === "visual_analysis" && /* @__PURE__ */ jsxs("label", { className: "block w-full cursor-pointer bg-white/5 border border-dashed border-gray-600 rounded p-3 text-center hover:bg-white/10 transition-colors", children: [
            /* @__PURE__ */ jsx(Upload, { className: "mx-auto mb-1 text-gray-400", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-400", children: "Upload Imagem" }),
            /* @__PURE__ */ jsx("input", { type: "file", ref: fileInputRef, onChange: handleImageUpload, className: "hidden", accept: "image/*" }),
            uploadedImage && /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-teal", children: "Imagem carregada" })
          ] }),
          aiMode === "visual_gen" && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] text-gray-400 uppercase tracking-widest font-bold", children: "Resolu\xE7\xE3o" }),
            /* @__PURE__ */ jsx("div", { className: "flex bg-white/5 rounded p-1", children: ["1K", "2K", "4K"].map((size) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setImageSize(size),
                className: `flex-1 text-xs py-1 rounded transition-colors ${imageSize === size ? "bg-teal text-white" : "text-gray-400 hover:text-white"}`,
                children: size
              },
              size
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-black border border-white/10 rounded flex flex-col relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500/50" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-500/50" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500/50" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500", children: "korun-terminal // session_active" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-grow overflow-y-auto p-4 space-y-6 font-mono text-sm scrollbar-thin scrollbar-thumb-teal/20 scrollbar-track-transparent", children: [
          terminalLog.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-gray-600 italic text-center mt-20", children: "Inicialize um m\xF3dulo de intelig\xEAncia para come\xE7ar..." }),
          terminalLog.map((entry) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-1 ${entry.type === "user" ? "items-end" : "items-start"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10px] text-gray-500 uppercase", children: [
              /* @__PURE__ */ jsx("span", { children: entry.type === "user" ? "User" : "Korun Core" }),
              /* @__PURE__ */ jsx("span", { children: "\u2022" }),
              /* @__PURE__ */ jsx("span", { children: entry.timestamp.toLocaleTimeString() }),
              entry.meta && /* @__PURE__ */ jsxs("span", { className: "text-teal", children: [
                "[",
                entry.meta,
                "]"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `max-w-[90%] p-3 rounded text-sm ${entry.type === "user" ? "bg-white/10 text-white rounded-tr-none" : entry.type === "error" ? "bg-red-500/10 text-red-300 border border-red-500/30" : "bg-midnight-light border border-teal/30 text-gray-200 rounded-tl-none"}`, children: entry.type === "image" ? /* @__PURE__ */ jsx("img", { src: `data:image/png;base64,${entry.content}`, alt: "Generated", className: "rounded max-w-full" }) : entry.type === "audio" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsx(Mic, { size: 14, className: "text-teal" }) }),
              /* @__PURE__ */ jsx("button", { onClick: () => playAudio(entry.content), className: "text-teal hover:underline text-xs", children: "Replay Audio Briefing" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "whitespace-pre-wrap leading-relaxed", children: entry.content }) })
          ] }, entry.id)),
          isThinking && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-teal animate-pulse text-xs mt-2", children: [
            /* @__PURE__ */ jsx(Loader2, { size: 12, className: "animate-spin" }),
            aiMode === "thinking" ? "Reasoning with Gemini 3 Pro..." : "Processing..."
          ] }),
          /* @__PURE__ */ jsx("div", { ref: terminalEndRef })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-white/10 bg-midnight-light", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "flex-grow bg-black border border-gray-700 rounded px-4 py-2 text-white focus:border-teal outline-none font-mono text-sm placeholder-gray-600",
              placeholder: aiMode === "visual_gen" ? "Descreva a imagem para gerar (ex: Mapa de calor urbano 4K)..." : aiMode === "chat" ? "Converse com o assistente..." : "Digite um comando ou consulta...",
              value: aiInput,
              onChange: (e) => setAiInput(e.target.value),
              onKeyPress: (e) => e.key === "Enter" && executeAI(),
              disabled: isThinking
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "primary", onClick: executeAI, disabled: isThinking || !apiKey, className: "px-4", children: isThinking ? /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }) : /* @__PURE__ */ jsx(ArrowRight, {}) })
        ] }) })
      ] })
    ] })
  ] }) });
};
var GovernanceView = () => /* @__PURE__ */ jsx("div", { className: "bg-white min-h-screen pt-32 pb-24 animate-in fade-in", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-5xl font-serif font-bold text-midnight mb-8", children: "Governan\xE7a Figital" }),
  /* @__PURE__ */ jsx("p", { className: "text-xl text-graphite mb-12", children: "A tecnologia \xE9 apenas o meio. A verdadeira intelig\xEAncia territorial reside na capacidade de orquestrar a complexidade humana, f\xEDsica e digital em um \xFAnico modelo de governan\xE7a." }),
  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000",
          alt: "Reuni\xE3o de Governan\xE7a",
          className: "rounded shadow-lg mb-6 filter grayscale hover:grayscale-0 transition-all duration-700"
        }
      ),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-midnight mb-4", children: "O Modelo de H\xE9lices" }),
      /* @__PURE__ */ jsx("p", { className: "text-graphite", children: "A Korun atua como a plataforma integradora entre Governo, Academia, Setor Privado e Sociedade Civil. Nossos pain\xE9is n\xE3o servem apenas para monitorar, mas para alinhar interesses e gerar consenso baseado em evid\xEAncias." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-gold pl-6 py-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-midnight mb-2", children: "Transpar\xEAncia Ativa" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-graphite", children: "Dados abertos por padr\xE3o. Transformamos caixas-pretas administrativas em dashboards p\xFAblicos compreens\xEDveis." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-teal pl-6 py-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-midnight mb-2", children: "Responsividade em Tempo Real" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-graphite", children: "O fim da burocracia do papel. Decis\xF5es tomadas no ritmo que a cidade exige, com despacho automatizado." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-midnight pl-6 py-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-midnight mb-2", children: "Inclus\xE3o Territorial" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-graphite", children: 'Nossa IA detecta "sil\xEAncios de dados" para garantir que comunidades marginalizadas sejam ouvidas e atendidas com prioridade.' })
      ] })
    ] })
  ] })
] }) });
var ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome \xE9 obrigat\xF3rio";
    if (!formData.email.trim()) {
      newErrors.email = "Email \xE9 obrigat\xF3rio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inv\xE1lido";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone \xE9 obrigat\xF3rio";
    } else if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      if (formData.phone.length < 10) newErrors.phone = "Telefone inv\xE1lido";
    }
    if (!formData.message.trim()) newErrors.message = "Mensagem \xE9 obrigat\xF3ria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1e3);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-midnight min-h-screen pt-32 pb-24 animate-in fade-in text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-5xl font-serif font-bold mb-6 text-center", children: "Inicie a Transforma\xE7\xE3o" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-400 mb-12 text-lg", children: "Agende uma demonstra\xE7\xE3o t\xE9cnica do Sistema Operacional Korun." }),
    isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "bg-white/5 p-8 rounded border border-teal/50 backdrop-blur-sm text-center animate-in zoom-in", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 text-teal", children: /* @__PURE__ */ jsx(ShieldCheck, { size: 32 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Solicita\xE7\xE3o Enviada!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
        "Obrigado, ",
        formData.name,
        ". Nossa equipe de consultores entrar\xE1 em contato em breve pelo email ",
        formData.email,
        "."
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mt-8 mx-auto", onClick: () => setIsSubmitted(false), children: "Enviar nova mensagem" })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-teal uppercase tracking-widest", children: "Nome Completo" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "name",
              type: "text",
              className: `w-full bg-black/20 border ${errors.name ? "border-red-500" : "border-white/10"} rounded px-4 py-3 focus:border-gold outline-none transition-colors`,
              placeholder: "Seu nome",
              value: formData.name,
              onChange: handleChange
            }
          ),
          errors.name && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-teal uppercase tracking-widest", children: "Telefone" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "phone",
              type: "text",
              className: `w-full bg-black/20 border ${errors.phone ? "border-red-500" : "border-white/10"} rounded px-4 py-3 focus:border-gold outline-none transition-colors`,
              placeholder: "(XX) XXXXX-XXXX",
              value: formData.phone,
              onChange: handleChange
            }
          ),
          errors.phone && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.phone })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-teal uppercase tracking-widest", children: "Email Corporativo" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            name: "email",
            type: "email",
            className: `w-full bg-black/20 border ${errors.email ? "border-red-500" : "border-white/10"} rounded px-4 py-3 focus:border-gold outline-none transition-colors`,
            placeholder: "voce@organizacao.com",
            value: formData.email,
            onChange: handleChange
          }
        ),
        errors.email && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-teal uppercase tracking-widest", children: "Mensagem" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            className: `w-full bg-black/20 border ${errors.message ? "border-red-500" : "border-white/10"} rounded px-4 py-3 h-32 focus:border-gold outline-none transition-colors`,
            placeholder: "Descreva brevemente sua necessidade...",
            value: formData.message,
            onChange: handleChange
          }
        ),
        errors.message && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.message })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "dark", className: "w-full py-4 text-base", children: [
        "Enviar Mensagem ",
        /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/10 flex justify-center gap-8 text-sm text-gray-400", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Phone, { size: 16 }),
          " (81) 99821-0427"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 16 }),
          " Recife, Brasil"
        ] })
      ] })
    ] })
  ] }) });
};
var App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showKeyModal, setShowKeyModal] = useState(false);
  useEffect(() => {
    const storedKey = localStorage.getItem("gemini_api_key");
    if (storedKey) {
      setApiKey(storedKey);
    } else {
    }
  }, []);
  const handleSaveKey = (key) => {
    localStorage.setItem("gemini_api_key", key);
    setApiKey(key);
    setShowKeyModal(false);
  };
  const NavLink = ({ view, label }) => /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => {
        setCurrentView(view);
        setIsMenuOpen(false);
      },
      className: `text-sm font-medium tracking-wide transition-colors ${currentView === view ? "text-teal font-bold" : "text-gray-500 hover:text-midnight"}`,
      children: label
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-sans selection:bg-teal selection:text-white", children: [
    /* @__PURE__ */ jsxs("nav", { className: `fixed top-0 w-full z-50 transition-all duration-300 ${currentView === "home" || currentView === "system" || currentView === "contact" ? "bg-midnight/90 backdrop-blur border-b border-white/5 text-white" : "bg-white/90 backdrop-blur border-b border-gray-200 text-midnight"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 cursor-pointer group",
            onClick: () => setCurrentView("home"),
            children: [
              /* @__PURE__ */ jsx(KorunLogo, { className: "w-10 h-10 group-hover:scale-105 transition-transform", dark: !(currentView === "home" || currentView === "system" || currentView === "contact") }),
              /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-xl tracking-tight", children: "KORUN" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setCurrentView("methodology"), className: "text-sm font-medium hover:text-teal transition-colors", children: "Metodologia" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setCurrentView("papers"), className: "text-sm font-medium hover:text-teal transition-colors", children: "Papers" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setCurrentView("governance"), className: "text-sm font-medium hover:text-teal transition-colors", children: "Governan\xE7a" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setCurrentView("system"), className: "text-sm font-medium hover:text-teal transition-colors", children: "O Sistema" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: currentView === "home" || currentView === "system" || currentView === "contact" ? "dark" : "primary",
              className: "py-2 px-4",
              onClick: () => setCurrentView("contact"),
              children: "Falar com Consultor"
            }
          ),
          !apiKey && /* @__PURE__ */ jsx("button", { onClick: () => setShowKeyModal(true), className: "p-2 hover:bg-white/10 rounded-full", title: "Configurar API", children: /* @__PURE__ */ jsx(Key, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) })
      ] }),
      isMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-6 md:hidden text-midnight shadow-xl", children: [
        /* @__PURE__ */ jsx(NavLink, { view: "home", label: "Home" }),
        /* @__PURE__ */ jsx(NavLink, { view: "methodology", label: "Metodologia" }),
        /* @__PURE__ */ jsx(NavLink, { view: "papers", label: "Papers & Reports" }),
        /* @__PURE__ */ jsx(NavLink, { view: "governance", label: "Governan\xE7a" }),
        /* @__PURE__ */ jsx(NavLink, { view: "system", label: "O Sistema" }),
        /* @__PURE__ */ jsx(NavLink, { view: "contact", label: "Contato" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { children: [
      currentView === "home" && /* @__PURE__ */ jsx(HomeView, { onChangeView: setCurrentView }),
      currentView === "methodology" && /* @__PURE__ */ jsx(MethodologyView, {}),
      currentView === "papers" && /* @__PURE__ */ jsx(PapersView, {}),
      currentView === "system" && /* @__PURE__ */ jsx(SystemView, { apiKey }),
      currentView === "governance" && /* @__PURE__ */ jsx(GovernanceView, {}),
      currentView === "contact" && /* @__PURE__ */ jsx(ContactView, {})
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "bg-midnight text-white py-16 border-t border-white/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx(KorunLogo, { className: "w-8 h-8", dark: false }),
            /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-lg", children: "KORUN INTELLIGENCE" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-sm leading-relaxed mb-6", children: "Consultoria l\xEDder em ci\xEAncia comportamental e intelig\xEAncia artificial aplicada \xE0 gest\xE3o de territ\xF3rios complexos." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-500 hover:text-teal", children: /* @__PURE__ */ jsx(Globe, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-500 hover:text-teal", children: /* @__PURE__ */ jsx(MessageSquare, { size: 20 }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-500 hover:text-teal", children: /* @__PURE__ */ jsx(Share2, { size: 20 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-6 font-display", children: "Solu\xE7\xF5es" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", children: "CIT: Centro de Intelig\xEAncia" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", children: "SPR: Sistema de Predi\xE7\xE3o" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", children: "Auditoria Colaborativa (Colab)" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", children: "Intelig\xEAncia Tur\xEDstica" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", children: "Solu\xE7\xF5es Figitais" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-6 font-display", children: "Institucional" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", onClick: () => setCurrentView("papers"), children: "Trend Report 2026" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", onClick: () => setCurrentView("methodology"), children: "Metodologia Cient\xEDfica" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", onClick: () => setCurrentView("governance"), children: "Modelo de Governan\xE7a" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-gold cursor-pointer", onClick: () => setCurrentView("contact"), children: "Contato" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs font-mono", children: "\xA9 2026 Korun Intelligence. Todos os direitos reservados. Recife \u2022 Brasil." })
    ] }),
    showKeyModal && /* @__PURE__ */ jsx(ApiKeyModal, { onSave: handleSaveKey })
  ] });
};
var rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(/* @__PURE__ */ jsx(App, {}));
}
