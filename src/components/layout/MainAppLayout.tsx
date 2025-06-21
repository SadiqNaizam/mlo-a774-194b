import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <aside className="row-span-2 border-r bg-sidebar">
        <Sidebar />
      </aside>

      <header>
        <Header title="Dashboard" />
      </header>

      <main className="overflow-y-auto bg-background p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
