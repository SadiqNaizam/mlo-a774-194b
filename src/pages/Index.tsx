import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsStatsGrid from '../components/Dashboard/ReasonsStatsGrid';

/**
 * Renders the main dashboard overview page for the Lead Management application.
 * This component orchestrates the layout and assembly of various data visualization
 * modules, such as statistics, charts, and tracking information.
 * It is wrapped by the MainAppLayout to provide consistent navigation and header elements.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col space-y-6">
        <PageHeader />
        <StatsCardGrid />
        <LeadsTrackingChart />
        <ReasonsStatsGrid />
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
