import React from 'react';

/**
 * Componente Button - Botão reutilizável com variantes
 * 
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {string} variant - Variante do botão (primary, secondary, tertiary)
 * @param {string} size - Tamanho do botão (sm, md, lg)
 * @param {boolean} disabled - Estado desabilitado
 * @param {string} className - Classes adicionais
 * @param {function} onClick - Função de clique
 */
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    onClick,
    type = 'button',
    ...props
}) {
    // Classes base
    const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    rounded-sm
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    // Variantes de estilo
    const variantClasses = {
        primary: `
      bg-primary text-white
      hover:bg-primary-hover
      active:scale-95
      shadow-sm hover:shadow-md
    `,
        secondary: `
      bg-transparent text-primary
      border-2 border-primary
      hover:bg-primary-light
      active:scale-95
    `,
        tertiary: `
      bg-transparent text-neutral-700
      hover:text-primary hover:underline
      active:scale-98
    `,
    };

    // Tamanhos
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm min-h-[40px]',
        md: 'px-6 py-3 text-base min-h-[48px]',
        lg: 'px-8 py-4 text-lg min-h-[56px]',
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
        ${baseClasses}
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
            {...props}
        >
            {children}
        </button>
    );
}
