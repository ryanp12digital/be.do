// Mock data for dashboard demonstration
// In production, this would be replaced with real Meta Ads API data

export const weeklyLeads = [
    { week: 'S0', name: 'Semana 0', frio: 0, morno: 0, quente: 0, total: 0 },
    { week: 'S1', name: 'Semana 1', frio: 45, morno: 12, quente: 3, total: 60 },
    { week: 'S2', name: 'Semana 2', frio: 52, morno: 28, quente: 15, total: 95 },
    { week: 'S3', name: 'Semana 3', frio: 48, morno: 35, quente: 27, total: 110 },
    { week: 'S4', name: 'Semana 4', frio: 55, morno: 42, quente: 38, total: 135 },
];

export const currentMetrics = {
    cpl: {
        value: 'R$ 12,50',
        trend: -8.5,
        previous: 'R$ 13,65',
        label: 'Custo por Lead',
        description: 'Quanto custa em média cada lead gerado'
    },
    volume: {
        value: 135,
        trend: 22.7,
        previous: 110,
        label: 'Leads Gerados',
        description: 'Total de leads no período atual'
    },
    conversion: {
        value: '18.5%',
        trend: 3.2,
        previous: '15.3%',
        label: 'Taxa de Conversão',
        description: 'Percentual de leads que viraram orçamentos'
    },
    roas: {
        value: '4.2x',
        trend: 12.0,
        previous: '3.75x',
        label: 'ROAS',
        description: 'Retorno sobre investimento em anúncios'
    },
};

export const activeAudiences = [
    {
        id: 'C1',
        name: 'Público Aberto',
        temp: 'Frio',
        funil: 'Topo',
        cpl: 15.20,
        leads: 55,
        spend: 836.00,
        frequency: 1.8,
        status: 'active'
    },
    {
        id: 'C2',
        name: 'LAL Clientes 1-3%',
        temp: 'Frio',
        funil: 'Topo/Meio',
        cpl: 11.80,
        leads: 42,
        spend: 495.60,
        frequency: 2.1,
        status: 'active'
    },
    {
        id: 'RM-M1',
        name: 'Visitantes Site',
        temp: 'Morno',
        funil: 'Meio',
        cpl: 9.50,
        leads: 38,
        spend: 361.00,
        frequency: 2.7,
        status: 'active'
    },
    {
        id: 'RM-Q2',
        name: 'Carrinho Abandonado',
        temp: 'Quente',
        funil: 'Fundo',
        cpl: 6.20,
        leads: 28,
        spend: 173.60,
        frequency: 3.2,
        status: 'warning'
    },
    {
        id: 'RM-Q3',
        name: 'Leads Recentes',
        temp: 'Quente',
        funil: 'Fundo',
        cpl: 5.80,
        leads: 22,
        spend: 127.60,
        frequency: 2.9,
        status: 'active'
    },
];

export const timelineProgress = {
    currentWeek: 'semana4',
    weeks: [
        { id: 'semana0', status: 'completed', progress: 100 },
        { id: 'semana1', status: 'completed', progress: 100 },
        { id: 'semana1b', status: 'completed', progress: 100 },
        { id: 'semana2', status: 'completed', progress: 100 },
        { id: 'semana3', status: 'in-progress', progress: 85 },
        { id: 'semana4', status: 'pending', progress: 0 },
    ]
};

export const insights = [
    {
        type: 'success',
        title: 'Público "Carrinho Abandonado" saturando',
        description: 'Frequência em 3.2. Considere pausar por 2-3 dias ou reduzir budget.',
        action: 'Ver público',
        priority: 'high'
    },
    {
        type: 'info',
        title: 'CPL abaixo da meta',
        description: 'Custo por lead 8.5% menor que semana anterior. Ótimo momento para escalar.',
        action: 'Ver estratégia de escala',
        priority: 'medium'
    },
    {
        type: 'warning',
        title: 'Criar novos LAL',
        description: 'Com 135 leads qualificados, é hora de criar novos lookalikes 1-3%.',
        action: 'Ver timeline',
        priority: 'medium'
    },
];
