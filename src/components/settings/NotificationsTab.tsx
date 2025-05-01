
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const NotificationsTab = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Notification preferences updated",
        description: "Your notification preferences have been saved successfully.",
        variant: "success",
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Investment Updates</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Portfolio updates</p>
                  <p className="text-sm text-muted-foreground">Receive notifications when your portfolio value changes significantly</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New investment opportunities</p>
                  <p className="text-sm text-muted-foreground">Get notified about new investment options</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Market reports</p>
                  <p className="text-sm text-muted-foreground">Weekly summaries of market performance</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Account Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Security alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified about important security updates</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account updates</p>
                  <p className="text-sm text-muted-foreground">Receive notifications about your account status</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save preferences"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotificationsTab;
