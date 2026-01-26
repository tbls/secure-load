export type User = {
  id: string;
  email: string;
  name: string;
  role: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type AuthSession = {
  userId: string;
  role: string;
};
