
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Welcome, John Doe</h1>
        <p className="text-muted-foreground">Here's a summary of your investments</p>
      </div>
      
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span>Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
