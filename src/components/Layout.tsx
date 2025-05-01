
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "./dashboard/DashboardSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  if (isDashboard) {
    return (
      <SidebarProvider>
        <div className="flex w-full min-h-screen bg-gray-50">
          <DashboardSidebar />
          <SidebarInset className="pt-6">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
