
import { Progress } from "@/components/ui/progress";

const PerformanceMetrics = () => {
  // Sample performance metrics
  const metrics = [
    { name: "ROI", value: 14.8, target: 12, color: "bg-green-600" },
    { name: "Volatility", value: 5.2, target: 10, color: "bg-blue-600" },
    { name: "Sharpe Ratio", value: 1.9, target: 2.5, color: "bg-amber-500" },
    { name: "Alpha", value: 2.1, target: 3, color: "bg-purple-600" }
  ];

  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{metric.name}</span>
            <span className="text-sm font-medium">
              {metric.value} <span className="text-muted-foreground text-xs">/ {metric.target}</span>
            </span>
          </div>
          <Progress 
            value={(metric.value / metric.target) * 100} 
            className="h-2" 
            indicatorClassName={metric.color}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0</span>
            <span>{metric.target}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
