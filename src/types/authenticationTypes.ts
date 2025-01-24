export type ObjectUser = {
  email: string;
  password: string;
};

type User = {
  email: string;
  name: string;
};

export type AuthType = {
  token: string | null;
  isAuthenticated: boolean;
  userPermission: string | null;
  user: User | null;
  message: string;
};
