import React from 'react';

const ArcUI = ({ scores }) => {
    const GAP_DEGREES = 15;

    const createArc = (startAngle, sweepAngle, radius) => {
        const start = polarToCartesian(60, 60, radius, -startAngle);
        const end = polarToCartesian(60, 60, radius, -(startAngle + sweepAngle));
        const largeArcFlag = sweepAngle <= 180 ? "0" : "1";

        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const calculateArcs = () => {
        let currentAngle = 0;
        const totalOfTotals = scores.reduce((sum, m) => sum + m.total, 0);

        return scores.map(metric => {
            const startAngle = currentAngle;
            const sweepAngle = (metric.total / totalOfTotals) * (360 - scores.length * GAP_DEGREES);
            const filledSweepAngle = (metric.value / metric.total) * sweepAngle;

            currentAngle += sweepAngle + GAP_DEGREES;

            return {
                ...metric,
                startAngle,
                sweepAngle,
                filledSweepAngle
            };
        });
    };

    const arcs = calculateArcs();
    const totalScore = scores.reduce((sum, m) => sum + m.value, 0);

    return (
        <div className="relative flex justify-center items-center">
            <svg className="w-48 h-48 sm:w-64 sm:h-64" viewBox="0 0 120 120">
                {arcs.map((arc) => (
                    <g key={arc.name}>
                        <path
                            d={createArc(arc.startAngle, arc.sweepAngle, 54)}
                            fill="none"
                            stroke="#fff"
                            strokeWidth="10"
                            strokeLinecap="round"
                            className="opacity-80"
                        />
                        <path
                            d={createArc(arc.startAngle, arc.filledSweepAngle, 54)}
                            fill="none"
                            stroke={arc.color}
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                    </g>
                ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-5xl font-bold">{totalScore}</div>
                <div className="text-xl">Harmony</div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const metrics = [
        { name: 'Relationship', value: 10, total: 25, icon: '👥', color: '#22c55e' },
        { name: 'Growth', value: 15, total: 25, icon: '🎓', color: '#22c55e' },
        { name: 'Work', value: 20, total: 25, icon: '💼', color: '#22c55e' },
        { name: 'Health', value: 8, total: 25, icon: '💗', color: '#22c55e' },
    ];

    return (
        <div
            className="flex flex-row bg-primary/20 p-6 
            rounded-none w-full max-w-full 
            min-h-10 items-center justify-center gap-8 
            border-y-2 border-primary/50"
        >
            <ArcUI scores={metrics} />
            <div className="space-y-4 text-left">
                {metrics.map((metric) => (
                    <div key={metric.name} className="flex items-center justify-between text-white gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">{metric.icon}</span>
                            <span className="text-lg font-bold text-secondary-dark">{metric.name}</span>
                        </div>
                        <div className="text-secondary font-medium">
                            {metric.value}/{metric.total}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
