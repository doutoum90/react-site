import React from "react";
import { NavLink } from "react-router-dom";
import { Menus } from "../interfaces/menus.interface";
import "./header.css";

export default function Header({ menus }: { menus: Menus }) {
  return (
    <>
      <nav key="key11">
        <ul className="floatleft" key="floatleft">
          {menus.menuLeft.map((menu, key) => {
            return (
              <li key={key}>
                <NavLink key={key} to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="floatright" key="floatright">
          {menus.menuRight.map((menu, key) => {
            return (
              <li key={key}>
                <NavLink key={key} to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
