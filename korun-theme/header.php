<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Consultoria de Ciência Comportamental & IA aplicadas à gestão territorial. Transformamos ruído em decisão para governos e marcas." />
    <meta property="og:title" content="Korun — Inteligência Territorial & Ciência Comportamental" />
    <meta property="og:description" content="Não apenas dados. Entendemos o comportamento humano nas cidades para prever riscos e guiar decisões." />
    <meta property="og:type" content="website" />

    <!-- Tailwind CSS (via CDN for portability) -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

    <!-- Theme Configuration -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Manrope', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
            colors: {
              // Brand Manual Palette
              midnight: {
                DEFAULT: '#0A1C2F', // Deep Midnight (Authority)
                light: '#182B42',
              },
              teal: {
                DEFAULT: '#008F89', // Korun Teal (Science)
                dim: 'rgba(0, 143, 137, 0.1)',
              },
              gold: {
                DEFAULT: '#E4C46F', // Signal Gold (Core)
                dim: 'rgba(228, 196, 111, 0.1)',
              },
              mist: {
                DEFAULT: '#F2F4F5', // Gray Mist (Editorial BG)
                dark: '#E2E4E6',
              },
              graphite: {
                DEFAULT: '#54636C', // Soft Graphite (Text)
                dark: '#2C3E50',
              }
            },
            animation: {
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              }
            }
          }
        }
      }
    </script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
        color: #0A1C2F;
        background-color: #F2F4F5;
      }

      h1, h2, h3, h4 {
        font-family: 'Manrope', sans-serif;
      }

      .serif {
        font-family: 'Playfair Display', serif;
      }

      /* Editorial Utilities */
      .glass-card {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      .midnight-glass {
        background: rgba(10, 28, 47, 0.85);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #F2F4F5;
      }
      ::-webkit-scrollbar-thumb {
        background: #008F89;
        border-radius: 4px;
      }
    </style>

    <!-- Import map: resolves the bare module imports in app.js (React 19, Lucide, Gemini SDK) -->
    <script type="importmap">
    {
      "imports": {
        "lucide-react": "https://aistudiocdn.com/lucide-react@^0.555.0",
        "react/": "https://aistudiocdn.com/react@^19.2.0/",
        "react": "https://aistudiocdn.com/react@^19.2.0",
        "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
        "@google/genai": "https://aistudiocdn.com/@google/genai@^1.30.0"
      }
    }
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
