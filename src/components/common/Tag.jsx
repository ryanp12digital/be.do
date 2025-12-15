import React from 'react';

/**
 * Componente Tag - Para categorização e labels
 * 
 * @param {string} label - Texto da tag
 * @param {string} type - Tipo/cor da tag (funil, frio, morno, quente, captacao, remarketing, etc)
 * @param {string} className - Classes adicionais
 */
export default function Tag({ label, type = 'default', className = '' }) {
    // Mapeamento de cores por tipo
    const colorMap = {
        // Funil
        funil: 'bg-neutral-100 text-neutral-700 border-neutral-300',

        // Temperatura
        frio: 'bg-blue-50 text-blue-700 border-blue-200',
        morno: 'bg-amber-50 text-amber-700 border-amber-200',
        quente: 'bg-red-50 text-red-700 border-red-200',

        // Vertente
        captacao: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        remarketing: 'bg-purple-50 text-purple-700 border-purple-200',

        // Fases (Timeline)
        preparacao: 'bg-neutral-100 text-neutral-700 border-neutral-300',
        aquecimento: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        otimizacao: 'bg-blue-50 text-blue-700 border-blue-200',
        escala: 'bg-orange-50 text-orange-700 border-orange-200',

        // Default
        default: 'bg-neutral-100 text-neutral-700 border-neutral-300',
    };

    const colorClasses = colorMap[type] || colorMap.default;

    return (
        <span
            className={`
        inline-flex items-center
        px-2 py-0.5
        text-[11px] sm:text-xs
        rounded-sm
        border
        uppercase tracking-wider
        font-medium
        ${colorClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
        >
            {label}
        </span>
    );
}
