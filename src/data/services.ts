export interface SubService {
  title: string;
  badge?: string;
  description: string;
  deliverables?: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  category: string;
  icon: string;
  tagline: string;
  description: string;
  colorClass: string;
  services: SubService[];
  whatsappMessage: string;
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'diagnostico-inteligencia',
    title: '1. Diagnóstico & Inteligência',
    category: 'Estratégia & ROI',
    icon: '🧠',
    tagline: 'O ponto de partida para não desperdiçar tempo nem orçamento',
    description:
      'Avaliamos a presença digital atual da sua empresa e definimos um plano de ação prático, com metas claras e acompanhamento de métricas reais.',
    colorClass: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
    whatsappMessage: 'Olá, Heliezer! Quero agendar um diagnóstico digital para a minha empresa.',
    services: [
      {
        title: 'Consultoria e Diagnóstico Digital',
        badge: 'Sob Medida',
        description:
          'Raio-x completo da sua presença online e da concorrência na sua região para identificar onde estão as oportunidades imediatas de vendas.',
        deliverables: ['Diagnóstico de maturidade digital', 'Plano de ação com prioridades claras', 'Orientação direta para tomada de decisão']
      },
      {
        title: 'Web Analytics e Métricas de ROI',
        badge: 'Métricas Reais',
        description:
          'Implementação profissional de ferramentas analíticas para medir exatamente quantos contatos e vendas cada canal digital está gerando.',
        deliverables: ['Configuração do Google Analytics 4', 'Rastreamento de conversões e orçamentos', 'Relatórios simples focados em retorno financeiro']
      }
    ]
  },
  {
    id: 'estrutura-conversao',
    title: '2. Estrutura & Conversão',
    category: 'Canais Próprios',
    icon: '🕸️',
    tagline: 'Sua presença online própria, veloz e pronta para fechar negócios',
    description:
      'Construímos páginas e lojas virtuais de alto desempenho que você controla por completo, sem depender apenas de redes sociais de terceiros.',
    colorClass: 'from-cyan-500/10 to-teal-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
    whatsappMessage: 'Olá, Heliezer! Gostaria de desenvolver um site, landing page ou loja virtual para minha empresa.',
    services: [
      {
        title: 'Desenvolvimento de Sites e Landing Pages',
        badge: 'Alta Conversão',
        description:
          'Páginas institucionais modernas e páginas de vendas ultrarrápidas, projetadas para transformar visitantes em mensagens diretas no WhatsApp.',
        deliverables: ['Velocidade máxima (100/100 Core Web Vitals)', 'Design adaptado para celulares (Mobile-First)', 'Botões estratégicos de contato e chamada para ação']
      },
      {
        title: 'Criação de E-commerce para PMEs',
        badge: 'Vendas 24 Horas',
        description:
          'Montagem e configuração de lojas virtuais completas e fáceis de gerenciar para empresas que vendem produtos físicos.',
        deliverables: ['Catálogo organizado com variações de produto', 'Checkout transparente com PIX e cartão', 'Cálculo automático de frete e gestão de estoque']
      }
    ]
  },
  {
    id: 'atracao-visibilidade',
    title: '3. Atração & Visibilidade',
    category: 'Tráfego & Alcance',
    icon: '📢',
    tagline: 'Coloque sua marca na frente de quem já tem intenção de compra',
    description:
      'Combinamos anúncios patrocinados de resposta rápida com otimizações de busca orgânica para garantir fluxo contínuo de novos clientes.',
    colorClass: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    whatsappMessage: 'Olá, Heliezer! Quero atrair novos clientes com anúncios e SEO para minha empresa.',
    services: [
      {
        title: 'Gestão de Tráfego Pago (Anúncios)',
        badge: 'Resultados Rápidos',
        description:
          'Criação e otimização contínua de anúncios no Google Ads e Meta Ads (Instagram/Facebook) segmentados para o público certo da sua região.',
        deliverables: ['Campanhas na busca do Google e redes sociais', 'Segmentação geográfica e por interesse', 'Otimização focada em menor custo por contato']
      },
      {
        title: 'SEO Local & Google Meu Negócio',
        badge: 'Essencial para PMEs',
        description:
          'Configuração e otimização do seu Perfil no Google Maps para dominar as buscas de clientes que procuram seu serviço na sua cidade.',
        deliverables: ['Perfil do Google Meu Negócio completo e atraente', 'Estratégia prática para colher avaliações 5 estrelas', 'Postagens e fotos semanais de alta relevância']
      },
      {
        title: 'SEO Orgânico e Posicionamento',
        badge: 'Crescimento Contínuo',
        description:
          'Melhorias técnicas no seu site para conquistar posições de destaque nas buscas do Google sem depender exclusivamente de anúncios pagos.',
        deliverables: ['Pesquisa das palavras mais buscadas pelos clientes', 'Otimização de títulos, descrições e velocidade', 'Estruturação técnica para Google e IAs generativas']
      }
    ]
  },
  {
    id: 'relacionamento-retencao',
    title: '4. Relacionamento & Retenção',
    category: 'Fidelização & Recompra',
    icon: '🔄',
    tagline: 'Venda mais vezes para quem já conhece e confia no seu trabalho',
    description:
      'Estruturamos os canais de atendimento e automação para acelerar o tempo de resposta comercial e gerar compras recorrentes com custo zero de aquisição.',
    colorClass: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
    whatsappMessage: 'Olá, Heliezer! Quero estruturar o e-mail marketing e retenção de clientes para minha empresa.',
    services: [
      {
        title: 'E-mail Marketing e Automações',
        badge: 'Vendas Automáticas',
        description:
          'Comunicação automática pós-venda, lembretes e ofertas especiais enviadas no momento certo para reativar clientes que já compraram.',
        deliverables: ['Automação de boas-vindas e pós-venda', 'E-mails simples e diretos com ofertas especiais', 'Campanhas de recuperação de clientes inativos']
      },
      {
        title: 'Gestão de Redes Sociais',
        badge: 'Comunidade Ativa',
        description:
          'Acompanhamento e interação com seguidores para manter sua marca sempre presente no dia a dia da audiência.',
        deliverables: ['Monitoramento e resposta de comentários e directs', 'Identidade visual alinhada em todos os perfis', 'Relatório mensal de alcance e engajamento']
      }
    ]
  }
];
