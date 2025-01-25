export type reqAuth = {
  email: string;
  password: string;
};

export type resAuth = {
  status: string;
  token: string;
  permission: string;
  name: string;
  email: string;
};

export type errorAuth = {
  error: string;
};
