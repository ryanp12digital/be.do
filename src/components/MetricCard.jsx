import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricCard({ metric, icon: Icon }) {
    const isPositive = metric.trend > 0;
    const trendColor = isPositive ? 'text-emerald-600' : 'text-red-600';
    const bgColor = isPositive ? 'bg-emerald-50' : 'bg-red-50';

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    {Icon && (
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                    )}
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</p>
                        <p className="text-2xl font-light text-gray-900 mt-1">{metric.value}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${bgColor}`}>
                        {isPositive ? (
                            <TrendingUp className={`w-3 h-3 ${trendColor}`} />
                        ) : (
                            <TrendingDown className={`w-3 h-3 ${trendColor}`} />
                        )}
                        <span className={`text-xs font-medium ${trendColor}`}>
                            {Math.abs(metric.trend)}%
                        </span>
                    </div>
                    <span className="text-xs text-gray-500">vs anterior</span>
                </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
        </div>
    );
}
