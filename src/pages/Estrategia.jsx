import React from 'react';

export default function Estrategia() {
  const [expanded, setExpanded] = React.useState({
    captacao: true,
    remarketing: true,
    topo: true,
    meio: true,
    fundo: true,
  });

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const Tag = ({ label, type }) => {
    const colors = {
      funil: 'bg-gray-100 text-gray-700',
      frio: 'bg-blue-50 text-blue-700',
      morno: 'bg-amber-50 text-amber-700',
      quente: 'bg-red-50 text-red-700',
      captacao: 'bg-emerald-50 text-emerald-700',
      remarketing: 'bg-purple-50 text-purple-700',
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 text-[10px] rounded-sm border ${colors[type]} border-gray-200 uppercase tracking-wider`}>
        {label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
            Be.do Etiquetas
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
            Mapa Mental · Estratégia de Públicos Meta Ads 2025
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto" />
        </header>

        {/* Nó Central */}
        <section className="flex justify-center mb-12">
          <div className="border border-gray-200 bg-white px-8 py-5 rounded-sm text-center">
            <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] mb-1">
              Centro da Estratégia
            </p>
            <h2 className="text-lg md:text-xl font-light text-gray-900 mb-2">
              Públicos por Funil, Temperatura e Vertente
            </h2>
            <p className="text-xs text-gray-500 max-w-xl mx-auto">
              Organização dos públicos em duas vertentes principais:
              <span className="font-medium"> captação</span> e <span className="font-medium">remarketing</span>,
              cruzando <span className="font-medium">funil (topo, meio, fundo)</span> com
              <span className="font-medium"> temperatura (frio, morno, quente)</span>.
            </p>
          </div>
        </section>

        {/* 1. Vertentes: Captação x Remarketing */}
        <section className="space-y-6 mb-10">
          <div className="border border-gray-200 bg-white">
            <button
              onClick={() => toggle('captacao')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-3">
                <span className="text-[11px] text-gray-400 font-mono">01</span>
                <h3 className="text-lg font-light text-gray-900">Vertente: Captação</h3>
                <Tag label="Funil: Topo / Meio" type="funil" />
                <Tag label="Temperatura: Frio / Morno" type="frio" />
              </div>
              <span className="text-gray-400 text-xl font-light">{expanded.captacao ? '−' : '+'}</span>
            </button>
            {expanded.captacao && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Captação C1 — Público Aberto</p>
                        <div className="space-x-1">
                          <Tag label="Topo" type="funil" />
                          <Tag label="Frio" type="frio" />
                          <Tag label="Captação" type="captacao" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Segmentação mínima: região/país + idade (23–60).</p>
                      <p className="text-sm text-gray-700 mb-1">Sem interesses detalhados.</p>
                      <p className="text-xs text-gray-500">Otimização para <span className="font-medium">Leads</span> ou <span className="font-medium">Purchase</span>. Base para alimentar todo o funil.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Captação C2 — Semelhantes a Clientes</p>
                        <div className="space-x-1">
                          <Tag label="Topo/Meio" type="funil" />
                          <Tag label="Frio" type="frio" />
                          <Tag label="Captação" type="captacao" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Públicos semelhantes a compradores (dados de CRM + evento Purchase).</p>
                      <p className="text-xs text-gray-500">Começar com <span className="font-medium">1–3%</span> e abrir para <span className="font-medium">5–10%</span> na escala.</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Captação C3 — Semelhantes a Leads Qualificados</p>
                        <div className="space-x-1">
                          <Tag label="Topo/Meio" type="funil" />
                          <Tag label="Frio/Morno" type="morno" />
                          <Tag label="Captação" type="captacao" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Fonte: leads que pediram orçamento e têm bom fit.</p>
                      <p className="text-xs text-gray-500">Foco em gerar leads e visitas com maior propensão a orçamento.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Captação C4 — Semelhantes de Alta Intenção</p>
                        <div className="space-x-1">
                          <Tag label="Meio" type="funil" />
                          <Tag label="Frio/Morno" type="morno" />
                          <Tag label="Captação" type="captacao" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Fonte: AddToCart, InitiateCheckout, AddPaymentInfo.</p>
                      <p className="text-xs text-gray-500">Atrair pessoas novas muito parecidas com quem quase compra.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-200 bg-white">
            <button
              onClick={() => toggle('remarketing')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-3">
                <span className="text-[11px] text-gray-400 font-mono">02</span>
                <h3 className="text-lg font-light text-gray-900">Vertente: Remarketing</h3>
                <Tag label="Funil: Meio / Fundo" type="funil" />
                <Tag label="Temperatura: Morno / Quente" type="quente" />
              </div>
              <span className="text-gray-400 text-xl font-light">{expanded.remarketing ? '−' : '+'}</span>
            </button>
            {expanded.remarketing && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Meio de Funil - Mornos */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM M1 — Visitantes de Site</p>
                        <div className="space-x-1">
                          <Tag label="Meio" type="funil" />
                          <Tag label="Morno" type="morno" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Todos os visitantes dos últimos 30 dias.</p>
                      <p className="text-xs text-gray-500">Subgrupos: páginas de produtos, blog, sessões com 2+ páginas.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM M2 — Engajamento Forte</p>
                        <div className="space-x-1">
                          <Tag label="Meio" type="funil" />
                          <Tag label="Morno" type="morno" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Clicou em links, salvou ou compartilhou conteúdo.</p>
                      <p className="text-xs text-gray-500">Inclui quem enviou DM ou interagiu com o perfil (90 dias).</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM M3 — Vídeo View</p>
                        <div className="space-x-1">
                          <Tag label="Meio" type="funil" />
                          <Tag label="Morno" type="morno" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Assistiu 50–75% de vídeos sobre tipos de etiquetas e casos de uso.</p>
                      <p className="text-xs text-gray-500">Público ideal para conteúdos de comparação e prova social.</p>
                    </div>
                  </div>

                  {/* Fundo de Funil - Quentes */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM Q1 — Intenção Sem Compra</p>
                        <div className="space-x-1">
                          <Tag label="Fundo" type="funil" />
                          <Tag label="Morno/Quente" type="quente" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">ViewContent sem AddToCart, AddToCart sem Purchase, InitiateCheckout sem Purchase.</p>
                      <p className="text-xs text-gray-500">Forte intenção, ainda sem conversão — ideal para ofertas diretas e redução de fricção.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM Q2 — Carrinho Abandonado</p>
                        <div className="space-x-1">
                          <Tag label="Fundo" type="funil" />
                          <Tag label="Quente" type="quente" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">AddToCart / InitiateCheckout / AddPaymentInfo nos últimos 3–7 dias, sem Purchase.</p>
                      <p className="text-xs text-gray-500">Foco em urgência, garantia, facilitação de contato e orçamento.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM Q3 — Leads Recentes</p>
                        <div className="space-x-1">
                          <Tag label="Fundo" type="funil" />
                          <Tag label="Quente" type="quente" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Formulário de orçamento enviado (últimos 7–14 dias) e cliques em "Pedir orçamento" / "WhatsApp".</p>
                      <p className="text-xs text-gray-500">Público pronto para abordagem comercial e follow-up.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">RM Q4 — Clientes (CRM + Lista do Cliente)</p>
                        <div className="space-x-1">
                          <Tag label="Fundo" type="funil" />
                          <Tag label="Quente" type="quente" />
                          <Tag label="Remarketing" type="remarketing" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">Base interna da Be.do + lista de clientes que o cliente já possuía antes de fechar.</p>
                      <p className="text-xs text-gray-500 mb-1">Segmentar por recência (30/90/180+ dias) e tipo de produto (adesivas, térmicas, ribbons, bobinas, lacre).</p>
                      <p className="text-xs text-gray-500">Usar para recompra, cross-sell e reativação.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 2. Visão por Funil */}
        <section className="space-y-4 mb-10">
          <h4 className="text-xs text-gray-500 uppercase tracking-[0.25em] mb-2">Camadas de Funil</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-200 bg-white">
              <button
                onClick={() => toggle('topo')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-sm font-light text-gray-900">Topo de Funil</span>
                <span className="text-gray-400 text-lg font-light">{expanded.topo ? '−' : '+'}</span>
              </button>
              {expanded.topo && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-[11px] text-gray-500 mt-3 mb-1">Objetivo</p>
                  <p className="text-sm text-gray-700 mb-2">Alcance, descoberta e tráfego novo para alimentar o funil.</p>
                  <p className="text-[11px] text-gray-500 mb-1">Principais públicos</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Captação C1 — Público Aberto (Frio)</li>
                    <li>• Captação C2 — Semelhantes a Clientes (Frio)</li>
                    <li>• Captação C3 — Semelhantes a Leads Qualificados (Frio/Morno)</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border border-gray-200 bg-white">
              <button
                onClick={() => toggle('meio')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-sm font-light text-gray-900">Meio de Funil</span>
                <span className="text-gray-400 text-lg font-light">{expanded.meio ? '−' : '+'}</span>
              </button>
              {expanded.meio && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-[11px] text-gray-500 mt-3 mb-1">Objetivo</p>
                  <p className="text-sm text-gray-700 mb-2">Nutrir, educar e aumentar a intenção de compra.</p>
                  <p className="text-[11px] text-gray-500 mb-1">Principais públicos</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• RM M1 — Visitantes de Site (Morno)</li>
                    <li>• RM M2 — Engajamento Forte (Morno)</li>
                    <li>• RM M3 — Vídeo View (Morno)</li>
                    <li>• Captação C4 — Semelhantes de Alta Intenção (Frio/Morno)</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border border-gray-200 bg-white">
              <button
                onClick={() => toggle('fundo')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-sm font-light text-gray-900">Fundo de Funil</span>
                <span className="text-gray-400 text-lg font-light">{expanded.fundo ? '−' : '+'}</span>
              </button>
              {expanded.fundo && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-[11px] text-gray-500 mt-3 mb-1">Objetivo</p>
                  <p className="text-sm text-gray-700 mb-2">Converter, fechar negócio e reativar clientes.</p>
                  <p className="text-[11px] text-gray-500 mb-1">Principais públicos</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• RM Q1 — Intenção Sem Compra (Morno/Quente)</li>
                    <li>• RM Q2 — Carrinho Abandonado (Quente)</li>
                    <li>• RM Q3 — Leads Recentes (Quente)</li>
                    <li>• RM Q4 — Clientes (CRM + lista prévia do cliente) (Quente)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Rodapé / Legenda */}
        <footer className="pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
            <div className="space-y-1">
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] mb-1">Temperatura</p>
              <p className="text-xs text-gray-600">Frio — pessoas novas, ainda sem relação com a marca.</p>
              <p className="text-xs text-gray-600">Morno — já interagiram (site, vídeo, perfil).</p>
              <p className="text-xs text-gray-600">Quente — deram sinais claros de intenção ou já são clientes.</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] mb-1">Vertente</p>
              <p className="text-xs text-gray-600">Captação — trazer novos usuários para dentro do funil.</p>
              <p className="text-xs text-gray-600">Remarketing — aproveitar quem já interagiu ou está na base.</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em] mb-1">Nota Estratégica 2025</p>
              <p className="text-xs text-gray-600">
                Meta Ads não otimiza mais com base em direcionamento detalhado.
                A força da conta vem de sinais de conversão (pixel, CRM) e da organização
                inteligente entre <span className="font-medium">funil</span>, <span className="font-medium">temperatura</span> e <span className="font-medium">vertente</span>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}