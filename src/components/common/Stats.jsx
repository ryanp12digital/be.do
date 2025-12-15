import React from 'react';

/**
 * Componente Stats - Exibe métricas/estatísticas de forma visual
 * 
 * @param {string} label - Rótulo da métrica
 * @param {string|number} value - Valor da métrica
 * @param {string} icon - Emoji ou ícone (opcional)
 * @param {string} variant - Variante de cor (primary, success, warning)
 */
export default function Stats({ label, value, icon, variant = 'primary' }) {
    const variantClasses = {
        primary: 'bg-primary-light text-primary',
        success: 'bg-green-50 text-green-700',
        warning: 'bg-amber-50 text-amber-700',
        neutral: 'bg-neutral-100 text-neutral-700',
    };

    return (
        <div className={`
      ${variantClasses[variant]}
      p-5 rounded-lg
      transition-all duration-300
      hover:scale-105
    `.trim().replace(/\s+/g, ' ')}>
            {icon && (
                <div className="text-3xl mb-2">{icon}</div>
            )}
            <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
            <div className="text-sm md:text-base font-medium opacity-80">{label}</div>
        </div>
    );
}

/**
 * Grid de Stats - Container para múltiplas métricas
 */
export function StatsGrid({ children, columns = 2 }) {
    const gridClasses = {
        2: 'grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-4',
    };

    return (
        <div className={`grid ${gridClasses[columns]} gap-4`}>
            {children}
        </div>
    );
}

/**
 * Stat Inline - Versão compacta para usar em cards
 */
export function StatInline({ icon, label, value }) {
    return (
        <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <div className="flex flex-col">
                <span className="text-xs text-neutral-500">{label}</span>
                <span className="text-base font-semibold text-neutral-900">{value}</span>
            </div>
        </div>
    );
}
