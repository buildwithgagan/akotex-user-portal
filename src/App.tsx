import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import InvestmentPage from "./pages/InvestmentPage";
import PerformancePage from "./pages/PerformancePage";
import PaymentsPage from "./pages/PaymentsPage";
import DocumentsPage from "./pages/DocumentsPage";
import SettingsPage from "./pages/SettingsPage";
import NotificationsPage from "./pages/NotificationsPage";
import InvestmentOptionsPage from "./pages/InvestmentOptionsPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CompliancePage from "./pages/CompliancePage";
import SecurityPage from "./pages/SecurityPage";
import EntryDialog from "./components/home/EntryDialog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <EntryDialog />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/signup"
              element={
                <Layout>
                  <SignupPage />
                </Layout>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <Layout>
                  <ForgotPasswordPage />
                </Layout>
              }
            />
            <Route
              path="/investments"
              element={
                <Layout>
                  <InvestmentOptionsPage />
                </Layout>
              }
            />
            <Route
              path="/performance"
              element={
                <Layout>
                  <PerformancePage />
                </Layout>
              }
            />
            <Route
              path="/terms"
              element={
                <Layout>
                  <TermsOfServicePage />
                </Layout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <PrivacyPolicyPage />
                </Layout>
              }
            />
            <Route
              path="/compliance"
              element={
                <Layout>
                  <CompliancePage />
                </Layout>
              }
            />
            <Route
              path="/security"
              element={
                <Layout>
                  <SecurityPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <DashboardPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/investments"
              element={
                <Layout>
                  <InvestmentPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/performance"
              element={
                <Layout>
                  <PerformancePage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/payments"
              element={
                <Layout>
                  <PaymentsPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/documents"
              element={
                <Layout>
                  <DocumentsPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <Layout>
                  <SettingsPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/notifications"
              element={
                <Layout>
                  <NotificationsPage />
                </Layout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
