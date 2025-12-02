import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  Menu, X, ArrowRight, Activity, BrainCircuit, Users, 
  TrendingUp, FileText, ChevronRight, Phone, MapPin, 
  LayoutDashboard, Database, ShieldCheck, Download, 
  BookOpen, Eye, Globe, Share2, Search, Cpu, Mic, 
  Image as ImageIcon, Play, MessageSquare, Loader2, Upload,
  Key, Lock, HeartHandshake, ChevronLeft, Layers, Radio,
  CloudRain, Map, Zap, Landmark, Palette, Zap as Lightning
} from 'lucide-react';

// --- Assets & Icons ---

const KorunLogo = ({ className, dark = false }) => (
  <svg className={`${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke={dark ? "#0A1C2F" : "#F2F4F5"} strokeWidth="3" className="opacity-80"/> 
    <line x1="50" y1="5" x2="50" y2="95" stroke={dark ? "#008F89" : "#E4C46F"} strokeWidth="2"/> 
    <circle cx="50" cy="50" r="8" fill={dark ? "#008F89" : "#E4C46F"}>
       <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const Button = ({ 
  children, variant = 'primary', className = '', onClick, disabled 
}) => {
  const base = "px-6 py-3 rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-teal text-white hover:bg-midnight hover:shadow-lg font-bold",
    outline: "border border-teal text-teal hover:bg-teal/10",
    editorial: "bg-white border border-gray-200 text-midnight hover:border-teal hover:text-teal font-sans shadow-sm",
    dark: "bg-gold text-midnight hover:bg-white font-bold",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Helpers ---

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      resolve(result.split(',')[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const playAudio = async (base64Audio) => {
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

// --- Sub-Components ---

const ClientSimulation = () => (
  <div className="hidden md:block relative h-[600px] w-full">
    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-20"></div>
    <div className="w-full h-full relative opacity-80 animate-float">
       <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M50,350 Q200,380 350,350 Q380,200 350,50 Q200,20 50,50 Q20,200 50,350" fill="none" stroke="#008F89" strokeWidth="0.5" opacity="0.3" />
          <circle cx="100" cy="100" r="3" fill="#E4C46F" className="animate-pulse" style={{animationDelay: '0s'}} />
          <circle cx="250" cy="150" r="3" fill="#E4C46F" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          <circle cx="150" cy="250" r="3" fill="#E4C46F" className="animate-pulse" style={{animationDelay: '0.8s'}} />
          <circle cx="300" cy="300" r="3" fill="#E4C46F" className="animate-pulse" style={{animationDelay: '2.2s'}} />
          <line x1="100" y1="100" x2="250" y2="150" stroke="#008F89" strokeWidth="0.5" opacity="0.4" />
          <line x1="250" y1="150" x2="300" y2="300" stroke="#008F89" strokeWidth="0.5" opacity="0.4" />
          <line x1="150" y1="250" x2="100" y2="100" stroke="#008F89" strokeWidth="0.5" opacity="0.4" />
          <line x1="150" y1="250" x2="300" y2="300" stroke="#008F89" strokeWidth="0.5" opacity="0.4" />
          <circle cx="200" cy="200" r="40" fill="none" stroke="#008F89" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
          <circle cx="200" cy="200" r="10" fill="#E4C46F" opacity="0.8" />
       </svg>
    </div>
  </div>
);

const ApiKeyModal = ({ onSave }) => {
  const [key, setKey] = useState('');

  return (
    <div className="fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full p-8 rounded shadow-2xl border-t-4 border-teal">
        <div className="flex justify-center mb-6">
          <KorunLogo className="w-16 h-16" dark={true} />
        </div>
        <h2 className="text-2xl font-display font-bold text-midnight mb-2 text-center">Acesso ao Sistema</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Insira sua credencial (API Key) para acessar o terminal de inteligência artificial Gemini.
        </p>
        <div className="relative mb-6">
          <Key className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="password" 
            placeholder="Cole sua API Key do Google aqui" 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:border-teal focus:ring-1 focus:ring-teal outline-none font-mono text-sm"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <Button variant="primary" className="w-full" onClick={() => onSave(key)} disabled={!key}>
          Autenticar <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const StatWidget = ({ title, value, sub, trend, positive }) => (
  <div className="bg-midnight-light/50 border border-white/5 p-6 rounded hover:border-teal/50 transition-colors group backdrop-blur-md">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-gray-400 text-xs uppercase tracking-widest font-sans">{title}</h4>
      {trend && (
        <span className={`text-xs px-2 py-0.5 rounded border ${positive ? 'bg-teal/10 text-teal border-teal/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
          {trend}
        </span>
      )}
    </div>
    <div className="text-3xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">{value}</div>
    <div className="text-xs text-gray-400 font-sans">{sub}</div>
  </div>
);

