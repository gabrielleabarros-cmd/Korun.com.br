
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Menu, X, ArrowRight, Activity, BrainCircuit, Users, 
  TrendingUp, FileText, ChevronRight, Phone, MapPin, 
  LayoutDashboard, Database, ShieldCheck, Download, 
  BookOpen, Eye, Globe, Share2, Search, Cpu, Mic, 
  Image as ImageIcon, Play, MessageSquare, Loader2, Upload,
  Key, Lock
} from 'lucide-react';

// --- Assets & Icons ---

const KorunLogo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark = false }) => (
  <svg className={`${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke={dark ? "#0A1C2F" : "#F2F4F5"} strokeWidth="3" className="opacity-80"/> 
    <line x1="50" y1="5" x2="50" y2="95" stroke={dark ? "#008F89" : "#E4C46F"} strokeWidth="2"/> 
    <circle cx="50" cy="50" r="8" fill={dark ? "#008F89" : "#E4C46F"}>
       <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'editorial' | 'dark' | 'ghost'; 
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, disabled }) => {
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

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const playAudio = async (base64Audio: string) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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

// --- Components ---

const ApiKeyModal: React.FC<{ onSave: (key: string) => void }> = ({ onSave }) => {
  const [key, setKey] = useState('');

  return (
    <div className="fixed inset-0 z-[100] bg-midnight/95 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full p-8 rounded shadow-2xl border-t-4 border-teal">
        <div className="flex justify-center mb-6">
          <KorunLogo className="w-16 h-16" dark={true} />
        </div>
        <h2 className="text-2xl font-display font-bold text-midnight mb-2 text-center">Configuração do Sistema</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Para ativar a inteligência artificial da Korun (Gemini), insira sua chave de API abaixo. Ela será salva localmente no seu navegador.
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
          Iniciar Sistema <ArrowRight size={16} />
        </Button>
        
        <p className="mt-4 text-xs text-center text-gray-400">
          Não tem uma chave? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-teal underline">Gerar no Google AI Studio</a>.
        </p>
      </div>
    </div>
  );
};

const StatWidget: React.FC<{ 
  title: string; 
  value: string; 
  sub: string; 
  trend?: string;
  positive?: boolean;
}> = ({ title, value, sub, trend, positive }) => (
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

const PaperCard: React.FC<{
  year: string;
  title: string;
  category: string;
  description: string;
}> = ({ year, title, category, description }) => (
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
      <Download size={16} className="mr-2 text-teal" /> Download Paper
    </div>
  </div>
);

const MethodologyStep: React.FC<{
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  stats?: string;
}> = ({ number, title, text, icon, stats }) => (
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

// --- Main Application ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [systemMode, setSystemMode] = useState<'simulation' | 'live'>('simulation');
  const [apiKey, setApiKey] = useState<string>('');
  
  // AI Demo State
  const [aiTab, setAiTab] = useState<'thinking' | 'tts' | 'image'>('thinking');
  const [aiInput, setAiInput] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check for API key in env or local storage
    const envKey = process.env.API_KEY;
    const storedKey = localStorage.getItem('korun_api_key');
    
    if (envKey) {
      setApiKey(envKey);
    } else if (storedKey) {
      setApiKey(storedKey);
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('korun_api_key', key);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setAiOutput(null);
    }
  };

  const executeAI = async () => {
    if (!apiKey) return;
    if (!aiInput && aiTab !== 'image') return;
    if (aiTab === 'image' && (!selectedImage || !aiInput)) return;

    setIsAiProcessing(true);
    setAiOutput(null);

    const ai = new GoogleGenAI({ apiKey });

    try {
      if (aiTab === 'thinking') {
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: aiInput,
          config: {
            thinkingConfig: { thinkingBudget: 32768 }
          }
        });
        setAiOutput(response.text || "No response generated.");
      } else if (aiTab === 'tts') {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-preview-tts',
          contents: { parts: [{ text: aiInput }] },
          config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
            }
          }
        });
        const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (audioData) {
          setAiOutput("Audio generated. Playing...");
          await playAudio(audioData);
        } else {
          setAiOutput("Failed to generate audio.");
        }
      } else if (aiTab === 'image') {
        if (!selectedImage) return;
        const base64Image = await blobToBase64(selectedImage);
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              { inlineData: { mimeType: selectedImage.type, data: base64Image } },
              { text: aiInput }
            ]
          }
        });
        
        let imageUrl = null;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
             if (part.inlineData) {
                imageUrl = `data:image/png;base64,${part.inlineData.data}`;
                break;
             }
        }
        if (imageUrl) {
            setAiOutput(imageUrl); 
        } else {
             setAiOutput("No image generated.");
        }
      }
    } catch (error) {
      console.error(error);
      setAiOutput(`Error: ${(error as Error).message}`);
    }
    setIsAiProcessing(false);
  };

  return (
    <div className="min-h-screen bg-mist selection:bg-teal selection:text-white font-sans text-midnight">
      {!apiKey && <ApiKeyModal onSave={handleSaveApiKey} />}
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'midnight-glass shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <KorunLogo className="w-10 h-10" dark={false} />
            <span className={`text-xl font-display font-bold tracking-tight text-white`}>KORUN</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Metodologia', 'Papers & Reports', 'O Sistema', 'Governança'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ & /g, '-').replace(' ', '-')}`}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Colab Partner</span>
            <Button variant="dark" className="!py-2 !px-5 !text-xs" onClick={() => {
              const el = document.getElementById('o-sistema');
              el?.scrollIntoView({ behavior: 'smooth' });
              setSystemMode('live');
            }}>
              Agendar Demo
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section (Midnight Authority) */}
      <section className="relative min-h-[90vh] flex items-center bg-midnight text-white overflow-hidden pt-20">
        {/* Abstract Data Streams */}
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
              <span className="text-xs font-mono tracking-widest text-gold uppercase">Behavioral Science & AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              Inteligência Territorial <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-white">que sente.</span>
            </h1>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
              Transformamos ruído urbano em decisão para governos e marcas. Unimos a escuta ativa da cidade, predição algorítmica e a verificação colaborativa do Colab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button variant="primary">
                 Ver Trend Report 2026
               </Button>
               <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                 Conhecer Metodologia
               </Button>
            </div>
          </div>

          {/* Hero Visual: Abstract Map */}
          <div className="hidden md:block relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-20"></div>
            {/* Visual simulation of neural connections over a territory */}
            <div className="w-full h-full relative opacity-80 animate-float">
                <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-gold rounded-full shadow-[0_0_20px_rgba(228,196,111,0.8)]"></div>
                <div className="absolute top-[50%] left-[60%] w-2 h-2 bg-teal rounded-full shadow-[0_0_15px_rgba(0,143,137,0.8)]"></div>
                <div className="absolute top-[70%] left-[30%] w-2 h-2 bg-teal rounded-full shadow-[0_0_15px_rgba(0,143,137,0.8)]"></div>
                
                <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 5px rgba(0,143,137,0.5))' }}>
                    <path d="M 150 150 Q 300 100 450 300 T 200 500" fill="none" stroke="#008F89" strokeWidth="1" strokeDasharray="5,5"/>
                    <path d="M 450 300 Q 500 500 200 500" fill="none" stroke="#E4C46F" strokeWidth="1" />
                </svg>
                
                {/* Floating Cards */}
                <div className="absolute top-[30%] right-[10%] bg-midnight-light/90 backdrop-blur border border-teal/30 p-4 rounded w-64 shadow-2xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-teal font-bold uppercase">Predição Climática</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded overflow-hidden mb-2">
                        <div className="h-full bg-red-500 w-[80%]"></div>
                    </div>
                    <p className="text-[10px] text-gray-400">Risco de alagamento em 2h.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Trust */}
      <div className="border-b border-gray-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos */}
           <div className="font-display font-bold text-xl text-midnight flex items-center gap-2"><div className="w-8 h-8 bg-teal rounded-full"></div> Colab</div>
           <div className="font-display font-bold text-xl text-midnight flex items-center gap-2"><div className="w-8 h-8 bg-midnight rounded-full"></div> Governo Federal</div>
           <div className="font-display font-bold text-xl text-midnight flex items-center gap-2"><div className="w-8 h-8 bg-gold rounded-full"></div> Prefeitura Olinda</div>
           <div className="font-display font-bold text-xl text-midnight flex items-center gap-2"><div className="w-8 h-8 bg-teal rounded-full"></div> The Decision Lab</div>
        </div>
      </div>

      {/* Reports & Insights (The "Paper" Section) */}
      <section id="papers-reports" className="py-24 bg-mist relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="text-teal font-bold uppercase tracking-widest text-xs mb-2 block">Research & Insights</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
                Ciência aplicada à decisão.
              </h2>
              <p className="text-graphite max-w-xl text-lg">
                Nossos relatórios combinam ciência de dados e análise comportamental para antecipar o futuro das cidades.
              </p>
            </div>
            <Button variant="editorial" className="bg-white">
              Ver Todos os Papers <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Report: 2026 Trend Report */}
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-sm shadow-xl">
               <div className="absolute inset-0 bg-midnight z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Trend Report"/>
               <div className="absolute bottom-0 left-0 p-10 z-20 text-white">
                  <span className="bg-gold text-midnight px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 inline-block">Destaque</span>
                  <h3 className="text-4xl font-display font-bold mb-4">Trend Report 2026: A Era da Cidade Cognitiva</h3>
                  <p className="text-gray-200 max-w-lg mb-6 text-sm">
                    Um estudo profundo sobre como a IA generativa e a verificação colaborativa estão redefinindo a governança urbana na América Latina.
                  </p>
                  <button className="flex items-center font-bold text-gold uppercase tracking-wide text-sm hover:text-white transition-colors">
                     Download PDF <Download size={16} className="ml-2" />
                  </button>
               </div>
            </div>

            {/* Secondary Papers */}
            <div className="flex flex-col gap-8">
                <PaperCard 
                  year="2025"
                  category="Case Study"
                  title="Olinda: Reduzindo o Tempo de Resposta em 40%"
                  description="Como a metodologia figital integrou defesa civil e redes sociais."
                />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section (White BG - Clean) */}
      <section id="metodologia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div className="sticky top-32 self-start">
            <span className="text-teal font-bold uppercase tracking-widest text-xs mb-2 block">Nosso Protocolo</span>
            <h2 className="text-4xl font-display font-bold text-midnight mb-6">
              Uma metodologia proprietária de <span className="text-teal">5 etapas.</span>
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-8">
              Integramos a ciência de dados com a verificação humana. Não confiamos apenas em algoritmos; confiamos no território. Nossa parceria com o Colab garante que cada dado seja validado por quem vive a cidade.
            </p>
            <Button variant="outline">
              Solicitar Documentação Técnica
            </Button>
          </div>

          <div className="space-y-4">
            <MethodologyStep 
              number="01"
              title="Escuta Territorial Inteligente"
              text="Varredura contínua de redes sociais, imprensa, sensores IoT e bases legadas. Capturamos o ruído urbano antes que ele vire manchete."
              icon={<Activity size={20} />}
            />
            <MethodologyStep 
              number="02"
              title="Predição & Priorização"
              text="IA contextual classifica eventos por criticidade. Nossos modelos antecipam alagamentos, crises de segurança e falhas urbanas."
              icon={<BrainCircuit size={20} />}
            />
            <MethodologyStep 
              number="03"
              title="Verificação Colaborativa (Colab)"
              text="Ativação da base de usuários do Colab para validar ocorrências em campo. Dados auditados e precisos."
              icon={<Users size={20} />}
              stats="97% de Informação Conclusiva"
            />
            <MethodologyStep 
              number="04"
              title="Ação & Governança"
              text="Despacho automático para as equipes responsáveis. Painéis de controle em tempo real para gestores."
              icon={<Share2 size={20} />}
            />
             <MethodologyStep 
              number="05"
              title="Aprendizado Contínuo"
              text="O sistema aprende com cada resolução, criando um banco de inteligência preditiva para o futuro."
              icon={<Database size={20} />}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Simulation & Live Terminal (The "System" - Dark Mode) */}
      <section id="o-sistema" className="py-24 bg-midnight relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%">
                <defs>
                   <pattern id="grid-small" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#fff"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-small)" />
             </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Plataforma Operacional</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              O Cérebro da Operação.
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <button 
                onClick={() => setSystemMode('simulation')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${systemMode === 'simulation' ? 'bg-teal text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                Simulação de Dashboard
              </button>
              <button 
                onClick={() => setSystemMode('live')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${systemMode === 'live' ? 'bg-gold text-midnight' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              >
                Korun Terminal (Live AI)
              </button>
            </div>
          </div>

          {systemMode === 'simulation' ? (
            <div className="bg-midnight-light border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-gold to-teal"></div>
              
              {/* Fake UI Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="text-white font-bold text-lg">Recife, PE</div>
                  <div className="bg-teal/20 text-teal px-2 py-0.5 rounded text-xs border border-teal/20 flex items-center gap-1">
                    <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div> Live
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>Risco Climático: <strong className="text-red-400">Alto</strong></span>
                  <span>Sentimento Social: <strong className="text-gold">Neutro</strong></span>
                </div>
              </div>

              {/* Widgets Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <StatWidget title="Sinais Captados" value="854.7k" sub="Últimas 24h" trend="+12%" positive={true} />
                <StatWidget title="Alertas Críticos" value="12" sub="Necessitam Ação" trend="Urgente" positive={false} />
                <StatWidget title="Verificações Colab" value="342" sub="Em andamento" trend="97% Validados" positive={true} />
                <StatWidget title="Tempo de Resposta" value="42min" sub="Média Geral" trend="-40%" positive={true} />
              </div>

              {/* Main Visual Area */}
              <div className="grid md:grid-cols-3 gap-6 h-96">
                <div className="md:col-span-2 bg-midnight border border-white/5 rounded relative overflow-hidden">
                  {/* Map Simulation */}
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-30 invert mix-blend-overlay"></div>
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
                  
                  {/* Pins */}
                  <div className="absolute top-[40%] left-[45%] text-gold animate-bounce"><MapPin size={24} fill="#E4C46F" /></div>
                  <div className="absolute top-[30%] left-[50%] text-teal"><MapPin size={24} fill="#008F89" /></div>
                </div>
                
                <div className="bg-midnight border border-white/5 rounded p-4 flex flex-col">
                  <h5 className="text-gray-400 text-xs uppercase tracking-widest mb-4">Feed de Ocorrências</h5>
                  <div className="space-y-4 overflow-hidden relative">
                    {[
                      { type: 'Clima', text: 'Alerta de alagamento: Av. Agamenon', time: '2m atrás', color: 'text-red-400' },
                      { type: 'Social', text: 'Viralização: Falta de luz no Ibura', time: '12m atrás', color: 'text-gold' },
                      { type: 'Colab', text: 'Verificação: Buraco tapado', time: '45m atrás', color: 'text-teal' },
                      { type: 'Sensor', text: 'Nível do rio Capibaribe normal', time: '1h atrás', color: 'text-gray-400' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm border-b border-white/5 pb-2">
                        <div className={`w-1 h-full ${item.color.replace('text', 'bg')} rounded`}></div>
                        <div>
                          <div className={`text-xs font-bold ${item.color}`}>{item.type}</div>
                          <div className="text-gray-300">{item.text}</div>
                          <div className="text-gray-600 text-[10px]">{item.time}</div>
                        </div>
                      </div>
                    ))}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-midnight to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-midnight-light border border-gold/30 rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-midnight border-b border-white/5 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase">
                   <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                   Korun Terminal v2.0
                 </div>
                 <div className="flex gap-2">
                   <Button 
                      variant="ghost" 
                      onClick={() => setAiTab('thinking')}
                      className={`${aiTab === 'thinking' ? 'text-white bg-white/10' : 'text-gray-500'}`}
                   >
                     <Cpu size={16} /> Thinking Mode
                   </Button>
                   <Button 
                      variant="ghost" 
                      onClick={() => setAiTab('tts')}
                      className={`${aiTab === 'tts' ? 'text-white bg-white/10' : 'text-gray-500'}`}
                   >
                     <Mic size={16} /> Voice Briefing
                   </Button>
                   <Button 
                      variant="ghost" 
                      onClick={() => setAiTab('image')}
                      className={`${aiTab === 'image' ? 'text-white bg-white/10' : 'text-gray-500'}`}
                   >
                     <ImageIcon size={16} /> Visual Edit
                   </Button>
                 </div>
              </div>

              <div className="flex-grow p-8 flex flex-col">
                <div className="flex-grow bg-midnight/50 rounded-lg border border-white/5 p-6 mb-6 overflow-y-auto font-mono text-sm">
                  {!aiOutput && !isAiProcessing && (
                    <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
                      {aiTab === 'thinking' && <BrainCircuit size={48} className="text-teal/50" />}
                      {aiTab === 'tts' && <Mic size={48} className="text-teal/50" />}
                      {aiTab === 'image' && <ImageIcon size={48} className="text-teal/50" />}
                      <p>System Ready. Waiting for input...</p>
                    </div>
                  )}

                  {isAiProcessing && (
                     <div className="h-full flex flex-col items-center justify-center text-gold gap-4">
                       <Loader2 size={32} className="animate-spin" />
                       <p className="tracking-widest uppercase text-xs">Processing Data...</p>
                     </div>
                  )}

                  {aiOutput && aiTab !== 'image' && (
                    <div className="whitespace-pre-wrap text-gray-200 leading-relaxed">
                      <span className="text-teal font-bold mr-2">{'>'}</span> {aiOutput}
                    </div>
                  )}

                  {aiTab === 'image' && (
                    <div className="h-full flex items-center justify-center gap-4">
                      {imagePreview && (
                        <div className="relative group">
                          <img src={imagePreview} alt="Original" className="max-h-64 rounded border border-white/10" />
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">Original</div>
                        </div>
                      )}
                      {aiOutput && aiTab === 'image' && !aiOutput.startsWith('Error') && (
                         <>
                          <ArrowRight className="text-gold" />
                          <div className="relative group">
                            <img src={aiOutput} alt="Generated" className="max-h-64 rounded border border-gold/30 shadow-[0_0_15px_rgba(228,196,111,0.2)]" />
                             <div className="absolute bottom-2 left-2 bg-gold text-midnight font-bold text-[10px] px-2 py-1 rounded">Edited</div>
                          </div>
                         </>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-midnight border border-white/10 rounded-lg p-2 flex gap-2 items-center relative">
                   {aiTab === 'image' && (
                     <>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageSelect}
                      />
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                        title="Upload Image"
                      >
                        <Upload size={20} />
                      </button>
                     </>
                   )}
                   <input 
                    type="text" 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && executeAI()}
                    placeholder={
                      aiTab === 'thinking' ? "Ask complex reasoning queries..." :
                      aiTab === 'tts' ? "Enter text to convert to speech..." :
                      "Describe how to edit the image (e.g., 'Add a retro filter')..."
                    }
                    className="flex-grow bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono text-sm px-2"
                   />
                   <Button 
                     variant="dark" 
                     className="!py-2 !px-4" 
                     onClick={executeAI}
                     disabled={isAiProcessing || (aiTab === 'image' && !selectedImage)}
                   >
                     {isAiProcessing ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
                   </Button>
                </div>
                {aiTab === 'thinking' && <p className="text-[10px] text-gray-500 mt-2 text-right">Powered by Gemini 3 Pro (Thinking Budget: 32k)</p>}
                {aiTab === 'tts' && <p className="text-[10px] text-gray-500 mt-2 text-right">Powered by Gemini 2.5 Flash TTS</p>}
                {aiTab === 'image' && <p className="text-[10px] text-gray-500 mt-2 text-right">Powered by Gemini 2.5 Flash Image</p>}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Footer (Midnight Authority) */}
      <footer className="bg-midnight pt-24 pb-12 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <KorunLogo className="w-8 h-8" dark={false} />
                <span className="text-2xl font-display font-bold">KORUN</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                Sistema Operacional Territorial. Transformamos ruído urbano em decisão através de ciência de dados, IA e verificação colaborativa.
              </p>
              <div className="flex gap-4">
                 <Button variant="dark" className="!py-2 !px-4">Acessar Sistema</Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Plataforma</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Escuta Inteligente</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Predição Climática</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Verificação Colab</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Segurança Pública</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Phone size={16} className="text-teal"/> (81) 99821-0427</li>
                <li className="flex items-center gap-2"><Globe size={16} className="text-teal"/> contato@korun.io</li>
                <li className="flex items-center gap-2"><MapPin size={16} className="text-teal"/> Recife, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 Korun Intelligence. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
               <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
