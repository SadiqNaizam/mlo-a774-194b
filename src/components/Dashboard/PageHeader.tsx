import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <Tabs defaultValue="leads" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-transparent p-0">
          <TabsTrigger value="sales" className="pb-2.5 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground">
            Sales
          </TabsTrigger>
          <TabsTrigger value="leads" className="pb-2.5 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground">
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Button variant="outline" className="text-muted-foreground">
        <Calendar className="w-4 h-4 mr-2" />
        last 6 months
        <ChevronDown className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default PageHeader;
