import React from 'react';
import ReasonStatCard from './ReasonStatCard';
import OtherDataCard from './OtherDataCard';

const ReasonsStatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ReasonStatCard />
      <OtherDataCard />
    </div>
  );
};

export default ReasonsStatsGrid;
