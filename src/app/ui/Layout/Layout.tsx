import { Outlet } from "react-router-dom";
import { useIsAuthenticated } from "~/entities/user";
import { Header } from "./Header";

export const Layout = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Header />
          <Outlet />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
};
