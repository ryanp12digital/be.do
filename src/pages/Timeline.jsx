import React from 'react';

export default function Timeline() {
  const [expandedWeek, setExpandedWeek] = React.useState(null);

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  const Tag = ({ label, type }) => {
    const colors = {
      preparacao: 'bg-gray-100 text-gray-700 border-gray-300',
      aquecimento: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      captacao: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      remarketing: 'bg-purple-50 text-purple-700 border-purple-200',
      otimizacao: 'bg-blue-50 text-blue-700 border-blue-200',
      escala: 'bg-orange-50 text-orange-700 border-orange-200',
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 text-[10px] rounded-sm border ${colors[type]} uppercase tracking-wider`}>
        {label}
      </span>
    );
  };

  const weeks = [
    {
      id: 'semana0',
      title: 'Semana 0',
      subtitle: 'Pré-lançamento · Preparação',
      tag: 'preparacao',
      objective: 'Garantir que toda a infraestrutura técnica e de dados esteja pronta antes de ativar campanhas.',
      tasks: [
        {
          category: 'Pixel & Eventos',
          items: [
            'Instalar e testar Meta Pixel no site',
            'Configurar eventos: ViewContent, AddToCart, InitiateCheckout, Purchase, Lead',
            'Validar disparo correto de eventos (usar Meta Events Manager)',
            'Configurar parâmetros personalizados (categoria de produto, valor, etc.)',
          ]
        },
        {
          category: 'Bases de Dados (CRM)',
          items: [
            'Solicitar ao cliente: lista de clientes atuais + lista histórica (antes de fechar)',
            'Padronizar campos: nome, e-mail, telefone, data última compra, tipo de produto',
            'Subir listas no Meta Ads como públicos personalizados',
            'Criar segmentações: recência (30/90/180+ dias) e tipo de produto',
          ]
        },
        {
          category: 'Estrutura de Campanhas',
          items: [
            'Definir objetivos de campanha (Tráfego, Leads, Conversões)',
            'Criar estrutura de nomenclatura: [VERTENTE] | [FUNIL] | [TEMPERATURA] | [PÚBLICO]',
            'Preparar UTMs para rastreamento por campanha/conjunto',
            'Configurar páginas de destino (produtos, orçamento, contato)',
          ]
        },
        {
          category: 'Criativos',
          items: [
            'Produzir 3–5 criativos para topo (educativos, institucionais)',
            'Produzir 2–3 vídeos curtos (15–30s) sobre tipos de etiquetas',
            'Preparar criativos de remarketing (ofertas, urgência, prova social)',
            'Definir copies para cada temperatura (frio, morno, quente)',
          ]
        },
      ],
      deliverables: [
        'Pixel instalado e validado',
        'Listas de CRM carregadas e segmentadas',
        'Estrutura de campanhas criada',
        'Banco de criativos pronto',
      ]
    },
    {
      id: 'semana1',
      title: 'Semana 1 (Dias 1–3)',
      subtitle: 'Aquecimento da Conta · Learning Phase',
      tag: 'aquecimento',
      objective: 'Permitir que o algoritmo do Meta aprenda sobre o negócio, colete sinais iniciais e calibre a entrega de anúncios.',
      tasks: [
        {
          category: 'Campanhas de Aquecimento',
          items: [
            'CAPTAÇÃO | TOPO | FRIO | PÚBLICO ABERTO',
            'Objetivo: Tráfego (não Conversões ainda)',
            'Orçamento: Conservador (50–70% do budget planejado)',
            'Meta: gerar 500–1.000 cliques nos primeiros 3 dias',
          ]
        },
        {
          category: 'Por que Aquecimento?',
          items: [
            'Conta nova ou sem histórico recente precisa de "learning phase"',
            'Meta precisa de ~50 conversões/semana por conjunto para sair do learning',
            'Começar com Tráfego reduz CPC e permite coletar dados de pixel',
            'Evita gastar muito antes do algoritmo entender o público',
          ]
        },
        {
          category: 'Criativos',
          items: [
            'Conteúdos leves e educativos: "Conheça nossos produtos"',
            'Vídeos curtos institucionais (15s)',
            'Foco em alcance e descoberta, não em conversão direta',
          ]
        },
        {
          category: 'Monitoramento',
          items: [
            'CPM (custo por mil impressões)',
            'CPC (custo por clique)',
            'CTR (taxa de cliques)',
            'Frequência (manter abaixo de 2)',
            'Validar eventos de pixel (ViewContent)',
          ]
        },
      ],
      deliverables: [
        'Conta saindo do learning phase inicial',
        '500–1.000 visitantes no site',
        'Primeiros dados de pixel coletados',
        'CPM e CPC estabilizados',
      ],
      warning: '⚠️ NÃO otimizar para conversões ainda. Foco em volume e aprendizado do algoritmo.'
    },
    {
      id: 'semana1b',
      title: 'Semana 1 (Dias 4–7)',
      subtitle: 'Transição · Captação + Primeiro Remarketing',
      tag: 'captacao',
      objective: 'Começar a otimizar para Leads/Conversões e ativar primeiro remarketing com públicos formados.',
      tasks: [
        {
          category: 'Campanhas Ativas',
          items: [
            'CAPTAÇÃO | TOPO | FRIO | PÚBLICO ABERTO (agora otimizado para Leads)',
            'CAPTAÇÃO | TOPO/MEIO | FRIO | SEMELHANTES A CLIENTES (LAL 1–3%)',
            'REMARKETING | MEIO | MORNO | VISITANTES DE SITE (últimos 7 dias)',
            'Orçamento: 60% captação, 40% remarketing',
          ]
        },
        {
          category: 'Transição de Objetivo',
          items: [
            'Mudar objetivo de Tráfego para Leads ou Conversões',
            'Manter conjuntos que performaram bem no aquecimento',
            'Pausar conjuntos com CTR < 1% ou CPC muito alto',
          ]
        },
        {
          category: 'Criativos',
          items: [
            '"Peça seu orçamento grátis"',
            '"Fale com um especialista no WhatsApp"',
            'Comparativos: térmica vs adesiva',
          ]
        },
        {
          category: 'Monitoramento',
          items: [
            'CPL (custo por lead)',
            'Taxa de conversão (clique → lead)',
            'Qualidade dos leads (fit com ICP)',
            'Frequência de remarketing (manter < 3)',
          ]
        },
      ],
      deliverables: [
        'Primeiros leads qualificados',
        'Públicos de remarketing ativos',
        'Algoritmo calibrado para conversões',
        'Dados para otimização da Semana 2',
      ]
    },
    {
      id: 'semana2',
      title: 'Semana 2',
      subtitle: 'Consolidação · Otimização',
      tag: 'otimizacao',
      objective: 'Otimizar campanhas com base em dados da Semana 1, intensificar remarketing de fundo de funil.',
      tasks: [
        {
          category: 'Otimizações',
          items: [
            'Pausar criativos com CTR < 1% ou CPL muito alto',
            'Duplicar conjuntos de anúncios com melhor CPA',
            'Ajustar lances e orçamentos com base em performance',
            'Testar novos criativos (A/B de copy, imagem, vídeo)',
          ]
        },
        {
          category: 'Novas Campanhas',
          items: [
            'REMARKETING | FUNDO | MORNO/QUENTE | INTENÇÃO SEM COMPRA',
            'REMARKETING | FUNDO | QUENTE | CARRINHO ABANDONADO (se aplicável)',
            'REMARKETING | FUNDO | QUENTE | LEADS RECENTES (7–14 dias)',
            'Orçamento: 30–40% para remarketing de fundo',
          ]
        },
        {
          category: 'Criativos de Fundo',
          items: [
            'Ofertas diretas: "Peça seu orçamento em 2 minutos"',
            'Urgência: "Estoque limitado para pedidos grandes"',
            'Prova social: depoimentos de clientes, cases de sucesso',
            'Facilitadores: "Entrega rápida", "Atendimento personalizado"',
          ]
        },
        {
          category: 'Monitoramento',
          items: [
            'CPL por público (frio vs morno vs quente)',
            'Taxa de conversão de lead para orçamento',
            'Taxa de fechamento (orçamento → venda)',
            'ROAS (se e-commerce) ou CAC (se lead-based)',
          ]
        },
      ],
      deliverables: [
        'Campanhas otimizadas com base em dados reais',
        'Remarketing de fundo ativo',
        'Primeiras conversões qualificadas (orçamentos/vendas)',
      ]
    },
    {
      id: 'semana3',
      title: 'Semana 3',
      subtitle: 'Escala · Crescimento',
      tag: 'escala',
      objective: 'Escalar campanhas que performam bem, criar novos lookalikes com dados recentes, reativar clientes antigos.',
      tasks: [
        {
          category: 'Escala de Captação',
          items: [
            'Aumentar orçamento em 20–30% nos conjuntos com melhor CPA',
            'Criar novos LAL com dados frescos:',
            '  • LAL 1–3% de compradores dos últimos 30 dias',
            '  • LAL 1–3% de leads qualificados dos últimos 30 dias',
            'Testar LAL 5–10% para volume (se LAL 1–3% saturar)',
          ]
        },
        {
          category: 'Reativação de Clientes',
          items: [
            'REMARKETING | FUNDO | QUENTE | CLIENTES 90–180 DIAS (sem compra recente)',
            'REMARKETING | FUNDO | QUENTE | CLIENTES 180+ DIAS (inativos)',
            'Ofertas: "Sentimos sua falta", "Novos produtos disponíveis"',
            'Cross-sell: quem comprou térmicas → oferta de ribbons',
          ]
        },
        {
          category: 'Testes Avançados',
          items: [
            'Testar novos formatos: carrossel, coleção, experiência instantânea',
            'Testar novos posicionamentos: Stories, Reels, Audience Network',
            'Testar campanhas de Advantage+ (se volume de conversão permitir)',
          ]
        },
        {
          category: 'Monitoramento',
          items: [
            'Acompanhar saturação de públicos (frequência > 3)',
            'Analisar LTV (lifetime value) de clientes adquiridos',
            'Calcular payback period (tempo para recuperar CAC)',
          ]
        },
      ],
      deliverables: [
        'Campanhas escaladas com ROI positivo',
        'Novos lookalikes performando',
        'Clientes reativados gerando receita',
        'Estrutura de campanhas madura e previsível',
      ]
    },
    {
      id: 'semana4',
      title: 'Semana 4+',
      subtitle: 'Manutenção · Otimização Contínua',
      tag: 'otimizacao',
      objective: 'Manter estrutura rodando de forma consistente, testar continuamente e ajustar com base em sazonalidade.',
      tasks: [
        {
          category: 'Rotina Semanal',
          items: [
            'Segunda: revisar performance da semana anterior, ajustar orçamentos',
            'Terça/Quarta: lançar novos criativos (mínimo 2–3 por semana)',
            'Quinta: analisar públicos saturados, criar novos segmentos',
            'Sexta: relatório semanal (CPL, CPA, ROAS, volume de leads/vendas)',
          ]
        },
        {
          category: 'Testes Contínuos',
          items: [
            'A/B de criativos (imagem vs vídeo, copy longo vs curto)',
            'A/B de landing pages (formulário curto vs longo, design)',
            'Testar novos públicos: LAL de eventos específicos (ex: LAL de quem assistiu vídeo completo)',
            'Testar campanhas sazonais (Black Friday, fim de ano, etc.)',
          ]
        },
        {
          category: 'Análise Estratégica',
          items: [
            'Revisar ICP (ideal customer profile) com base em clientes reais',
            'Identificar produtos/categorias com melhor margem e focar criativos',
            'Analisar jornada completa: anúncio → site → lead → orçamento → venda',
            'Propor melhorias em site, formulários, atendimento com base em dados',
          ]
        },
      ],
      deliverables: [
        'Estrutura de campanhas rodando de forma previsível',
        'Fluxo constante de leads/vendas qualificadas',
        'Banco de criativos sempre atualizado',
        'Relatórios mensais com insights estratégicos',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
            Be.do Etiquetas
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
            Timeline de Implementação · Meta Ads 2025
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto" />
        </header>

        {/* Intro */}
        <section className="mb-10 border border-gray-200 bg-white p-6">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Visão Geral</p>
          <p className="text-sm text-gray-700 mb-3">
            Esta timeline apresenta a sequência ideal de implementação da estratégia de públicos para Be.do Etiquetas,
            desde a preparação técnica até a escala e manutenção contínua.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            Cada fase tem objetivos claros, tarefas específicas e entregáveis mensuráveis para garantir
            uma execução estruturada e orientada a resultados.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-sm mt-4">
            <p className="text-xs font-medium text-indigo-900 mb-1">🔥 Período de Aquecimento (Learning Phase)</p>
            <p className="text-xs text-indigo-800">
              A Semana 1 (dias 1–3) é dedicada ao aquecimento da conta. O algoritmo do Meta precisa de tempo e dados
              para aprender sobre seu negócio. Começar direto com conversões em conta nova/fria resulta em CPAs altos e desperdício de budget.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-4">
          {weeks.map((week, index) => (
            <div key={week.id} className="border border-gray-200 bg-white">
              <button
                onClick={() => toggleWeek(week.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] text-gray-400 font-mono">{String(index).padStart(2, '0')}</span>
                    <div className="w-px h-6 bg-gray-200 mt-1" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-light text-gray-900">{week.title}</h3>
                    <p className="text-xs text-gray-500">{week.subtitle}</p>
                  </div>
                  <Tag label={week.tag} type={week.tag} />
                </div>
                <span className="text-gray-400 text-xl font-light">
                  {expandedWeek === week.id ? '−' : '+'}
                </span>
              </button>

              {expandedWeek === week.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  {/* Warning (se existir) */}
                  {week.warning && (
                    <div className="mt-6 mb-4 bg-amber-50 border border-amber-200 p-3 rounded-sm">
                      <p className="text-xs text-amber-900">{week.warning}</p>
                    </div>
                  )}

                  {/* Objetivo */}
                  <div className="mt-6 mb-6">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Objetivo</p>
                    <p className="text-sm text-gray-700">{week.objective}</p>
                  </div>

                  {/* Tarefas */}
                  <div className="mb-6">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-3">Tarefas</p>
                    <div className="space-y-4">
                      {week.tasks.map((task, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-sm">
                          <p className="text-xs font-medium text-gray-700 mb-2">{task.category}</p>
                          <ul className="space-y-1">
                            {task.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-gray-400 mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Entregáveis */}
                  <div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Entregáveis</p>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-sm">
                      <ul className="space-y-1">
                        {week.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-green-800 flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-6 text-sm mb-6">
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Princípios da Timeline</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Começar com infraestrutura sólida (Semana 0)</li>
                <li>• Aquecer a conta antes de otimizar para conversões (Semana 1 dias 1–3)</li>
                <li>• Construir públicos antes de escalar (Semana 1 dias 4–7)</li>
                <li>• Otimizar com dados reais (Semana 2)</li>
                <li>• Escalar apenas o que funciona (Semana 3+)</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Métricas-Chave por Fase</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Semana 1 (aquecimento): CPM, CPC, CTR, volume de visitantes</li>
                <li>• Semana 1 (transição): CPL, taxa de conversão, qualidade de leads</li>
                <li>• Semana 2: CPL por público, taxa lead → orçamento</li>
                <li>• Semana 3+: CPA, ROAS, LTV, payback period</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 border border-gray-200 p-4 rounded-sm">
            <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Sobre o Learning Phase</p>
            <p className="text-xs text-gray-600 mb-2">
              O Meta Ads precisa de aproximadamente <span className="font-medium">50 conversões por semana por conjunto de anúncios</span> para
              sair da fase de aprendizado e estabilizar a entrega.
            </p>
            <p className="text-xs text-gray-600">
              Por isso, contas novas ou sem histórico recente devem começar com objetivo de <span className="font-medium">Tráfego</span> (mais fácil de converter)
              nos primeiros 2–3 dias, antes de migrar para <span className="font-medium">Leads</span> ou <span className="font-medium">Conversões</span>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}