import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Menus } from "./interfaces/menus.interface";
import Main from "./components/main";

function App() {
  const menus: Menus = {
    menuLeft: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Home", path: "/" },
    ],
    menuRight: [
      { name: "Connexion", path: "/connexion" },
      { name: "Inscription", path: "/inscription" },
    ],
  };
  return (
    <div className="App">
      <Header menus={menus} />

      <Main />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
