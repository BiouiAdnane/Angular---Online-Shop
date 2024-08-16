import {UUID} from "angular2-uuid";

export interface AppUser {
  userId : UUID;
  username : string;
  password : string;
  roles : String[];

}
