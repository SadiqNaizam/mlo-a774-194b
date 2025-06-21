import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ReasonStat {
  percentage: number;
  reason: string;
}

const reasonsData: ReasonStat[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' },
];

const ReasonStatCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {reasonsData.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.reason}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonStatCard;
