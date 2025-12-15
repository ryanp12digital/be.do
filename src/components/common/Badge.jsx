import React from 'react';

/**
 * Componente Badge - Tag visual melhorada com gradiente e ícone
 * 
 * @param {React.ReactNode} children - Conteúdo do badge
 * @param {string} variant - Tipo de badge (captacao, remarketing, funil, temperatura, fase)
 * @param {string} icon - Emoji ou ícone (opcional)
 * @param {string} size - Tamanho (sm, md, lg)
 */
export default function Badge({ children, variant = 'default', icon, size = 'md' }) {
    const variantClasses = {
        // Vertentes
        captacao: 'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200',
        remarketing: 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200',

        // Funil
        topo: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200',
        meio: 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-200',
        fundo: 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200',

        // Temperatura
        frio: 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200',
        morno: 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200',
        quente: 'bg-gradient-to-r from-red-50 to-pink-50 text-red-700 border-red-200',

        // Fases Timeline
        preparacao: 'bg-gradient-to-r from-neutral-50 to-neutral-100 text-neutral-700 border-neutral-300',
        aquecimento: 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 border-indigo-200',
        otimizacao: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200',
        escala: 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border-orange-200',

        // Default
        default: 'bg-neutral-100 text-neutral-700 border-neutral-300',
    };

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
    };

    return (
        <span className={`
      inline-flex items-center gap-2
      ${sizeClasses[size]}
      ${variantClasses[variant] || variantClasses.default}
      rounded-full
      border
      font-semibold
      uppercase tracking-wide
      transition-all duration-300
      hover:scale-105
    `.trim().replace(/\s+/g, ' ')}>
            {icon && <span>{icon}</span>}
            {children}
        </span>
    );
}

/**
 * Badge com contador
 */
export function BadgeCount({ children, count, variant = 'default' }) {
    return (
        <Badge variant={variant}>
            {children}
            <span className="ml-1 px-1.5 py-0.5 bg-white/50 rounded-full text-xs font-bold">
                {count}
            </span>
        </Badge>
    );
}
