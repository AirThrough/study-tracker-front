import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "~pages/Home";
import { useAuthStore } from "~app/model/store/auth/auth.store";
import { AuthPage } from "~pages/Auth";

export const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="*" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
