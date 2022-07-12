import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

export default function Connexion(): JSX.Element {
  const { setAuth, auth } = useAuth();
  let location = useLocation();
  const authEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const user = { name: "John", lastName: "DOE" };
    const pwd = "mot de passe";
    const roles = "ROLES";
    const accessToken = "ACESS_TOKEN";
    setAuth({ user, pwd, roles, accessToken });
    // return <Link to="/articles" />;
    console.log(auth, user, pwd, roles, accessToken);
    return <Navigate to="/" state={{ from: location }} replace />;
  };
  return (
    <>
      <form>
        <div>
          <label>Identifiant</label>
          <input type="text" name="identifiant" />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type="text" name="motdepasse" />
        </div>

        <div>
          <button onClick={authEvent} name="connexion">
            Connexion
          </button>
        </div>
      </form>
    </>
  );
}
