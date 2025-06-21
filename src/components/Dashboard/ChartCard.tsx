import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SourceData {
  name: string;
  value: number;
  amount: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 50, amount: 3000, color: '#F87171' }, // red-400
  { name: 'Behance', value: 40, amount: 1000, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, amount: 1000, color: '#0D9488' }, // teal-600
  { name: 'Dribbble', value: 10, amount: 1000, color: '#60A5FA' }, // blue-400
];

const ChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col space-y-3">
            {data.map((entry) => (
              <div key={entry.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
                <div className="flex items-center">
                  <span 
                    className="w-3 h-3 mr-2 rounded-sm"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  <span>{entry.name}</span>
                </div>
                <span className="text-muted-foreground text-right">${entry.amount.toLocaleString()}</span>
                <span className="font-medium text-right">{entry.value}%</span>
              </div>
            ))}
            <div className="text-right pt-2">
                <Badge variant="secondary">from leads total</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
