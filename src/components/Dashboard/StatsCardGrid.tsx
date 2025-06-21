import React from 'react';
import FunnelMetrics from './FunnelMetrics';
import ChartCard from './ChartCard';

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <FunnelMetrics />
      <ChartCard />
    </div>
  );
};

export default StatsCardGrid;
