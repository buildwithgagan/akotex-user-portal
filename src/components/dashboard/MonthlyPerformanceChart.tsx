
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface MonthlyPerformanceChartProps {
  isQuarterly?: boolean;
  isYearly?: boolean;
}

const MonthlyPerformanceChart = ({ isQuarterly = false, isYearly = false }: MonthlyPerformanceChartProps) => {
  // Sample data for the chart
  const monthlyData = [
    { name: 'Jan', return: 2.4, benchmark: 1.8 },
    { name: 'Feb', return: 1.8, benchmark: 1.2 },
    { name: 'Mar', return: -0.7, benchmark: -1.3 },
    { name: 'Apr', return: 3.2, benchmark: 2.4 },
    { name: 'May', return: 0.9, benchmark: 0.5 },
    { name: 'Jun', return: 1.4, benchmark: 1.0 },
    { name: 'Jul', return: 2.8, benchmark: 2.1 },
    { name: 'Aug', return: -0.2, benchmark: -0.5 },
    { name: 'Sep', return: 1.7, benchmark: 1.5 },
    { name: 'Oct', return: 2.2, benchmark: 1.9 },
    { name: 'Nov', return: 1.5, benchmark: 1.2 },
    { name: 'Dec', return: 1.9, benchmark: 1.7 },
  ];

  const quarterlyData = [
    { name: 'Q1', return: 3.5, benchmark: 1.7 },
    { name: 'Q2', return: 5.5, benchmark: 3.9 },
    { name: 'Q3', return: 4.3, benchmark: 3.1 },
    { name: 'Q4', return: 5.6, benchmark: 4.8 },
  ];

  const yearlyData = [
    { name: '2022', return: 10.5, benchmark: 8.2 },
    { name: '2023', return: 12.8, benchmark: 9.5 },
    { name: '2024', return: 8.9, benchmark: 7.1 },
    { name: '2025', return: 4.6, benchmark: 3.2 },
  ];

  const data = isYearly ? yearlyData : (isQuarterly ? quarterlyData : monthlyData);
  const title = isYearly ? "Yearly" : (isQuarterly ? "Quarterly" : "Monthly");

  return (
    <div className="h-72">
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
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="return" name="Your Portfolio" fill="#EA384C" />
          <Bar dataKey="benchmark" name="Market Benchmark" fill="#1A1A1A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyPerformanceChart;
