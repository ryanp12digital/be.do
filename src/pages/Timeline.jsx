import React from 'react';
import Badge from '../components/common/Badge';
import Stats, { StatInline } from '../components/common/Stats';
import Card from '../components/common/Card';
import Modal, { ModalHeader, ModalContent, ModalFooter } from '../components/common/Modal';
import Button from '../components/common/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const [selectedWeek, setSelectedWeek] = React.useState(null);
  const [currentPhase, setCurrentPhase] = React.useState(0);

  const weeks = [
    {
      id: 'semana0',
      title: 'Semana 0',
      subtitle: 'Pré-lançamento · Preparação',
      tag: 'preparacao',
      emoji: '⚙️',
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
      emoji: '🚀',
      objective: 'Permitir que o algoritmo do Meta aprenda sobre o negócio, colete sinais iniciais e calibre a entrega de anúncios.',
      warning: '⚠️ NÃO otimizar para conversões ainda. Foco em volume e aprendizado do algoritmo.',
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
      ],
      deliverables: [
        'Conta saindo do learning phase inicial',
        '500–1.000 visitantes no site',
        'Primeiros dados de pixel coletados',
        'CPM e CPC estabilizados',
      ]
    },
    {
      id: 'semana2',
      title: 'Semana 2',
      subtitle: 'Consolidação · Otimização',
      tag: 'otimizacao',
      emoji: '📈',
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
      emoji: '📊',
      objective: 'Escalar campanhas que performam bem, criar novos lookalikes com dados recentes, reativar clientes antigos.',
      tasks: [
        {
          category: 'Escala de Captação',
          items: [
            'Aumentar orçamento em 20–30% nos conjuntos com melhor CPA',
            'Criar novos LAL com dados frescos',
            'LAL 1–3% de compradores dos últimos 30 dias',
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
      emoji: '🔄',
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
            'Testar novos públicos: LAL de eventos específicos',
            'Testar campanhas sazonais (Black Friday, fim de ano, etc.)',
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

  const openWeekDetails = (week) => {
    setSelectedWeek(week);
  };

  const closeModal = () => {
    setSelectedWeek(null);
  };

  const goToPreviousWeek = () => {
    const currentIndex = weeks.findIndex(w => w.id === selectedWeek.id);
    if (currentIndex > 0) {
      setSelectedWeek(weeks[currentIndex - 1]);
    }
  };

  const goToNextWeek = () => {
    const currentIndex = weeks.findIndex(w => w.id === selectedWeek.id);
    if (currentIndex < weeks.length - 1) {
      setSelectedWeek(weeks[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8 md:py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 md:mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-4 text-balance">
            Timeline de Implementação
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-3xl mx-auto">
            Sequência ideal de implementação · Meta Ads 2025
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </header>

        {/* Progress Indicator */}
        <section className="mb-16 md:mb-20">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6 text-center">
              Progresso da Implementação
            </h3>
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                {weeks.map((week, index) => (
                  <div
                    key={week.id}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setCurrentPhase(index)}
                  >
                    <div className={`
                      w-14 h-14 rounded-full flex items-center justify-center text-2xl
                      transition-all duration-300
                      ${currentPhase === index
                        ? 'bg-primary text-white scale-110 shadow-lg'
                        : currentPhase > index
                          ? 'bg-green-500 text-white'
                          : 'bg-neutral-200 text-neutral-600'
                      }
                      group-hover:scale-110
                    `}>
                      {week.emoji}
                    </div>
                    <span className="text-xs mt-2 text-neutral-600 text-center max-w-[80px]">
                      {week.title.split(' ')[0]} {week.title.split(' ')[1]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute top-7 left-0 right-0 h-1 bg-neutral-200 -z-10">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(currentPhase / (weeks.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <Badge variant={weeks[currentPhase].tag} size="lg">
                {weeks[currentPhase].emoji} Você está aqui: {weeks[currentPhase].title}
              </Badge>
            </div>
          </div>
        </section>

        {/* Timeline Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Todas as Fases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeks.map((week, index) => (
              <Card
                key={week.id}
                className="cursor-pointer hover:scale-105 transition-all duration-300 p-6"
                onClick={() => openWeekDetails(week)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl mb-2 block">{week.emoji}</span>
                    <Badge variant={week.tag} size="sm">{week.tag}</Badge>
                  </div>
                  <span className="text-sm font-mono text-neutral-500">#{index}</span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{week.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{week.subtitle}</p>

                <div className="border-t border-neutral-200 pt-4 mt-4 space-y-3">
                  <StatInline icon="📋" label="Tarefas" value={week.tasks.length} />
                  <StatInline icon="✅" label="Entregas" value={week.deliverables.length} />
                </div>

                <Button variant="secondary" size="sm" className="w-full mt-4">
                  Ver Detalhes →
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal de Detalhes */}
        {selectedWeek && (
          <Modal isOpen={!!selectedWeek} onClose={closeModal} size="lg">
            <ModalHeader>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{selectedWeek.emoji}</span>
                <div>
                  <Badge variant={selectedWeek.tag} size="lg">{selectedWeek.tag}</Badge>
                  <h2 className="text-3xl font-semibold text-neutral-900 mt-2">{selectedWeek.title}</h2>
                  <p className="text-lg text-neutral-600">{selectedWeek.subtitle}</p>
                </div>
              </div>
            </ModalHeader>

            <ModalContent>
              {/* Warning */}
              {selectedWeek.warning && (
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg mb-6">
                  <p className="text-base text-amber-900 leading-relaxed">{selectedWeek.warning}</p>
                </div>
              )}

              {/* Objetivo */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎯 Objetivo</h3>
                <p className="text-base text-neutral-700 leading-relaxed">{selectedWeek.objective}</p>
              </div>

              {/* Tarefas */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">📋 Tarefas</h3>
                <div className="space-y-4">
                  {selectedWeek.tasks.map((task, idx) => (
                    <div key={idx} className="bg-neutral-50 p-5 rounded-lg">
                      <h4 className="text-base font-semibold text-neutral-800 mb-3">{task.category}</h4>
                      <ul className="space-y-2">
                        {task.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start text-base text-neutral-700">
                            <span className="text-primary mr-3 mt-1">•</span>
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">✅ Entregáveis</h3>
                <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                  <ul className="space-y-2">
                    {selectedWeek.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start text-base text-green-800">
                        <span className="text-green-600 mr-3 font-bold">✓</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ModalContent>

            <ModalFooter>
              <Button
                variant="secondary"
                onClick={goToPreviousWeek}
                disabled={weeks.findIndex(w => w.id === selectedWeek.id) === 0}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Anterior
              </Button>
              <Button
                variant="primary"
                onClick={goToNextWeek}
                disabled={weeks.findIndex(w => w.id === selectedWeek.id) === weeks.length - 1}
              >
                Próxima
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    </div>
  );
}