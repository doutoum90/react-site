import { Outlet } from "react-router-dom";
import Connexion from "./components/Connexion";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

export default function ProtectedRoutes() {
  return useAuth() ? <Outlet /> : <Connexion />;
}
