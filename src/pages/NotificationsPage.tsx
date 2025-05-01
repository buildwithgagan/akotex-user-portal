
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Bell, BellOff, Info, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NotificationsPage = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Portfolio update",
      description: "Your portfolio value increased by 3.2% last week",
      date: "Today at 10:43 AM",
      read: false,
      type: "success"
    },
    {
      id: 2,
      title: "Security alert",
      description: "New login detected from an unknown device",
      date: "Yesterday at 8:15 PM",
      read: false,
      type: "warning"
    },
    {
      id: 3,
      title: "Investment opportunity",
      description: "New investment options available in your region",
      date: "Mar 30, 2025",
      read: true,
      type: "info"
    },
    {
      id: 4,
      title: "Document ready",
      description: "Your quarterly statement is now available",
      date: "Mar 29, 2025",
      read: true,
      type: "info"
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    toast({
      title: "Notification marked as read",
      description: "The notification has been marked as read",
      variant: "success",
    });
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, read: true }))
    );
    toast({
      title: "All notifications marked as read",
      description: "All notifications have been marked as read",
      variant: "success",
    });
  };

  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter(notification => notification.id !== id)
    );
    toast({
      title: "Notification deleted",
      description: "The notification has been removed",
      variant: "success",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "info":
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          View and manage your notifications
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Bell className="mr-2 h-5 w-5" />
          <span className="font-medium">
            {notifications.filter(n => !n.read).length} Unread notifications
          </span>
        </div>
        <div className="space-x-2">
          {notifications.some(n => !n.read) && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
          <Button variant="outline" size="sm">
            <BellOff className="mr-2 h-4 w-4" />
            Mute notifications
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent notifications</CardTitle>
          <CardDescription>View and manage your recent notifications</CardDescription>
        </CardHeader>
        <CardContent>
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Bell className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No notifications</h3>
              <p className="text-sm text-muted-foreground">
                You don't have any notifications at the moment.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Configure which notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="portfolio-updates" />
            <div>
              <label
                htmlFor="portfolio-updates"
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Portfolio updates
              </label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about significant changes to your portfolio value
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="security-alerts" defaultChecked />
            <div>
              <label
                htmlFor="security-alerts"
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Security alerts
              </label>
              <p className="text-sm text-muted-foreground">
                Be notified about important security events related to your account
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="investment-opportunities" />
            <div>
              <label
                htmlFor="investment-opportunities"
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Investment opportunities
              </label>
              <p className="text-sm text-muted-foreground">
                Get notifications about new investment options
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="document-updates" defaultChecked />
            <div>
              <label
                htmlFor="document-updates"
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Document updates
              </label>
              <p className="text-sm text-muted-foreground">
                Be notified when new documents are available for your review
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage;
