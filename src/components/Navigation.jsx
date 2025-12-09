import React from 'react';
import { Network, CalendarClock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700';
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-light text-gray-900 tracking-tight">Be.do <span className="font-semibold text-blue-600">Marketing</span></span>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
                        >
                            <Network className="w-5 h-5 mr-2" />
                            Estratégia
                        </Link>
                        <Link
                            to="/timeline"
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/timeline')}`}
                        >
                            <CalendarClock className="w-5 h-5 mr-2" />
                            Timeline
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
