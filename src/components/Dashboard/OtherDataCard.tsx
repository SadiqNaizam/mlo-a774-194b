import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface OtherDataStat {
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const otherData: OtherDataStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const OtherDataCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-8">
          {otherData.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <div className="flex items-center mt-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.hasInfo && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-3.5 h-3.5 ml-1.5 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherDataCard;