const PaperCard = ({ year, title, category, description }) => (
  <div className="bg-white p-8 border border-gray-200 hover:border-teal hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <span className="bg-mist-dark text-midnight px-3 py-1 text-xs font-bold uppercase tracking-wider">{category}</span>
      <span className="text-teal font-serif italic">{year}</span>
    </div>
    <h3 className="text-2xl font-display font-bold text-midnight mb-4 group-hover:text-teal transition-colors leading-tight">
      {title}
    </h3>
    <p className="text-graphite text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <div className="flex items-center text-midnight font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 mt-auto">
      <Download size={16} className="mr-2 text-teal" /> Download PDF
    </div>
  </div>
);

const SolutionCard = ({ icon, title, description, tags }) => (
  <div className="bg-white p-6 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group">
    <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center text-midnight mb-4 group-hover:bg-gold group-hover:text-midnight transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-midnight mb-3">{title}</h3>
    <p className="text-graphite text-sm leading-relaxed mb-6 h-20">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-xs font-mono text-teal bg-teal/5 px-2 py-1 rounded border border-teal/10">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const MethodologyStep = ({ number, title, text, icon, stats }) => (
  <div className="relative pl-12 pb-12 border-l border-gray-200 last:border-0 last:pb-0">
    <div className="absolute -left-5 top-0 w-10 h-10 bg-white border-2 border-teal rounded-full flex items-center justify-center text-teal font-bold shadow-sm z-10">
      {icon}
    </div>
    <div className="mt-1">
      <span className="text-xs font-bold text-teal uppercase tracking-widest mb-1 block">Fase {number}</span>
      <h3 className="text-xl font-display font-bold text-midnight mb-2">{title}</h3>
      <p className="text-graphite text-sm leading-relaxed max-w-md">{text}</p>
      {stats && (
        <div className="mt-4 inline-block bg-mist px-4 py-2 rounded text-xs font-bold text-midnight border-l-2 border-gold">
          {stats}
        </div>
      )}
    </div>
  </div>
);

// --- VIEWS ---

const HomeView = ({ onChangeView }) => (
  <div className="animate-in fade-in duration-500">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center bg-midnight text-white overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#008F89" strokeWidth="0.5"/>
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
      </div>
      
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-teal/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border-l-2 border-gold bg-white/5 backdrop-blur">
            <span className="text-xs font-mono tracking-widest text-gold uppercase">Inteligência Urbana</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
            Gestão Preditiva <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-white">que sente o território.</span>
          </h1>
          
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
            O Sistema Operacional que transforma dados em decisão. Antecipamos riscos e coordenamos ações com precisão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" onClick={() => onChangeView('system')}>
                Acessar O Sistema
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => onChangeView('methodology')}>
                Conhecer Metodologia
              </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <ClientSimulation />
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <ChevronRight className="rotate-90" size={32} />
      </div>
    </section>

    {/* Authority Bar */}
    <div className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 grayscale opacity-60">
        <div className="flex items-center gap-2 font-bold text-xl font-display"><LayoutDashboard size={24}/> GOVTECH BRASIL</div>
        <div className="flex items-center gap-2 font-bold text-xl font-display"><ShieldCheck size={24}/> METRÓPOLES</div>
        <div className="flex items-center gap-2 font-bold text-xl font-display"><Users size={24}/> COLAB</div>
        <div className="flex items-center gap-2 font-bold text-xl font-display"><Globe size={24}/> ONU HABITAT</div>
      </div>
    </div>
    
    {/* Strategic Products Section */}
    <section className="py-24 bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-2 block">Portfólio Estratégico</span>
            <h2 className="text-4xl font-display font-bold text-midnight mb-4">Protocolos de Inteligência</h2>
            <p className="text-graphite">
              Nossas soluções são desenhadas para gerar recorrência, predição e eficiência operacional em territórios complexos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           <SolutionCard 
             icon={<LayoutDashboard />}
             title="CIT: Centro de Inteligência"
             description="O cérebro da operação urbana. Centralização de dados, monitoramento 360º e despacho automatizado."
             tags={["Recorrência Mensal", "GovTech", "Integração"]}
           />
           <SolutionCard 
             icon={<CloudRain />}
             title="Sistema de Predição (SPR)"
             description="Antecipe o caos. Modelos preditivos para risco climático, mobilidade e segurança por ambiência."
             tags={["Risco Climático", "Mobilidade", "Alertas"]}
           />
           <SolutionCard 
             icon={<Users />}
             title="Auditoria Colaborativa"
             description="Verificação de campo em escala. Ativação da rede Colab para validar zeladoria e serviços com 97% de precisão."
             tags={["Baseado no Colab", "Redução de Custo"]}
           />
           <SolutionCard 
             icon={<Map />}
             title="Inteligência Turística"
             description="Gestão de fluxo, impacto econômico e roteiros figitais para destinos históricos e eventos (COP30)."
             tags={["Território", "Economia Criativa"]}
           />
           <SolutionCard 
             icon={<Zap />}
             title="Soluções Figitais"
             description="Unidade de inovação para hubs e ecossistemas. Hackathons, laboratórios vivos e prototipagem com dados."
             tags={["Inovação", "Hubs", "Consultoria"]}
           />
           <SolutionCard 
             icon={<Landmark />}
             title="Governança de Dados"
             description="Consultoria estratégica para estruturação de LGPD, Data Lakes e cultura de decisão baseada em evidência."
             tags={["Compliance", "Estratégia"]}
           />
        </div>
      </div>
    </section>

    {/* Insights Teaser */}
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-2 block">Biblioteca de Conhecimento</span>
            <h2 className="text-4xl font-display font-bold text-midnight">Últimos Insights</h2>
          </div>
          <Button variant="editorial" onClick={() => onChangeView('papers')}>Ver Biblioteca <ArrowRight size={16}/></Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
           <PaperCard 
             year="2026"
             category="Trend Report"
             title="A Era da Governança Figital"
             description="Como a integração entre físico, digital e social está redefinindo a gestão de territórios na América Latina."
           />
           <PaperCard 
             year="2025"
             category="Case Study"
             title="Território Costeiro"
             description="Resultados da implementação do Hub de Inteligência: 40% de redução no tempo de resposta a incidentes urbanos."
           />
           <PaperCard 
             year="2025"
             category="Metodologia"
             title="Verificação Colaborativa"
             description="A ciência por trás do protocolo Colab: como transformar cidadãos em sensores verificados com 97% de precisão."
           />
        </div>
      </div>
    </section>
  </div>
);

