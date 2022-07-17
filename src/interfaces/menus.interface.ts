import { IMenu } from "./menu.interface";

export interface IMenus {
  menuLeft: ISubMenu;
  menuRight: ISubMenu;
}

export interface ISubMenu {
  protege: IMenu[];
  publiq: IMenu[];
}