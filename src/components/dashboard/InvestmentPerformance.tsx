
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const InvestmentPerformance = () => {
  // Sample data for the chart
  const data = [
    { month: 'Jan', investment: 12000, returns: 12200 },
    { month: 'Feb', investment: 15000, returns: 15450 },
    { month: 'Mar', investment: 18000, returns: 18720 },
    { month: 'Apr', investment: 20000, returns: 21100 },
    { month: 'May', investment: 22000, returns: 23430 },
    { month: 'Jun', investment: 25840, returns: 28102 },
    { month: 'Jul', investment: 25840, returns: 30265 },
  ];

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="investment" 
            name="Total Invested" 
            stroke="#1A1A1A" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="returns" 
            name="Current Value" 
            stroke="#EA384C" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentPerformance;