const MethodologyView = () => (
  <div className="bg-white animate-in fade-in pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">
       <span className="text-teal font-bold tracking-widest uppercase text-xs mb-4 block">Nosso Protocolo</span>
       <h2 className="text-5xl font-serif font-bold text-midnight mb-8">Metodologia Proprietária</h2>
       <p className="text-xl text-graphite mb-12 leading-relaxed">
         Uma metodologia proprietária de 5 etapas. Integramos a ciência de dados com a verificação humana. Não confiamos apenas em algoritmos; confiamos no território. Nossa parceria com o Colab garante que cada dado seja validado por quem vive a cidade.
       </p>
       
       <Button variant="outline" className="mb-16">Solicitar Documentação Técnica</Button>
       
       <div className="space-y-4">
         <MethodologyStep 
           number="01"
           title="Escuta Territorial Inteligente"
           icon={<Radio size={20}/>}
           text="Varredura contínua de redes sociais, imprensa, sensores IoT e bases legadas. Capturamos o ruído urbano antes que ele vire manchete."
         />
         <MethodologyStep 
           number="02"
           title="Predição & Priorização"
           icon={<TrendingUp size={20}/>}
           text="IA contextual classifica eventos por criticidade. Nossos modelos antecipam alagamentos, crises de segurança e falhas urbanas."
         />
         <MethodologyStep 
           number="03"
           title="Verificação Colaborativa (Colab)"
           icon={<Users size={20}/>}
           text="Ativação da base de usuários do Colab para validar ocorrências em campo. Dados auditados e precisos."
           stats="97% de Informação Conclusiva"
         />
         <MethodologyStep 
           number="04"
           title="Ação & Governança"
           icon={<Activity size={20}/>}
           text="Despacho automático para as equipes responsáveis. Painéis de controle em tempo real para gestores."
         />
         <MethodologyStep 
           number="05"
           title="Aprendizado Contínuo"
           icon={<BrainCircuit size={20}/>}
           text="O sistema aprende com cada resolução, criando um banco de inteligência preditiva para o futuro."
         />
       </div>
    </div>
  </div>
);

