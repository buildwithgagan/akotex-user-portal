
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PerformanceBreakdown = () => {
  // Sample data for the chart
  const data = [
    {
      name: 'ETFs',
      return: 14.2,
      color: '#EA384C'
    },
    {
      name: 'Real Estate',
      return: 9.8,
      color: '#1A1A1A'
    },
    {
      name: 'Crypto',
      return: 28.5,
      color: '#6E59A5'
    },
    {
      name: 'Stocks',
      return: 12.3,
      color: '#3B82F6'
    },
    {
      name: 'Bonds',
      return: 5.7,
      color: '#10B981'
    }
  ];

  const config = {
    return: { label: "Return" },
  };

  return (
    <div className="space-y-6">
      <div className="h-72">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <ChartTooltip
                content={
                  <ChartTooltipContent />
                }
              />
              <Bar dataKey="return" name="Return">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="font-medium">{item.name}</span>
            </div>
            <div className="text-xl font-bold">
              {item.return}%
              <span className={`ml-2 text-xs ${item.return > 10 ? 'text-green-600' : (item.return > 5 ? 'text-amber-500' : 'text-red-600')}`}>
                {item.return > 10 ? '↑' : (item.return > 5 ? '→' : '↓')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceBreakdown;
