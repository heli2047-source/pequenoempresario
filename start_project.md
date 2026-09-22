Aqui está uma especificação de **Handoff Técnica (System Prompt / Contexto Inicial)** pronta para você copiar e colar no seu agente de desenvolvimento ou IDE (Cursor Composer, Windsurf, Claude Code, Copilot Workspace, etc.).

O texto foi estruturado para que a IA entenda o contexto de negócios, a pilha técnica, o fluxo de build estático voltado à Hostinger e inicie o *scaffolding* do projeto sem gerar alucinações de arquitetura.

---

### Prompt de Handoff para o Agente / IDE

Copie o conteúdo abaixo para o contexto do seu agente:

# PROJETO: Pequeno Empresário (pequenoempresario.com.br)

# ROLE: Senior Fullstack Engineer & Technical SEO Specialist

# OBJETIVO: Inicializar a arquitetura de software de um portal de alta performance focado em apoiar pequenos empresários com tecnologia, SEO local, GEO e vendas.

---

## 1. CONTEXTO DO PROJETO & DIRETRIZES

* **Domínio de Produção:** [https://pequenoempresario.com.br](https://pequenoempresario.com.br)
* **Propósito:** Portal com guias práticos, tecnologia e estratégias para a inserção digital do pequeno empresário.
* **Modelo de Negócio Inicial:** Consultoria prática, mentoria digital e afiliação transparente.
* **Premissa Técnica:** Desempenho 100/100 no Core Web Vitals, soberania completa sobre dados e conteúdo (zero dependência de CMSs fechados). Todo o conteúdo deve ser versionado em Git via arquivos Markdown/MDX.
* **Hospedagem de Destino:** Hostinger (Deploy Estático - pasta `/dist` servida via Web Hosting / Apache com `.htaccess`).

---

## 2. PILHA TECNOLÓGICA (TECH STACK)

* **Framework Core:** Astro 5.x (modo estático: `output: 'static'`)
* **Estilização:** Tailwind CSS
* **Gerenciamento de Conteúdo:** Astro Content Collections com validação estrita de esquemas via Zod
* **Suporte a Componentes no Conteúdo:** `@astrojs/mdx`
* **SEO & Otimização:**
* `@astrojs/sitemap`
* `@astrojs/rss`
* Geração dinâmica de tags Open Graph, Twitter Cards e dados estruturados Schema.org (JSON-LD)


* **TypeScript:** Configuração estrita (`strict: true`)

---

## 3. ESTRUTURA DE DIRETÓRIOS OBRIGATÓRIA

Organize o projeto seguindo a estrutura padronizada abaixo:

pequenoempresario/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── .htaccess                # Regras de rewrite e cache para a Hostinger
├── src/
│   ├── assets/                  # Imagens locais otimizadas
│   ├── components/
│   │   ├── affiliate/
│   │   │   ├── AffiliateCard.astro     # Card de produto com marcação sponsored
│   │   │   └── BookRecommendation.astro
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── ShareButtons.astro      # Botões de redes sociais com Web Share API
│   │   ├── leads/
│   │   │   └── LeadForm.astro          # Formulário agnóstico de captura
│   │   └── seo/
│   │       ├── SeoMeta.astro           # Meta tags completas e Canonical
│   │       └── JsonLd.astro            # Esquemas Article, LocalBusiness, FAQPage
│   ├── content/
│   │   ├── config.ts            # Definição e validação dos esquemas Zod
│   │   └── blog/                # Artigos em .md e .mdx
│   ├── data/
│   │   └── affiliate-links.json # Base local para cloaking/redirecionamento de afiliados
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Shell HTML com fonts e head
│   │   └── PostLayout.astro     # Layout do artigo com leitura estimada e autor
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Rota dinâmica dos artigos
│   │   │   └── index.astro      # Listagem paginada
│   │   ├── go/
│   │   │   └── [slug].ts        # Rota de redirecionamento interno de afiliados (302)
│   │   ├── 404.astro
│   │   ├── index.astro          # Landing page principal
│   │   ├── rss.xml.ts           # Geração do feed RSS
│   │   └── sobre.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json

---

## 4. REQUISITOS TÉCNICOS ESPECÍFICOS

### A. Validação de Conteúdo (`src/content/config.ts`)

Defina a coleção `blog` com o esquema Zod contendo:

* `title`: string obrigatória
* `description`: string com limite recomendado de 160 caracteres
* `pubDate`: Date
* `updatedDate`: Date opcional
* `heroImage`: string opcional
* `tags`: array de strings (ex: 'seo-local', 'geo', 'afiliados', 'renda-online')
* `author`: string (default: "Heliezer Garcia")
* `draft`: boolean (default: false)
* `affiliateDisclosure`: boolean (default: false, para renderizar aviso legal)

### B. Sistema de Redirecionamento de Afiliados (Cloaking Seguro)

Crie um endpoint de rota estática ou gerador de páginas em `src/pages/go/[slug].ts`:

* Lê mapeamento a partir de `src/data/affiliate-links.json`.
* Gera um redirecionamento HTTP com atributos de segurança (`rel="sponsored nofollow"`).
* Estrutura JSON esperada:json
{
"livro-copywriting": {
"targetUrl": "[https://amazon.com.br/](https://amazon.com.br/)...",
"title": "Livro de Copywriting Recomendado"
}
}
```


```



### C. Estrutura de SEO, GEO e Schema.org

* Todo artigo deve injetar automaticamente metadados Schema.org em formato JSON-LD (`Article` ou `BlogPosting`).
* Fornecer suporte para componentes no MDX de respostas diretas no formato Q&A para otimização de mecanismos generativos (GEO / AI Overviews).

### D. Deploy na Hostinger (`public/.htaccess`)

Gere o arquivo de regras para garantir rotas limpas em servidores baseados em Apache/LiteSpeed:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ $1.html [L]

```

---

## 5. SEU PRIMEIRO PASSO AGORA:

1. Revise e inicialize a árvore de arquivos e dependências mínimas do projeto Astro.
2. Crie a configuração `astro.config.mjs` com as integrações `@astrojs/mdx` e `@astrojs/sitemap`.
3. Escreva o `src/content/config.ts` com a validação completa via Zod.
4. Forneça o componente `src/components/seo/SeoMeta.astro` preparado para receber títulos, descrições, imagens OG e canônicas.

```

***

### Próximos Passos no seu Terminal

Antes de pedir à sua IDE para codificar os componentes, execute o scaffolding inicial no terminal [cite: 3]:

```bash
# 1. Criação do projeto base
npm create astro@latest pequenoempresario -- --template minimal --typescript strict --no-install

# 2. Acesse a pasta
cd pequenoempresario

# 3. Instalação das dependências essenciais
npm install

# 4. Adição das integrações oficiais
npx astro add tailwind mdx sitemap

```

Depois de rodar esses comandos, basta abrir o diretório no editor e enviar a especificação acima para o agente começar a construir os layouts e componentes.