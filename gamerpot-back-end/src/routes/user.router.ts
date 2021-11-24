import express, { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { getCustomRepository } from "typeorm";
import { User } from "../entities/user.entity";
import { authenticate } from "../middleware/authentication";
import jwt from "jsonwebtoken";
import { JWT } from "../config/jwt";
import bcrypt from "bcrypt";

export const UserRouter = () => {
  const userRepository = getCustomRepository(UserRepository);
  const router = express.Router();

  router.get("/users", authenticate, async (req: Request, res: Response) => {
    const users = await userRepository.find();
    return res.send(users).status(200);
  });

  router.get(
    "/:userId/edit",
    authenticate,
    async (req: Request, res: Response) => {
      try {
        const foundUser = await userRepository.findOne(req.params.userId);
        console.log(foundUser);

        return res.status(200).json(foundUser);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  );

  router.put("/:userId", authenticate, async (req: Request, res: Response) => {
    try {
      const foundUser = await userRepository.findOne(req.params.userId);

      if (!foundUser) {
        res.status(404).json({ message: "User not found" });
      }

     /* const updatedUser = await userRepository.update(
        { userId: foundUser!.userId },
        {description: req.body.description}
      );*/
      console.log(req.body);
      const updatedUser = await userRepository.save(
        {...foundUser, description: req.body.description}
      );

      console.log("updated user: ", updatedUser);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  router.post("/register", async (req: Request, res: Response) => {
    const { name, username, email, password, description, profilePictureUrl } =
      req.body;

    try {
      const foundUser = await userRepository.findOne({ where: { email } });
      if (foundUser) res.status(404).json({ message: "Email already exists" });

      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = await userRepository.save(
        new User({
          name,
          username,
          email,
          password: encryptedPassword,
          description,
          profilePictureUrl,
        })
      );
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

      const isPasswordMatch = await bcrypt.compare(
        password,
        foundUser!.password
      );

      if (isPasswordMatch) {
        const token = jwt.sign({ foundUser }, JWT.JWT_SECRET, {
          expiresIn: JWT.EXPIRATION_TIME,
        });
        return res.status(200).json(token);
      }
      return res.status(400).json({ message: "Credentials does not match" });
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  return { router };
};
