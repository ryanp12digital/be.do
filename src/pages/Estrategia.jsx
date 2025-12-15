import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/common/Tabs';
import Badge, { BadgeCount } from '../components/common/Badge';
import Stats, { StatsGrid, StatInline } from '../components/common/Stats';
import Card from '../components/common/Card';

export default function Estrategia() {
  const [selectedFunil, setSelectedFunil] = React.useState('todos');
  const [selectedTemperatura, setSelectedTemperatura] = React.useState('todos');

  // Dados dos públicos organizados
  const publicos = {
    captacao: [
      {
        id: 'c1',
        nome: 'Público Aberto',
        codigo: 'C1',
        funil: 'topo',
        temperatura: 'frio',
        descricao: 'Segmentação mínima: região/país + idade (23–60).',
        detalhes: 'Sem interesses detalhados.',
        otimizacao: 'Leads ou Purchase',
        objetivo: 'Base para alimentar todo o funil',
      },
      {
        id: 'c2',
        nome: 'Semelhantes a Clientes',
        codigo: 'C2',
        funil: 'topo',
        temperatura: 'frio',
        descricao: 'Públicos semelhantes a compradores (dados de CRM + evento Purchase).',
        detalhes: 'Começar com 1–3% e abrir para 5–10% na escala.',
        otimizacao: 'Conversões',
        objetivo: 'Encontrar novos clientes similares',
      },
      {
        id: 'c3',
        nome: 'Semelhantes a Leads Qualificados',
        codigo: 'C3',
        funil: 'meio',
        temperatura: 'morno',
        descricao: 'Fonte: leads que pediram orçamento e têm bom fit.',
        detalhes: 'Foco em gerar leads e visitas com maior propensão a orçamento.',
        otimizacao: 'Leads',
        objetivo: 'Leads mais qualificados',
      },
      {
        id: 'c4',
        nome: 'Semelhantes de Alta Intenção',
        codigo: 'C4',
        funil: 'meio',
        temperatura: 'morno',
        descricao: 'Fonte: AddToCart, InitiateCheckout, AddPaymentInfo.',
        detalhes: 'Atrair pessoas novas muito parecidas com quem quase compra.',
        otimizacao: 'Conversões',
        objetivo: 'Alta intenção de compra',
      },
    ],
    remarketing: [
      {
        id: 'm1',
        nome: 'Visitantes de Site',
        codigo: 'RM M1',
        funil: 'meio',
        temperatura: 'morno',
        descricao: 'Todos os visitantes dos últimos 30 dias.',
        detalhes: 'Subgrupos: páginas de produtos, blog, sessões com 2+ páginas.',
        otimizacao: 'Engajamento',
        objetivo: 'Reengajar visitantes',
      },
      {
        id: 'm2',
        nome: 'Engajamento Forte',
        codigo: 'RM M2',
        funil: 'meio',
        temperatura: 'morno',
        descricao: 'Clicou em links, salvou ou compartilhou conteúdo.',
        detalhes: 'Inclui quem enviou DM ou interagiu com o perfil (90 dias).',
        otimizacao: 'Conversões',
        objetivo: 'Converter engajados',
      },
      {
        id: 'm3',
        nome: 'Vídeo View',
        codigo: 'RM M3',
        funil: 'meio',
        temperatura: 'morno',
        descricao: 'Assistiu 50–75% de vídeos sobre tipos de etiquetas e casos de uso.',
        detalhes: 'Público ideal para conteúdos de comparação e prova social.',
        otimizacao: 'Conversões',
        objetivo: 'Educar e converter',
      },
      {
        id: 'q1',
        nome: 'Intenção Sem Compra',
        codigo: 'RM Q1',
        funil: 'fundo',
        temperatura: 'quente',
        descricao: 'ViewContent sem AddToCart, AddToCart sem Purchase, InitiateCheckout sem Purchase.',
        detalhes: 'Forte intenção, ainda sem conversão — ideal para ofertas diretas e redução de fricção.',
        otimizacao: 'Conversões',
        objetivo: 'Fechar venda',
      },
      {
        id: 'q2',
        nome: 'Carrinho Abandonado',
        codigo: 'RM Q2',
        funil: 'fundo',
        temperatura: 'quente',
        descricao: 'AddToCart / InitiateCheckout / AddPaymentInfo nos últimos 3–7 dias, sem Purchase.',
        detalhes: 'Foco em urgência, garantia, facilitação de contato e orçamento.',
        otimizacao: 'Conversões',
        objetivo: 'Recuperar carrinho',
      },
      {
        id: 'q3',
        nome: 'Leads Recentes',
        codigo: 'RM Q3',
        funil: 'fundo',
        temperatura: 'quente',
        descricao: 'Formulário de orçamento enviado (últimos 7–14 dias) e cliques em "Pedir orçamento" / "WhatsApp".',
        detalhes: 'Público pronto para abordagem comercial e follow-up.',
        otimizacao: 'Conversões',
        objetivo: 'Fechar negócio',
      },
      {
        id: 'q4',
        nome: 'Clientes (CRM)',
        codigo: 'RM Q4',
        funil: 'fundo',
        temperatura: 'quente',
        descricao: 'Base interna da Be.do + lista de clientes que o cliente já possuía antes de fechar.',
        detalhes: 'Segmentar por recência (30/90/180+ dias) e tipo de produto. Usar para recompra, cross-sell e reativação.',
        otimizacao: 'Retenção',
        objetivo: 'Recompra e upsell',
      },
    ],
  };

  // Filtrar públicos
  const filtrarPublicos = (lista) => {
    return lista.filter(p => {
      const matchFunil = selectedFunil === 'todos' || p.funil === selectedFunil;
      const matchTemp = selectedTemperatura === 'todos' || p.temperatura === selectedTemperatura;
      return matchFunil && matchTemp;
    });
  };

  const publicosCaptacaoFiltrados = filtrarPublicos(publicos.captacao);
  const publicosRemarketingFiltrados = filtrarPublicos(publicos.remarketing);

  return (
    <div className="min-h-screen bg-neutral-50 py-8 md:py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 md:mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-4 text-balance">
            Estratégia de Públicos
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-3xl mx-auto">
            Mapa completo de públicos Meta Ads 2025 · Organizado por funil, temperatura e vertente
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </header>

        {/* Stats Overview */}
        <section className="mb-16 md:mb-20">
          <StatsGrid columns={4}>
            <Stats
              icon="📊"
              label="Total de Públicos"
              value={publicos.captacao.length + publicos.remarketing.length}
              variant="primary"
            />
            <Stats
              icon="🎯"
              label="Captação"
              value={publicos.captacao.length}
              variant="success"
            />
            <Stats
              icon="🔄"
              label="Remarketing"
              value={publicos.remarketing.length}
              variant="warning"
            />
            <Stats
              icon="💰"
              label="Fundo de Funil"
              value={publicos.remarketing.filter(p => p.funil === 'fundo').length}
              variant="neutral"
            />
          </StatsGrid>
        </section>

        {/* Filtros e Tabs */}
        <section className="mb-12">
          <Tabs defaultValue="todos">
            <TabsList>
              <TabsTrigger value="todos">
                <span className="text-2xl mr-2">🎯</span>
                Todos os Públicos
                <BadgeCount variant="default" count={publicos.captacao.length + publicos.remarketing.length} />
              </TabsTrigger>
              <TabsTrigger value="topo">
                <span className="text-2xl mr-2">🎯</span>
                Topo de Funil
                <BadgeCount variant="topo" count={[...publicos.captacao, ...publicos.remarketing].filter(p => p.funil === 'topo').length} />
              </TabsTrigger>
              <TabsTrigger value="meio">
                <span className="text-2xl mr-2">🔥</span>
                Meio de Funil
                <BadgeCount variant="meio" count={[...publicos.captacao, ...publicos.remarketing].filter(p => p.funil === 'meio').length} />
              </TabsTrigger>
              <TabsTrigger value="fundo">
                <span className="text-2xl mr-2">💰</span>
                Fundo de Funil
                <BadgeCount variant="fundo" count={[...publicos.captacao, ...publicos.remarketing].filter(p => p.funil === 'fundo').length} />
              </TabsTrigger>
            </TabsList>

            {/* Conteúdo das Tabs */}
            <TabsContent value="todos">
              <VertenteSection
                titulo="Captação"
                descricao="Trazer novos públicos para dentro do funil"
                publicos={publicosCaptacaoFiltrados}
                variant="captacao"
              />
              <VertenteSection
                titulo="Remarketing"
                descricao="Reengajar quem já interagiu ou está na base"
                publicos={publicosRemarketingFiltrados}
                variant="remarketing"
              />
            </TabsContent>

            <TabsContent value="topo">
              <FunilSection
                funil="topo"
                publicos={[...publicosCaptacaoFiltrados, ...publicosRemarketingFiltrados].filter(p => p.funil === 'topo')}
              />
            </TabsContent>

            <TabsContent value="meio">
              <FunilSection
                funil="meio"
                publicos={[...publicosCaptacaoFiltrados, ...publicosRemarketingFiltrados].filter(p => p.funil === 'meio')}
              />
            </TabsContent>

            <TabsContent value="fundo">
              <FunilSection
                funil="fundo"
                publicos={[...publicosCaptacaoFiltrados, ...publicosRemarketingFiltrados].filter(p => p.funil === 'fundo')}
              />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}

// Componente para seção de vertente
function VertenteSection({ titulo, descricao, publicos, variant }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <Badge variant={variant} size="lg">
          {variant === 'captacao' ? '📊' : '🔄'} {titulo}
        </Badge>
        <p className="text-lg text-neutral-600">{descricao}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicos.map(publico => (
          <PublicoCard key={publico.id} publico={publico} />
        ))}
      </div>
    </div>
  );
}

