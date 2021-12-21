export interface UserData {
  username: string;
  email: string;
  birth_date: string;
  phone: string;
  identity: string;
  passport_number: string;
}

export interface UserRO {
  user: UserData;
}