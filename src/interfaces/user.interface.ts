import { Address } from "./address.interface";
import { Company } from "./company.interface";

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  roles?: string;
  accessToken?: string;
}
