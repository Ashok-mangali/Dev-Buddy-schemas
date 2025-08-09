export interface SignupInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupRecord {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  userId: number;
  message: string;
}


