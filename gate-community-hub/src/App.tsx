import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/page/Auth/Login";
import OAuthSuccess from "@/page/Auth/OAuthSuccess";
import Dashboard from "@/page/Dashboard/Dashboard";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import Logout from "./page/Auth/Logout";
import { Layout } from "./components/ui/layout/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryProvider } from "./context/QueryProvider";

export default function App() {
  return (
  <QueryProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/oauth-success" element={<OAuthSuccess />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </QueryProvider>
  );
}
