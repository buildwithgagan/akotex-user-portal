
import React from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent 
} from "@/components/ui/chart";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from 'recharts';

const HistoricalTrendsChart = () => {
  // Sample data for 10-year historical performance
  const data = [
    { year: '2015', etfs: 12.4, realEstate: 10.2, crypto: null, stocks: 9.8, bonds: 4.2 },
    { year: '2016', etfs: 10.1, realEstate: 8.7, crypto: 120.3, stocks: 11.2, bonds: 2.5 },
    { year: '2017', etfs: 21.8, realEstate: 9.1, crypto: 1318.9, stocks: 19.4, bonds: 3.5 },
    { year: '2018', etfs: -4.4, realEstate: -2.8, crypto: -72.6, stocks: -6.2, bonds: 0.9 },
    { year: '2019', etfs: 31.2, realEstate: 28.7, crypto: 92.1, stocks: 28.9, bonds: 8.7 },
    { year: '2020', etfs: 18.3, realEstate: -5.1, crypto: 302.8, stocks: 16.3, bonds: 7.5 },
    { year: '2021', etfs: 27.2, realEstate: 41.2, crypto: 59.6, stocks: 26.9, bonds: -1.5 },
    { year: '2022', etfs: -19.6, realEstate: -25.1, crypto: -64.2, stocks: -18.1, bonds: -13.0 },
    { year: '2023', etfs: 26.3, realEstate: 10.1, crypto: 154.3, stocks: 24.2, bonds: 5.5 },
    { year: '2024', etfs: 14.8, realEstate: 9.8, crypto: 28.5, stocks: 12.3, bonds: 5.7 }
  ];

  const config = {
    etfs: { label: "ETFs", theme: { light: "#EA384C", dark: "#EA384C" } },
    realEstate: { label: "Real Estate", theme: { light: "#1A1A1A", dark: "#ffffff" } },
    crypto: { label: "Crypto", theme: { light: "#6E59A5", dark: "#8A73C7" } },
    stocks: { label: "Stocks", theme: { light: "#3B82F6", dark: "#60A5FA" } },
    bonds: { label: "Bonds", theme: { light: "#10B981", dark: "#34D399" } },
  };

  const renderTooltipContent = (props) => {
    const { active, payload, label } = props;
    
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border shadow-md rounded-md">
          <p className="font-medium">{label}</p>
          <div className="space-y-1 mt-2">
            {payload.map((entry, index) => {
              if (entry.value === null) return null;
              return (
                <div key={`item-${index}`} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span>{entry.name}: </span>
                  <span className={`font-medium ${Number(entry.value) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {Number(entry.value) >= 0 ? '+' : ''}{entry.value}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer config={config}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="year" />
          <YAxis 
            tickFormatter={(value) => `${value}%`}
            domain={[-25, 50]} // Excluding crypto's extreme values for better scale
          />
          <ChartTooltip content={renderTooltipContent} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="etfs"
            name="ETFs"
            stroke="#EA384C"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="realEstate"
            name="Real Estate"
            stroke="#1A1A1A"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="stocks"
            name="Stocks"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="bonds"
            name="Bonds"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default HistoricalTrendsChart;
