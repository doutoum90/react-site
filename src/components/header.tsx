import React from "react";
import { Menus } from "../interfaces/menus.interface";
import "./header.css";

export default function Header({ menus }: { menus: Menus }) {
  return (
    <>
      <nav>
        <ul className="floatleft">
          {menus.menuLeft.map((menu, key) => {
            return (
              <li>
                <a key={key} href={menu.path}>
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="floatright">
          {menus.menuRight.map((menu, key) => {
            return (
              <li>
                <a key={key} href={menu.path}>
                  {menu.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
