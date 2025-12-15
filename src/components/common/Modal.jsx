import React from 'react';
import { X } from 'lucide-react';

/**
 * Componente Modal - Overlay para exibir conteúdo em destaque
 * 
 * @param {boolean} isOpen - Controla se o modal está aberto
 * @param {function} onClose - Função chamada ao fechar
 * @param {React.ReactNode} children - Conteúdo do modal
 * @param {string} size - Tamanho do modal (sm, md, lg, full)
 */
export default function Modal({ isOpen, onClose, children, size = 'lg' }) {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        full: 'max-w-7xl',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`
        relative bg-white rounded-lg shadow-2xl
        w-full ${sizeClasses[size]}
        max-h-[90vh] overflow-y-auto
        animate-slideUp
      `.trim().replace(/\s+/g, ' ')}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-neutral-100 transition-colors z-10"
                    aria-label="Fechar modal"
                >
                    <X className="w-6 h-6 text-neutral-600" />
                </button>

                {children}
            </div>
        </div>
    );
}

/**
 * Header do Modal
 */
export function ModalHeader({ children }) {
    return (
        <div className="px-8 py-6 border-b border-neutral-200">
            {children}
        </div>
    );
}

/**
 * Conteúdo do Modal
 */
export function ModalContent({ children }) {
    return (
        <div className="px-8 py-6">
            {children}
        </div>
    );
}

/**
 * Footer do Modal
 */
export function ModalFooter({ children }) {
    return (
        <div className="px-8 py-6 border-t border-neutral-200 flex justify-end gap-3">
            {children}
        </div>
    );
}
