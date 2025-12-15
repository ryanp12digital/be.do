import React from 'react';
import { Network, CalendarClock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <span className="text-xl md:text-2xl font-light text-neutral-900 tracking-tight transition-colors">
                            Be.do <span className="font-semibold text-primary group-hover:text-primary-hover transition-colors">Marketing</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex gap-2">
                        <Link
                            to="/"
                            className={`
                                flex items-center gap-2
                                px-4 py-3 min-h-[48px]
                                rounded-sm
                                text-sm md:text-base font-medium
                                transition-all duration-300
                                ${isActive('/')
                                    ? 'text-primary bg-primary-light'
                                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                                }
                            `.trim().replace(/\s+/g, ' ')}
                        >
                            <Network className="w-5 h-5" />
                            <span className="hidden sm:inline">Estratégia</span>
                        </Link>

                        <Link
                            to="/timeline"
                            className={`
                                flex items-center gap-2
                                px-4 py-3 min-h-[48px]
                                rounded-sm
                                text-sm md:text-base font-medium
                                transition-all duration-300
                                ${isActive('/timeline')
                                    ? 'text-primary bg-primary-light'
                                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                                }
                            `.trim().replace(/\s+/g, ' ')}
                        >
                            <CalendarClock className="w-5 h-5" />
                            <span className="hidden sm:inline">Timeline</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
