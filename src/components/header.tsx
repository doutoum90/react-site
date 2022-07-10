import React from "react";
import { NavLink } from "react-router-dom";
import { IMenus } from "../interfaces/menus.interface";
import "./Header.css";

export default function Header({ menus }: { menus: IMenus }): JSX.Element {
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
