import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  Menu,
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
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Investments",
      path: "/dashboard/investments",
      icon: BarChart3,
    },
    {
      title: "Performance",
      path: "/dashboard/performance",
      icon: BarChart3,
    },
    {
      title: "Payments",
      path: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Documents",
      path: "/dashboard/documents",
      icon: FileText,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const sidebarMenu = (
    <>
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
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden absolute z-10">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[260px] p-0">
            <SheetHeader className="border-b px-4 py-3">
              <SheetTitle className="text-left">
                <Link to="/" onClick={() => setOpen(false)}>
                  <img src="/images/logo.png" alt="Logo" className="h-8" />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="p-2 space-y-6">{sidebarMenu}</div>
            <SidebarFooter className="border-t p-4">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-muted-foreground">
                  Logged in as <span className="font-semibold">John Doe</span>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <LogOut size={16} />
                      Logout
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to logout?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        You will need to login again to access your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Link to="/login">Logout</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </SidebarFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar>
          <SidebarHeader className="flex items-center border-b px-4 py-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </SidebarHeader>
          <SidebarRail />
          <SidebarContent>{sidebarMenu}</SidebarContent>
          <SidebarFooter className="border-t px-4 py-2">
            <div className="flex flex-col gap-2">
              <div className="text-xs text-muted-foreground">
                Logged in as <span className="font-semibold">John Doe</span>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to logout?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You will need to login again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Link to="/login">Logout</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </SidebarFooter>
        </Sidebar>
      </div>
    </>
  );
};

export default DashboardSidebar;