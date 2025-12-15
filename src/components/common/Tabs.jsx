import React from 'react';

/**
 * Componente Tabs - Sistema de abas para organizar conteúdo
 * 
 * @param {React.ReactNode} children - TabsList e TabsContent components
 * @param {string} defaultValue - Valor da tab ativa por padrão
 */
export function Tabs({ children, defaultValue }) {
    const [activeTab, setActiveTab] = React.useState(defaultValue);

    return (
        <div className="tabs-container">
            {React.Children.map(children, child =>
                React.cloneElement(child, { activeTab, setActiveTab })
            )}
        </div>
    );
}

/**
 * Lista de Tabs (cabeçalho)
 */
export function TabsList({ children, activeTab, setActiveTab }) {
    return (
        <div className="flex gap-2 border-b border-neutral-200 mb-8 overflow-x-auto pb-2">
            {React.Children.map(children, child =>
                React.cloneElement(child, { activeTab, setActiveTab })
            )}
        </div>
    );
}

/**
 * Trigger individual de Tab
 */
export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
    const isActive = activeTab === value;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`
        flex items-center gap-3 px-6 py-3 min-h-[48px]
        rounded-t-lg font-medium text-base
        transition-all duration-300 whitespace-nowrap
        ${isActive
                    ? 'bg-white text-primary border-b-2 border-primary -mb-[2px]'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }
      `.trim().replace(/\s+/g, ' ')}
        >
            {children}
        </button>
    );
}

/**
 * Conteúdo de uma Tab
 */
export function TabsContent({ value, children, activeTab }) {
    if (activeTab !== value) return null;

    return (
        <div className="tab-content animate-fadeIn">
            {children}
        </div>
    );
}
