import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import FooterSection from "./home/FooterSection";
import AuthSideView from "./auth/AuthSideView";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isDashboard = location.pathname.includes("/dashboard");
  const authPaths = ["/login", "/signup", "/forgot-password"];
  const isAuth = authPaths.includes(pathname);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  if (isDashboard) {
    return (
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen bg-gray-50 dark:bg-gray-900">
          <DashboardSidebar />
          <SidebarInset className="pt-6">
            <div className="container mx-auto px-4">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  if (isAuth) {
    return (
      <div className="flex min-h-screen">
        <AuthSideView />
        <div className="flex items-center justify-center flex-1 p-4 md:p-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1  mt-[70px]">{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