const PapersView = () => (
  <div className="bg-mist min-h-screen pt-32 pb-24 animate-in fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-serif font-bold text-midnight mb-12">Biblioteca de Conhecimento</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PaperCard 
             year="2026"
             category="Trend Report"
             title="A Era da Governança Figital"
             description="Análise profunda sobre a fusão de camadas físicas, digitais e sociais na gestão pública moderna. O relatório definitivo sobre o futuro das cidades."
        />
        <PaperCard 
             year="2025"
             category="Whitepaper"
             title="O Custo do Ruído Urbano"
             description="Quanto cidades e empresas perdem por não escutarem os sinais do território? Uma análise econômica de R$ 50 bilhões."
        />
        <PaperCard 
             year="2025"
             category="Case Study"
             title="Segurança por Ambiência"
             description="Aplicando a teoria das janelas quebradas com IA: como a iluminação preditiva reduziu crimes em áreas monitoradas."
        />
        <PaperCard 
             year="2024"
             category="Research"
             title="Behavioral AI na Saúde Pública"
             description="Utilizando análise de sentimento para prever surtos epidêmicos antes dos hospitais lotarem."
        />
        <PaperCard 
             year="2024"
             category="Metodologia"
             title="Auditoria Cidadã Digital"
             description="Como o modelo Colab transformou a fiscalização de obras públicas em um processo transparente e participativo."
        />
        <PaperCard 
             year="2024"
             category="GovTech"
             title="A Cidade como Plataforma"
             description="O guia definitivo para transformar prefeituras analógicas em sistemas operacionais territoriais."
        />
      </div>
    </div>
  </div>
);

// --- SYSTEM VIEW COMPONENTS (Dashboard + AI Terminal) ---

