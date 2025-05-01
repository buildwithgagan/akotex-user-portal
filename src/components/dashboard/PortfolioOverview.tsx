
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "ETFs", value: 40, color: "#EA384C" },
  { name: "Real Estate", value: 35, color: "#1A1A1A" },
  { name: "Crypto", value: 25, color: "#6E59A5" },
];

const PortfolioOverview = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="font-medium mb-4">Asset Allocation</h3>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Overall Performance</span>
            <span className="font-medium text-green-600">+15.4%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-akotex-red h-2 rounded-full" style={{ width: "15.4%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
