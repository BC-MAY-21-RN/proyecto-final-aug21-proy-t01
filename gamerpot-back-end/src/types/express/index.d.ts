declare namespace Express {
  export interface Request {
    user?: User | JwtPayload;
  }
}

interface User {
  name: string;
  email: string;
  password: string;
  profilePictureUrl: string;
}