const SystemView = ({ apiKey }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // AI State
  const [aiInput, setAiInput] = useState('');
  const [terminalLog, setTerminalLog] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [aiMode, setAiMode] = useState('thinking');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageSize, setImageSize] = useState('1K');
  const fileInputRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLog]);

  const addToLog = (type, content, meta) => {
    setTerminalLog(prev => [...prev, {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content,
      timestamp: new Date(),
      meta
    }]);
  };

  // Gemini Handler
  const executeAI = async () => {
    if (!apiKey) return;
    if (!aiInput.trim() && aiMode !== 'visual_analysis') return;

    setIsThinking(true);
    // Add user input to log
    addToLog('user', aiInput || (uploadedImage ? '[Image Uploaded]' : '...'));

    try {
      const ai = new GoogleGenAI({ apiKey });
      let responseContent = '';
      let responseType = 'system';
      let metaInfo = '';

      if (aiMode === 'thinking') {
        metaInfo = 'gemini-3-pro-preview (Thinking: 32k budget)';
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: [{ parts: [{ text: aiInput }] }],
          config: {
             thinkingConfig: { thinkingBudget: 32768 },
          }
        });
        responseContent = response.text || "Sem resposta.";
      } 
      else if (aiMode === 'chat') {
        metaInfo = 'gemini-3-pro-preview';
        const history = terminalLog
          .filter(entry => entry.type === 'user' || entry.type === 'system')
          .slice(-10)
          .map(entry => ({
            role: entry.type === 'user' ? 'user' : 'model',
            parts: [{ text: entry.content }]
          }));
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: [...history, { role: 'user', parts: [{ text: aiInput }] }]
        });
        responseContent = response.text || "Sem resposta.";
      }
      else if (aiMode === 'fast') {
        metaInfo = 'gemini-2.5-flash-lite';
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-lite',
          contents: [{ parts: [{ text: aiInput }] }]
        });
        responseContent = response.text || "Sem resposta.";
      }
      else if (aiMode === 'behavioral') {
         metaInfo = 'Behavioral Analyst';
         const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [{ text: aiInput }] }],
            config: {
                systemInstruction: "Você é o Chief Behavioral Officer da Korun. Analise a entrada sob a ótica da Ciência Comportamental (Behavioral Science). Identifique vieses cognitivos, sentimentos coletivos e proponha 'Nudges' (intervenções comportamentais) para resolver o problema urbano.",
            }
         });
         responseContent = response.text || "Sem análise comportamental.";
      }
      else if (aiMode === 'visual_gen') {
        metaInfo = `gemini-3-pro-image-preview (${imageSize})`;
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          contents: { parts: [{ text: aiInput }] },
          config: {
            imageConfig: {
               imageSize: imageSize
            }
          }
        });
        
        // Extract Image
        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
             for (const part of parts) {
                if (part.inlineData) {
                   responseContent = part.inlineData.data;
                   responseType = 'image';
                }
             }
        }
        if (!responseContent) responseContent = "Erro ao gerar imagem.";
      }
      else if (aiMode === 'voice') {
        metaInfo = 'gemini-2.5-flash-preview-tts';
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-preview-tts',
            contents: [{ parts: [{ text: aiInput }] }],
            config: {
                responseModalities: ['AUDIO'],
                speechConfig: {
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
                }
            }
        });
        const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (audioData) {
            responseContent = audioData;
            responseType = 'audio';
        } else {
            responseContent = "Erro ao gerar áudio.";
            responseType = 'error';
        }
      } 
      else if (aiMode === 'visual_analysis' && uploadedImage) {
        metaInfo = 'gemini-2.5-flash-image';
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    { inlineData: { mimeType: 'image/jpeg', data: uploadedImage } },
                    { text: aiInput || "Analyze this image for urban risks." }
                ]
            }
        });
        responseContent = response.text || "Análise visual concluída.";
      }

      addToLog(responseType, responseContent, metaInfo);

    } catch (error) {
      console.error(error);
      addToLog('error', "Erro de execução. Verifique console ou chave API.");
    } finally {
      setIsThinking(false);
      setAiInput(''); // Clear input
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      blobToBase64(file).then(base64 => setUploadedImage(base64));
    }
  };

  return (
    <div className="bg-midnight min-h-screen pt-24 pb-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
          <div>
            <span className="text-gold font-mono text-xs uppercase tracking-widest mb-1 block">Live Environment</span>
            <h2 className="text-3xl font-display font-bold">Korun OS <span className="text-teal text-lg font-normal">v3.0.0</span></h2>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded">
             <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-teal text-white' : 'text-gray-400 hover:text-white'}`}>
                Dashboard CIT
             </button>
             <button onClick={() => setActiveTab('terminal')} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${activeTab === 'terminal' ? 'bg-gold text-midnight' : 'text-gray-400 hover:text-white'}`}>
                AI Terminal
             </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
           <div className="animate-in fade-in">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                 <StatWidget title="Sinais Captados (CIT)" value="854.710" sub="Escuta Territorial Ativa" trend="+12%" positive />
                 <StatWidget title="Alerta SPR" value="Ativo" sub="Predição Climática" trend="Risco" positive={false} />
                 <StatWidget title="Verificações Colab" value="1.204" sub="Auditoria de Campo" trend="+97%" positive />
                 <StatWidget title="Eficiência Resposta" value="94%" sub="SLA Médio: 14min" trend="+4%" positive />
              </div>

              {/* Main Dashboard Visual */}
              <div className="grid md:grid-cols-3 gap-8 h-[500px]">
                 <div className="md:col-span-2 bg-midnight-light border border-white/10 rounded p-6 relative overflow-hidden group">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                       <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded text-xs font-bold animate-pulse">SPR ALERT</span>
                       <span className="bg-black/40 text-gray-300 border border-white/10 px-2 py-1 rounded text-xs">Zona Norte</span>
                    </div>
                    {/* Simulated Map */}
                    <div className="absolute inset-0 opacity-40">
                       <svg width="100%" height="100%">
                         <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                           <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2C3E50" strokeWidth="0.5"/>
                         </pattern>
                         <rect width="100%" height="100%" fill="url(#mapGrid)" />
                         {/* Heatmap spots */}
                         <circle cx="30%" cy="40%" r="80" fill="#E4C46F" filter="blur(40px)" opacity="0.4" />
                         <circle cx="70%" cy="60%" r="60" fill="#008F89" filter="blur(40px)" opacity="0.3" />
                         {/* Pins */}
                         <circle cx="30%" cy="40%" r="4" fill="#E4C46F" className="animate-pulse" />
                       </svg>
                    </div>
                    <div className="absolute bottom-6 left-6 max-w-sm">
                       <h3 className="font-display font-bold text-xl mb-1">Movimentação Atípica Detectada</h3>
                       <p className="text-gray-400 text-sm">Alta concentração de relatos sobre falha de iluminação na Av. Principal. Risco de segurança elevado.</p>
                       <div className="mt-4 flex gap-2">
                          <Button variant="dark" className="py-2 text-xs">Despachar Equipe</Button>
                          <Button variant="outline" className="py-2 text-xs">Verificar (Colab)</Button>
                       </div>
                    </div>
                 </div>

                 <div className="bg-midnight-light border border-white/10 rounded p-6 flex flex-col">
                    <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                       <Activity size={16} className="text-teal"/> Feed de Protocolos
                    </h3>
                    <div className="space-y-4 overflow-y-auto flex-grow pr-2">
                       {[
                         { time: '10:42', cat: 'Segurança', text: 'Falha iluminação pública - Setor 4', priority: 'High' },
                         { time: '10:38', cat: 'Mobilidade', text: 'Semáforo intermitente - Centro', priority: 'Med' },
                         { time: '10:15', cat: 'Zeladoria', text: 'Descarte irregular - Via Sul', priority: 'Low' },
                         { time: '09:50', cat: 'Social', text: 'Acolhimento solicitado - Pça Matriz', priority: 'Med' },
                       ].map((item, i) => (
                         <div key={i} className="bg-white/5 p-3 rounded border-l-2 border-teal hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                               <span>{item.time}</span>
                               <span className={item.priority === 'High' ? 'text-gold' : 'text-teal'}>{item.cat}</span>
                            </div>
                            <p className="text-sm font-medium text-gray-200">{item.text}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        ) : (
           <div className="animate-in slide-in-from-right duration-300 grid md:grid-cols-3 gap-8 h-[650px]">
              {/* Terminal Controls Sidebar */}
              <div className="bg-midnight-light border border-white/10 rounded p-4 flex flex-col overflow-y-auto">
                 <h3 className="text-gold font-mono text-xs uppercase tracking-widest mb-4 sticky top-0 bg-midnight-light z-10 py-2">Módulos de Inteligência</h3>
                 
                 <div className="space-y-2 flex-grow">
                    {[
                      { id: 'thinking', icon: BrainCircuit, label: 'Strategic Thinking', sub: 'Gemini 3 Pro + Thinking', color: 'text-teal' },
                      { id: 'chat', icon: MessageSquare, label: 'Chatbot Assistant', sub: 'Conversational AI', color: 'text-blue-400' },
                      { id: 'fast', icon: Lightning, label: 'Fast Response', sub: 'Gemini Flash Lite', color: 'text-yellow-400' },
                      { id: 'visual_gen', icon: Palette, label: 'Visual Generation', sub: 'Nano Banana Pro', color: 'text-pink-400' },
                      { id: 'behavioral', icon: Users, label: 'Behavioral Analysis', sub: 'Sentiment & Bias', color: 'text-gold' },
                      { id: 'voice', icon: Mic, label: 'Voice Briefing', sub: 'Text-to-Speech', color: 'text-purple-500' },
                      { id: 'visual_analysis', icon: ImageIcon, label: 'Visual Analysis', sub: 'Image Upload', color: 'text-blue-500' },
                    ].map((mode) => (
                       <button 
                         key={mode.id}
                         onClick={() => setAiMode(mode.id)}
                         className={`w-full text-left p-3 rounded flex items-center gap-3 transition-all ${aiMode === mode.id ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5 opacity-70 hover:opacity-100'}`}
                       >
                          <mode.icon size={18} className={mode.color} />
                          <div>
                             <div className="font-bold text-xs text-white">{mode.label}</div>
                             <div className="text-[10px] text-gray-400">{mode.sub}</div>
                          </div>
                       </button>
                    ))}
                 </div>

                 {/* Contextual Controls */}
                 <div className="mt-4 border-t border-white/10 pt-4">
                    {aiMode === 'visual_analysis' && (
                       <label className="block w-full cursor-pointer bg-white/5 border border-dashed border-gray-600 rounded p-3 text-center hover:bg-white/10 transition-colors">
                          <Upload className="mx-auto mb-1 text-gray-400" size={16} />
                          <span className="text-[10px] text-gray-400">Upload Imagem</span>
                          <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                          {uploadedImage && <div className="mt-1 text-[10px] text-teal">Imagem carregada</div>}
                       </label>
                    )}
                    
                    {aiMode === 'visual_gen' && (
                       <div className="space-y-2">
                          <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Resolução</label>
                          <div className="flex bg-white/5 rounded p-1">
                             {['1K', '2K', '4K'].map(size => (
                                <button
                                  key={size}
                                  onClick={() => setImageSize(size)}
                                  className={`flex-1 text-xs py-1 rounded transition-colors ${imageSize === size ? 'bg-teal text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                  {size}
                                </button>
                             ))}
                          </div>
                       </div>
                    )}
                 </div>
              </div>

              {/* Terminal Log Output */}
              <div className="md:col-span-2 bg-black border border-white/10 rounded flex flex-col relative overflow-hidden">
                 <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">korun-terminal // session_active</span>
                 </div>

                 <div className="flex-grow overflow-y-auto p-4 space-y-6 font-mono text-sm scrollbar-thin scrollbar-thumb-teal/20 scrollbar-track-transparent">
                    {terminalLog.length === 0 && (
                       <div className="text-gray-600 italic text-center mt-20">
                          Inicialize um módulo de inteligência para começar...
                       </div>
                    )}
                    
                    {terminalLog.map((entry) => (
                       <div key={entry.id} className={`flex flex-col gap-1 ${entry.type === 'user' ? 'items-end' : 'items-start'}`}>
                          <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase">
                             <span>{entry.type === 'user' ? 'User' : 'Korun Core'}</span>
                             <span>•</span>
                             <span>{entry.timestamp.toLocaleTimeString()}</span>
                             {entry.meta && <span className="text-teal">[{entry.meta}]</span>}
                          </div>
                          
                          <div className={`max-w-[90%] p-3 rounded text-sm ${
                             entry.type === 'user' ? 'bg-white/10 text-white rounded-tr-none' : 
                             entry.type === 'error' ? 'bg-red-500/10 text-red-300 border border-red-500/30' :
                             'bg-midnight-light border border-teal/30 text-gray-200 rounded-tl-none'
                          }`}>
                             {entry.type === 'image' ? (
                                <img src={`data:image/png;base64,${entry.content}`} alt="Generated" className="rounded max-w-full" />
                             ) : entry.type === 'audio' ? (
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center animate-pulse">
                                      <Mic size={14} className="text-teal"/>
                                   </div>
                                   <button onClick={() => playAudio(entry.content)} className="text-teal hover:underline text-xs">Replay Audio Briefing</button>
                                </div>
                             ) : (
                                <div className="whitespace-pre-wrap leading-relaxed">{entry.content}</div>
                             )}
                          </div>
                       </div>
                    ))}
                    
                    {isThinking && (
                       <div className="flex items-center gap-2 text-teal animate-pulse text-xs mt-2">
                          <Loader2 size={12} className="animate-spin" /> 
                          {aiMode === 'thinking' ? 'Reasoning with Gemini 3 Pro...' : 'Processing...'}
                       </div>
                    )}
                    <div ref={terminalEndRef} />
                 </div>

                 {/* Input Area */}
                 <div className="p-4 border-t border-white/10 bg-midnight-light">
                    <div className="flex gap-2">
                       <input 
                         type="text" 
                         className="flex-grow bg-black border border-gray-700 rounded px-4 py-2 text-white focus:border-teal outline-none font-mono text-sm placeholder-gray-600"
                         placeholder={
                           aiMode === 'visual_gen' ? "Descreva a imagem para gerar (ex: Mapa de calor urbano 4K)..." :
                           aiMode === 'chat' ? "Converse com o assistente..." :
                           "Digite um comando ou consulta..."
                         }
                         value={aiInput}
                         onChange={(e) => setAiInput(e.target.value)}
                         onKeyPress={(e) => e.key === 'Enter' && executeAI()}
                         disabled={isThinking}
                       />
                       <Button variant="primary" onClick={executeAI} disabled={isThinking || !apiKey} className="px-4">
                          {isThinking ? <Loader2 className="animate-spin"/> : <ArrowRight/>}
                       </Button>
                    </div>
                 </div>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

const GovernanceView = () => (
  <div className="bg-white min-h-screen pt-32 pb-24 animate-in fade-in">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-5xl font-serif font-bold text-midnight mb-8">Governança Figital</h2>
      <p className="text-xl text-graphite mb-12">
        A tecnologia é apenas o meio. A verdadeira inteligência territorial reside na capacidade de orquestrar a complexidade humana, física e digital em um único modelo de governança.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
         <div>
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000" 
              alt="Reunião de Governança" 
              className="rounded shadow-lg mb-6 filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <h3 className="text-2xl font-display font-bold text-midnight mb-4">O Modelo de Hélices</h3>
            <p className="text-graphite">
              A Korun atua como a plataforma integradora entre Governo, Academia, Setor Privado e Sociedade Civil. Nossos painéis não servem apenas para monitorar, mas para alinhar interesses e gerar consenso baseado em evidências.
            </p>
         </div>
         <div className="space-y-8">
            <div className="border-l-4 border-gold pl-6 py-2">
               <h4 className="text-lg font-bold text-midnight mb-2">Transparência Ativa</h4>
               <p className="text-sm text-graphite">Dados abertos por padrão. Transformamos caixas-pretas administrativas em dashboards públicos compreensíveis.</p>
            </div>
            <div className="border-l-4 border-teal pl-6 py-2">
               <h4 className="text-lg font-bold text-midnight mb-2">Responsividade em Tempo Real</h4>
               <p className="text-sm text-graphite">O fim da burocracia do papel. Decisões tomadas no ritmo que a cidade exige, com despacho automatizado.</p>
            </div>
            <div className="border-l-4 border-midnight pl-6 py-2">
               <h4 className="text-lg font-bold text-midnight mb-2">Inclusão Territorial</h4>
               <p className="text-sm text-graphite">Nossa IA detecta "silêncios de dados" para garantir que comunidades marginalizadas sejam ouvidas e atendidas com prioridade.</p>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const ContactView = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
        }
        if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setTimeout(() => {
                setIsSubmitted(true);
            }, 1000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    return (
        <div className="bg-midnight min-h-screen pt-32 pb-24 animate-in fade-in text-white">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-5xl font-serif font-bold mb-6 text-center">Inicie a Transformação</h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    Agende uma demonstração técnica do Sistema Operacional Korun.
                </p>

                {isSubmitted ? (
                    <div className="bg-white/5 p-8 rounded border border-teal/50 backdrop-blur-sm text-center animate-in zoom-in">
                        <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 text-teal">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                        <p className="text-gray-300">
                            Obrigado, {formData.name}. Nossa equipe de consultores entrará em contato em breve pelo email {formData.email}.
                        </p>
                        <Button variant="outline" className="mt-8 mx-auto" onClick={() => setIsSubmitted(false)}>
                            Enviar nova mensagem
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-teal uppercase tracking-widest">Nome Completo</label>
                                <input 
                                    name="name"
                                    type="text" 
                                    className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded px-4 py-3 focus:border-gold outline-none transition-colors`}
                                    placeholder="Seu nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-teal uppercase tracking-widest">Telefone</label>
                                <input 
                                    name="phone"
                                    type="text" 
                                    className={`w-full bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded px-4 py-3 focus:border-gold outline-none transition-colors`}
                                    placeholder="(XX) XXXXX-XXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-teal uppercase tracking-widest">Email Corporativo</label>
                            <input 
                                name="email"
                                type="email" 
                                className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded px-4 py-3 focus:border-gold outline-none transition-colors`}
                                placeholder="voce@organizacao.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-teal uppercase tracking-widest">Mensagem</label>
                            <textarea 
                                name="message"
                                className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded px-4 py-3 h-32 focus:border-gold outline-none transition-colors`}
                                placeholder="Descreva brevemente sua necessidade..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                        </div>

                        <Button variant="dark" className="w-full py-4 text-base">
                            Enviar Mensagem <ChevronRight size={20}/>
                        </Button>
                        
                         <div className="pt-6 border-t border-white/10 flex justify-center gap-8 text-sm text-gray-400">
                            <span className="flex items-center gap-2"><Phone size={16}/> (81) 99821-0427</span>
                            <span className="flex items-center gap-2"><MapPin size={16}/> Recife, Brasil</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyModal, setShowKeyModal] = useState(false);

  // Check for API Key on load
  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const handleSaveKey = (key) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
    setShowKeyModal(false);
  };

  const NavLink = ({ view, label }) => (
    <button 
      onClick={() => { setCurrentView(view); setIsMenuOpen(false); }}
      className={`text-sm font-medium tracking-wide transition-colors ${
        currentView === view 
          ? 'text-teal font-bold' 
          : 'text-gray-500 hover:text-midnight'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-teal selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        currentView === 'home' || currentView === 'system' || currentView === 'contact'
          ? 'bg-midnight/90 backdrop-blur border-b border-white/5 text-white' 
          : 'bg-white/90 backdrop-blur border-b border-gray-200 text-midnight'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setCurrentView('home')}
          >
            <KorunLogo className="w-10 h-10 group-hover:scale-105 transition-transform" dark={!(currentView === 'home' || currentView === 'system' || currentView === 'contact')} />
            <span className="font-display font-bold text-xl tracking-tight">KORUN</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentView('methodology')} className="text-sm font-medium hover:text-teal transition-colors">Metodologia</button>
            <button onClick={() => setCurrentView('papers')} className="text-sm font-medium hover:text-teal transition-colors">Papers</button>
            <button onClick={() => setCurrentView('governance')} className="text-sm font-medium hover:text-teal transition-colors">Governança</button>
            <button onClick={() => setCurrentView('system')} className="text-sm font-medium hover:text-teal transition-colors">O Sistema</button>
            
            <Button 
              variant={currentView === 'home' || currentView === 'system' || currentView === 'contact' ? 'dark' : 'primary'} 
              className="py-2 px-4"
              onClick={() => setCurrentView('contact')}
            >
              Falar com Consultor
            </Button>
            
            {!apiKey && (
               <button onClick={() => setShowKeyModal(true)} className="p-2 hover:bg-white/10 rounded-full" title="Configurar API">
                  <Key size={16} />
               </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-6 md:hidden text-midnight shadow-xl">
            <NavLink view="home" label="Home" />
            <NavLink view="methodology" label="Metodologia" />
            <NavLink view="papers" label="Papers & Reports" />
            <NavLink view="governance" label="Governança" />
            <NavLink view="system" label="O Sistema" />
            <NavLink view="contact" label="Contato" />
            <div className="pt-4 border-t border-gray-100">
               <Button className="w-full" onClick={() => { setCurrentView('contact'); setIsMenuOpen(false); }}>Fale Conosco</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main>
        {currentView === 'home' && <HomeView onChangeView={setCurrentView} />}
        {currentView === 'methodology' && <MethodologyView />}
        {currentView === 'papers' && <PapersView />}
        {currentView === 'system' && <SystemView apiKey={apiKey} />}
        {currentView === 'governance' && <GovernanceView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-midnight text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <KorunLogo className="w-8 h-8" dark={false} />
              <span className="font-display font-bold text-lg">KORUN INTELLIGENCE</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Consultoria líder em ciência comportamental e inteligência artificial aplicada à gestão de territórios complexos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-teal"><Globe size={20}/></a>
              <a href="#" className="text-gray-500 hover:text-teal"><MessageSquare size={20}/></a>
              <a href="#" className