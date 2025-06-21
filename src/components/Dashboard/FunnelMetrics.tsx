import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-slate-800' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

const FunnelMetrics: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end mb-4 space-x-2">
          <p className="text-5xl font-bold">600</p>
          <p className="pb-1 text-muted-foreground">active leads</p>
        </div>

        <div className="w-full mb-6">
          <div className="flex w-full h-2 rounded-full overflow-hidden">
            {funnelData.map(stage => (
              <div 
                key={stage.name}
                className={stage.color}
                style={{ width: `${(stage.count / totalCount) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-sm mr-3 ${stage.color}`}></span>
                <span>{stage.name}</span>
              </div>
              <span className="font-medium text-right">{stage.count}</span>
              <span className="text-right text-muted-foreground">${stage.value.toLocaleString()}</span>
              {stage.name === 'In conversation' ? (
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-right text-muted-foreground cursor-pointer">2 days</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{stage.duration}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                 <span className="text-right text-muted-foreground">{stage.duration}</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelMetrics;
