import React from 'react';
import { Menu } from 'lucide-react';
import SidebarNav from '../Dashboard/SidebarNav';

const Sidebar: React.FC = () => {
  return (
    // w-64 is required for the 'auto' grid column to size correctly
    // h-full lets it fill the grid row span
    <div className="flex h-full w-64 flex-col">
      <div className="flex h-16 shrink-0 items-center gap-4 px-4">
        <button className="text-muted-foreground hover:text-foreground">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <span className="text-sm font-bold">DO</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pt-0">
        <SidebarNav />
      </div>
    </div>
  );
};

export default Sidebar;
