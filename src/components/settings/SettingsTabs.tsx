
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, CreditCard, Lock, Sun, User } from "lucide-react";
import ProfileTab from "./ProfileTab";
import SecurityTab from "./SecurityTab";
import BillingTab from "./BillingTab";
import NotificationsTab from "./NotificationsTab";
import DisplayTab from "./DisplayTab";

const SettingsTabs = () => {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList className="flex-wrap">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User size={16} />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Lock size={16} />
          <span>Security</span>
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <CreditCard size={16} />
          <span>Billing</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell size={16} />
          <span>Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="display" className="flex items-center gap-2">
          <Sun size={16} />
          <span>Display</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <ProfileTab />
      </TabsContent>

      <TabsContent value="security">
        <SecurityTab />
      </TabsContent>

      <TabsContent value="billing">
        <BillingTab />
      </TabsContent>

      <TabsContent value="notifications">
        <NotificationsTab />
      </TabsContent>

      <TabsContent value="display">
        <DisplayTab />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;
