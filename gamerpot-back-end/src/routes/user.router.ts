import express, { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { getCustomRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { authenticate } from "../middleware/authentication";
import jwt from "jsonwebtoken";
import { JWT } from "../config/jwt";

export const UserRouter = () => {
  const userRepository = getCustomRepository(UserRepository);
  const router = express.Router();

  router.get("/users", authenticate, async (req: Request, res: Response) => {
    const users = await userRepository.find();
    return res.send(users).status(200);
  });

  router.post("/register", async (req, res) => {
    const data = req.body;
    try {
      const newUser = await userRepository.save(new User(data));
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  router.post("/signIn", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const foundUser = await userRepository.findOne({ where: { email } });
      if (!foundUser) {
        res.status(404).json({ message: "Email does not exist" });
      }

      if(password !== foundUser!.password){
        res.status(400).json({message: 'Credentials does not match'})
      }
      const token = jwt.sign({ foundUser }, JWT.SECRET, {expiresIn: JWT.EXPIRATION_TIME});
      return res.status(200).json(token);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  return { router };
};
