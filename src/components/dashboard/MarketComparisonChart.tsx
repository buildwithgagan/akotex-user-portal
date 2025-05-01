
import React from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent 
} from "@/components/ui/chart";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from 'recharts';

const MarketComparisonChart = () => {
  // Sample data for market comparison
  const data = [
    { month: 'Jan', portfolio: 100, sp500: 100, nasdaq: 100, bonds: 100 },
    { month: 'Feb', portfolio: 103.5, sp500: 102.1, nasdaq: 101.8, bonds: 99.8 },
    { month: 'Mar', portfolio: 106.7, sp500: 104.2, nasdaq: 103.5, bonds: 100.2 },
    { month: 'Apr', portfolio: 111.2, sp500: 107.8, nasdaq: 108.2, bonds: 100.5 },
    { month: 'May', portfolio: 113.5, sp500: 109.3, nasdaq: 110.1, bonds: 101.2 },
    { month: 'Jun', portfolio: 116.8, sp500: 112.4, nasdaq: 114.5, bonds: 101.8 },
    { month: 'Jul', portfolio: 120.2, sp500: 115.7, nasdaq: 118.2, bonds: 102.2 },
    { month: 'Aug', portfolio: 124.5, sp500: 118.3, nasdaq: 121.8, bonds: 103.1 },
    { month: 'Sep', portfolio: 127.3, sp500: 119.2, nasdaq: 123.5, bonds: 103.4 },
    { month: 'Oct', portfolio: 129.8, sp500: 120.5, nasdaq: 125.1, bonds: 102.8 },
    { month: 'Nov', portfolio: 132.6, sp500: 122.4, nasdaq: 128.7, bonds: 103.5 },
    { month: 'Dec', portfolio: 136.2, sp500: 125.7, nasdaq: 132.3, bonds: 104.2 }
  ];

  const config = {
    portfolio: { label: "Recommended Portfolio", theme: { light: "#EA384C", dark: "#EA384C" } },
    sp500: { label: "S&P 500", theme: { light: "#1A1A1A", dark: "#ffffff" } },
    nasdaq: { label: "NASDAQ", theme: { light: "#3B82F6", dark: "#60A5FA" } },
    bonds: { label: "Bond Index", theme: { light: "#10B981", dark: "#34D399" } }
  };

  return (
    <ChartContainer config={config}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="month" />
          <YAxis domain={[95, 140]} tickFormatter={(value) => `${value}`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            type="monotone"
            dataKey="portfolio"
            name="Recommended Portfolio"
            stroke="#EA384C"
            fill="#EA384C"
            fillOpacity={0.1}
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="sp500"
            name="S&P 500"
            stroke="#1A1A1A"
            fill="#1A1A1A"
            fillOpacity={0.1}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="nasdaq"
            name="NASDAQ"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.1}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="bonds"
            name="Bond Index"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.1}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default MarketComparisonChart;
