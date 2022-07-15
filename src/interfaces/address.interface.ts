import { Go } from "./go.interface";

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Go;
}
