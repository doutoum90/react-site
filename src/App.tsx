import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import { IMenus } from "./interfaces/menus.interface";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";

function App(): JSX.Element {
  const menus: IMenus = {
    menuLeft: {
      protege: [{ name: "Articles", path: "/articles" }],
      publiq: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
    menuRight: {
      protege: [{ name: "Se deconnecter", path: "/logout" }],
      publiq: [
        { name: "Connexion", path: "/connexion" },
        { name: "Inscription", path: "/inscription" },
      ],
    },
  };
  return (
    <AuthProvider>
      <Router>
        <Header key="header" menus={menus} />

        <NavLink to="/"></NavLink>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home key="Home" />} />
            <Route path="/About" element={<About key="About" />} />
            <Route path="/contact" element={<Contact key="Contact" />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/articles">
                <Route index element={<Articles key="Articles" />} />
                <Route
                  path=":number"
                  element={<Article key="ArticleDetail" />}
                />
              </Route>
            </Route>

            <Route path="/connexion" element={<Connexion key="Connexion" />} />
            <Route
              path="/inscription"
              element={<Inscription key="Inscription" />}
            />
          </Routes>
        </div>
        <Footer key="footer" />
      </Router>
    </AuthProvider>
  );
}

export default App;
