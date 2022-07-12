import { Outlet } from "react-router-dom";

import Connexion from "./components/Connexion";
import useAuth from "./hooks/UseAuth";

export default function ProtectedRoutes() {
  const { auth } = useAuth();
  return auth?.user?.name ? <Outlet /> : <Connexion />;
}
