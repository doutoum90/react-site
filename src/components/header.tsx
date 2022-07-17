import React from "react";

import { IMenus } from "../interfaces/menus.interface";
import "./Header.css";
import NavBarTop from "./NavBarTop";
import NavBarBottom from "./NavBarBottom";

export default function Header({ menus }: { menus: IMenus }): JSX.Element {
  return (
    <>
      <NavBarTop key="top" />
      <NavBarBottom menus={menus} key="bottom" />
    </>
  );
}