// Componente para seção de funil
function FunilSection({ funil, publicos }) {
  const info = {
    topo: { emoji: '🎯', titulo: 'Topo de Funil', descricao: 'Alcance, descoberta e tráfego novo' },
    meio: { emoji: '🔥', titulo: 'Meio de Funil', descricao: 'Nutrir, educar e aumentar intenção' },
    fundo: { emoji: '💰', titulo: 'Fundo de Funil', descricao: 'Converter, fechar e reativar' },
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{info[funil].emoji}</span>
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">{info[funil].titulo}</h2>
          <p className="text-lg text-neutral-600">{info[funil].descricao}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicos.map(publico => (
          <PublicoCard key={publico.id} publico={publico} />
        ))}
      </div>
    </div>
  );
}

// Card de público
function PublicoCard({ publico }) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-mono text-neutral-500">{publico.codigo}</span>
          <h3 className="text-lg font-semibold text-neutral-900 mt-1">{publico.nome}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Badge variant={publico.funil} size="sm">{publico.funil}</Badge>
          <Badge variant={publico.temperatura} size="sm">{publico.temperatura}</Badge>
        </div>
      </div>

      <p className="text-base text-neutral-700 mb-3">{publico.descricao}</p>
      <p className="text-sm text-neutral-600 mb-4">{publico.detalhes}</p>

      <div className="border-t border-neutral-200 pt-4 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <StatInline icon="🎯" label="Otimização" value={publico.otimizacao} />
          <StatInline icon="📈" label="Objetivo" value={publico.objetivo} />
        </div>
      </div>
    </Card>
  );
}