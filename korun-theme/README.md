# Korun Inteligência — Tema WordPress

Tema WordPress clássico (PHP puro, sem build) que implementa a landing page da Korun: **"Inteligência de sinais para decisão."**

## Seções da página inicial

1. **Hero** — título com destaque em azul, animação de partículas em canvas e etiquetas flutuantes (Sinais identificados / Riscos mapeados / Decisões orientadas).
2. **Clientes** — faixa com logos de empresas, governos e instituições.
3. **Nossas soluções** — cards Korun Sprint, Radar, Crisis e Advisory.
4. **Estatísticas** — +10 anos, +2.000 projetos, 156 cidades, 24/7.
5. **Como funciona** — Coletamos → Filtramos → Analisamos → Orientamos.
6. **Para quem é** — Governos, Marcas, Instituições e Agências.
7. **Insights** — cards estáticos que são substituídos automaticamente pelos 3 posts mais recentes quando o blog tiver conteúdo publicado.
8. **CTA** — "Leia o ambiente. Decida o próximo movimento."
9. **Footer** — colunas de links, contato e redes sociais.

## Instalação

1. Compacte a pasta `korun-theme` em um arquivo `.zip` **ou** copie a pasta diretamente para `wp-content/themes/` da sua instalação WordPress.
   ```bash
   zip -r korun-theme.zip korun-theme
   ```
2. No painel do WordPress, vá em **Aparência → Temas → Adicionar novo → Enviar tema** e envie o `.zip` (ou apenas ative o tema, se copiou a pasta via FTP/SSH).
3. Ative o tema **Korun Inteligência**.

A página inicial (`front-page.php`) é exibida automaticamente — não é preciso criar nenhuma página nem configurar "Página inicial estática".

## Personalização

- **Logo** — Aparência → Personalizar → Identidade do site. Sem logo enviado, o ícone "K" laranja padrão é usado.
- **Nome do site** — o texto ao lado do logo usa o título do site (Configurações → Geral).
- **Menus** — Aparência → Menus. Há duas posições: *Menu Principal* e *Menu do Rodapé*. Sem menu atribuído, o tema exibe o menu padrão com âncoras para as seções (`#solucoes`, `#como-funciona`, `#insights`, `#contato` etc.).
- **Insights** — publique posts normalmente; os 3 mais recentes (com imagem destacada e categoria) aparecem na seção Insights da home.
- **Cores** — todas as cores são variáveis CSS no topo de `style.css` (`--k-blue`, `--k-orange`, `--k-bg` etc.).
- **Contato** — telefone, e-mail e endereço estão em `footer.php`.
- **Imagens dos cards "Para quem é"** — hoje usam gradientes; para usar fotos, troque o `background-image` inline em `front-page.php` pela URL da imagem enviada à Biblioteca de Mídia.

## Estrutura

```
korun-theme/
├── style.css          # Cabeçalho do tema + todo o CSS
├── functions.php      # Suportes, menus, enqueue de assets, helpers
├── header.php         # Topo: logo, navegação, CTA, menu mobile
├── footer.php         # Rodapé: colunas, contato, redes, legal
├── front-page.php     # Landing page completa
├── index.php          # Listagem de posts (blog, arquivo, busca)
├── single.php         # Post individual
├── page.php           # Página estática
├── 404.php            # Página não encontrada
└── assets/
    └── js/main.js     # Menu mobile + animação de partículas
```

## Requisitos

- WordPress 6.0+
- PHP 7.4+
- Nenhum plugin é necessário. A única dependência externa é a fonte **Inter** (Google Fonts).
