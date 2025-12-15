import React from 'react';

/**
 * Componente Card - Container genérico para conteúdo
 * 
 * @param {React.ReactNode} children - Conteúdo do card
 * @param {string} className - Classes adicionais
 * @param {boolean} hover - Ativar efeito hover
 * @param {function} onClick - Função de clique (torna o card clicável)
 */
export default function Card({
    children,
    className = '',
    hover = false,
    onClick = null,
    ...props
}) {
    const isClickable = !!onClick;

    const baseClasses = `
    bg-white
    border border-neutral-200
    rounded-sm
    shadow-sm
    transition-all duration-300
  `;

    const hoverClasses = hover || isClickable ? `
    hover:shadow-md
    hover:-translate-y-0.5
  ` : '';

    const clickableClasses = isClickable ? `
    cursor-pointer
    active:translate-y-0
  ` : '';

    const Component = isClickable ? 'button' : 'div';

    return (
        <Component
            className={`
        ${baseClasses}
        ${hoverClasses}
        ${clickableClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    );
}
