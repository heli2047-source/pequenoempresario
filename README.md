# Pequeno Empresário (`pequenoempresario.com.br`)

> Portal de alta performance focado em apoiar pequenos empresários e empreendedores com tecnologia, SEO local, GEO (Generative Engine Optimization) e estratégias de vendas.

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (`output: 'static'`)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Conteúdo:** Astro Content Collections (Markdown/MDX com validação via Zod)
- **SEO & Performance:** `@astrojs/sitemap`, `@astrojs/rss`, Schema.org (JSON-LD), 100/100 Core Web Vitals
- **Hospedagem de Destino:** Hostinger / Apache (`.htaccess` com rewrite rules)

## 📦 Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala as dependências do projeto |
| `npm run dev` | Inicia o servidor local de desenvolvimento em `localhost:4321` |
| `npm run build` | Compila o site estático para a pasta `./dist` |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run check` | Executa a checagem de tipos Astro/TypeScript |

## 🏗️ Estrutura do Projeto

```text
pequenoempresario/
├── public/           # Arquivos estáticos (.htaccess, robots.txt, favicon)
├── src/
│   ├── assets/       # Imagens e mídias
│   ├── components/   # Componentes Astro (SEO, Layout, Afiliados, etc.)
│   ├── content/      # Artigos do blog (.md/.mdx) e esquemas Zod
│   ├── data/         # Dados e links de afiliados
│   ├── layouts/      # Templates e cascas HTML
│   ├── pages/        # Rotas estáticas e dinâmicas
│   └── styles/       # Estilos globais Tailwind
├── astro.config.mjs  # Configurações do Astro
└── tailwind.config.mjs
```

## 📄 Licença

Proprietário © Heliezer Garcia — Todos os direitos reservados.
