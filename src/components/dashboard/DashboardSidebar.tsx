
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  CreditCard,
  Bell,
  ChevronLeft
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Menu items for the sidebar
  const menuItems = [
    {
      title: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Investments",
      path: "/dashboard/investments",
      icon: BarChart3
    },
    {
      title: "Performance",
      path: "/dashboard/performance",
      icon: BarChart3
    },
    {
      title: "Payments",
      path: "/dashboard/payments",
      icon: CreditCard
    },
    {
      title: "Documents",
      path: "/dashboard/documents",
      icon: FileText
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center border-b px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png"
            alt="Akotex Group Logo"
            className="h-8 w-auto"
          />
        </Link>
      </SidebarHeader>

      <SidebarRail />

      <SidebarContent>
        <div className="flex items-center justify-end px-2 py-2">
          <SidebarTrigger className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft size={18} />
          </SidebarTrigger>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={currentPath === item.path}
                  >
                    <Link to={item.path}>
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>User</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Notifications">
                  <Link to="/dashboard/notifications">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <Link to="/">
                    <Home size={18} />
                    <span>Back to Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-4 py-2">
        <div className="flex flex-col gap-2">
          <div className="text-xs text-muted-foreground">
            Logged in as <span className="font-semibold">John Doe</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Logout</Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
