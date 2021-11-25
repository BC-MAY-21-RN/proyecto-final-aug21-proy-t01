import { Request, Response, NextFunction} from 'express'
import { JWT } from "../config/jwt";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['authorization']){
    res.status(401).json({message: 'You are not authenticated'})
  }

  const token = req.headers['authorization']!.split(' ')[1]
  jwt.verify(token, JWT.JWT_SECRET, (error, decoded) => {
    if(error){
      res.status(401).json({message: 'Token can not be decoded'})
    }else{
      req.user = decoded;
      next();
    }
  })
}
