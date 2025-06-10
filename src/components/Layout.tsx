
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import FooterSection from "./home/FooterSection";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  if (isDashboard) {
    return (
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen bg-gray-50 dark:bg-gray-900">
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
      <main className="flex-1  mt-[70px]">
        {children}
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
