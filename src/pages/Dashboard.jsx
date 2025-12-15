import React from 'react';
import { Target, Users, TrendingUp, DollarSign, AlertCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import ProgressRing from '../components/ProgressRing';
import LeadChart from '../components/LeadChart';
import { currentMetrics, weeklyLeads, activeAudiences, timelineProgress, insights } from '../data/mockData';

export default function Dashboard() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'warning': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'paused': return 'bg-gray-100 text-gray-700 border-gray-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const getTempColor = (temp) => {
        switch (temp) {
            case 'Frio': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'Morno': return 'bg-amber-50 text-amber-700 border-amber-200';
            case 'Quente': return 'bg-red-50 text-red-700 border-red-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    const getInsightIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
            case 'warning': return <AlertCircle className="w-5 h-5 text-amber-600" />;
            case 'info': return <Clock className="w-5 h-5 text-blue-600" />;
            default: return <AlertCircle className="w-5 h-5 text-gray-600" />;
        }
    };

    const getInsightBg = (type) => {
        switch (type) {
            case 'success': return 'bg-emerald-50 border-emerald-200';
            case 'warning': return 'bg-amber-50 border-amber-200';
            case 'info': return 'bg-blue-50 border-blue-200';
            default: return 'bg-gray-50 border-gray-200';
        }
    };

    const totalSpend = activeAudiences.reduce((sum, aud) => sum + aud.spend, 0);
    const totalLeads = activeAudiences.reduce((sum, aud) => sum + aud.leads, 0);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                        Dashboard de Leads
                    </h1>
                    <p className="text-sm text-gray-500">
                        Acompanhamento em tempo real da estratégia de geração de leads qualificados
                    </p>
                </header>

                {/* KPIs Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard metric={currentMetrics.cpl} icon={DollarSign} />
                    <MetricCard metric={currentMetrics.volume} icon={Users} />
                    <MetricCard metric={currentMetrics.conversion} icon={Target} />
                    <MetricCard metric={currentMetrics.roas} icon={TrendingUp} />
                </section>

                {/* Chart and Progress */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <LeadChart data={weeklyLeads} />
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-6">Progresso da Timeline</h3>
                        <div className="flex flex-col items-center">
                            <ProgressRing progress={85} size={140} strokeWidth={10} />
                            <div className="mt-6 w-full space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">Fase Atual</span>
                                    <span className="font-medium text-gray-900">Semana 3 - Escala</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">Tarefas Concluídas</span>
                                    <span className="font-medium text-gray-900">34 de 40</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">Próxima Fase</span>
                                    <span className="font-medium text-gray-900">Semana 4+</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                                Ver Timeline Completa
                            </button>
                        </div>
                    </div>
                </section>

                {/* Insights */}
                <section className="mb-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Insights Estratégicos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {insights.map((insight, idx) => (
                            <div key={idx} className={`border rounded-lg p-4 ${getInsightBg(insight.type)}`}>
                                <div className="flex items-start space-x-3">
                                    {getInsightIcon(insight.type)}
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-900 mb-1">{insight.title}</h3>
                                        <p className="text-xs text-gray-600 mb-3">{insight.description}</p>
                                        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                                            <span>{insight.action}</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Active Audiences */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Públicos Ativos</h2>
                        <div className="text-sm text-gray-500">
                            <span className="font-medium text-gray-900">{totalLeads}</span> leads ·
                            <span className="font-medium text-gray-900"> R$ {totalSpend.toFixed(2)}</span> investidos
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Público
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Temperatura
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Funil
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            CPL
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Leads
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Gasto
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Frequência
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {activeAudiences.map((audience) => (
                                        <tr key={audience.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{audience.name}</div>
                                                    <div className="text-xs text-gray-500">{audience.id}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${getTempColor(audience.temp)}`}>
                                                    {audience.temp}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {audience.funil}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                R$ {audience.cpl.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {audience.leads}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                R$ {audience.spend.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`text-sm ${audience.frequency > 3 ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                                                    {audience.frequency.toFixed(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${getStatusColor(audience.status)}`}>
                                                    {audience.status === 'active' ? 'Ativo' : 'Atenção'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
