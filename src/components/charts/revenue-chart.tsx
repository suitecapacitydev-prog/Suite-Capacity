'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RevenueChartProps {
    data: { date: string; revenue: number }[];
}

export default function RevenueChart({ data }: RevenueChartProps) {
    if (!data || data.length === 0) return null;

    const maxRevenue = Math.max(...data.map(d => d.revenue));
    const chartHeight = 200;
    const chartWidth = 600;
    const padding = 40;

    const points = data.map((d, i) => ({
        x: (i / (data.length - 1)) * (chartWidth - padding * 2) + padding,
        y: chartHeight - ((d.revenue / maxRevenue) * (chartHeight - padding * 2) + padding)
    }));

    const pathData = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

    return (
        <div className="w-full overflow-hidden">
            <svg 
                viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Horizontal Grid Lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => (
                    <line 
                        key={i}
                        x1={padding}
                        y1={chartHeight - (tick * (chartHeight - padding * 2) + padding)}
                        x2={chartWidth - padding}
                        y2={chartHeight - (tick * (chartHeight - padding * 2) + padding)}
                        stroke="currentColor"
                        strokeOpacity="0.05"
                    />
                ))}

                {/* Line Shadow / Gradient Area */}
                <motion.path
                    d={`${pathData} L ${points[points.length - 1].x},${chartHeight - padding} L ${points[0].x},${chartHeight - padding} Z`}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Main Line */}
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Data Points */}
                {points.map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r="4"
                        fill="white"
                        stroke="var(--primary)"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="cursor-pointer hover:r-6 transition-all"
                    >
                        <title>{`${data[i].date}: $${data[i].revenue.toLocaleString()}`}</title>
                    </motion.circle>
                ))}

                {/* X-Axis Labels */}
                {data.map((d, i) => (
                    <text
                        key={i}
                        x={points[i].x}
                        y={chartHeight - 10}
                        textAnchor="middle"
                        className="text-[10px] font-bold fill-black/30 uppercase tracking-tighter"
                    >
                        {d.date}
                    </text>
                ))}

                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
