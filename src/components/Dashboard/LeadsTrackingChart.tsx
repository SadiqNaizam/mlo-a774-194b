import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const data = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 98 },
  { name: 'June', closedWon: 70, closedLost: 8 },
  { name: 'July', closedWon: 85, closedLost: 40 },
  { name: 'August', closedWon: 30, closedLost: 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 text-sm bg-background border rounded-md shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="text-[#0D9488]">{`Closed Won : ${payload[0].value}`}</p>
        <p className="text-[#DC2626]">{`Closed Lost : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'came' | 'converted' | 'size'>('converted');

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-end mt-2 space-x-4">
              <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold">680</p>
                <p className="text-sm text-muted-foreground">total closed</p>
              </div>
              <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold">70</p>
                <p className="text-sm text-muted-foreground">total lost</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
              <div className="flex items-center space-x-1 bg-secondary p-1 rounded-md">
                  <Button size="sm" onClick={() => setActiveTab('came')} className={cn(activeTab === 'came' ? 'bg-background shadow' : 'bg-transparent text-muted-foreground hover:bg-background/50', 'transition-all duration-200')}>Leads came</Button>
                  <Button size="sm" onClick={() => setActiveTab('converted')} className={cn(activeTab === 'converted' ? 'bg-background shadow' : 'bg-transparent text-muted-foreground hover:bg-background/50', 'transition-all duration-200')}>Leads Converted</Button>
                  <Button size="sm" onClick={() => setActiveTab('size')} className={cn(activeTab === 'size' ? 'bg-background shadow' : 'bg-transparent text-muted-foreground hover:bg-background/50', 'transition-all duration-200')}>Total deals size</Button>
              </div>
              <Button variant="outline" size="sm" className="text-muted-foreground mt-2">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  last 6 months
                  <ChevronDown className="w-3 h-3 ml-1.5" />
              </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="closedWon" stroke="#0D9488" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" name="Closed won" />
              <Area type="monotone" dataKey="closedLost" stroke="#DC2626" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" name="Closed lost"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
         <div className="flex justify-center space-x-8 pt-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="w-3 h-3 mr-2 rounded-sm bg-[#0D9488]"></span>
            <span>Closed won</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-2 rounded-sm bg-[#DC2626]"></span>
            <span>Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
