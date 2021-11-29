import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";
import { JWT } from "../config/jwt";
import jwt from "jsonwebtoken";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userRepository = getCustomRepository(UserRepository);
  try {
    const users = await userRepository.find();
    return res.send(users).status(200);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userRepository = getCustomRepository(UserRepository);
  try {
    const foundUser = await userRepository.findOne(req.params.userId);
    return res.status(200).json(foundUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;
  const userRepository = getCustomRepository(UserRepository);
  try {
    const foundUser = await userRepository.findOne({ where: { email } });
    if (!foundUser) {
      res.status(404).json({ message: "Email does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, foundUser!.password);

    if (isPasswordMatch) {
      const token = jwt.sign({ foundUser }, JWT.JWT_SECRET, {
        expiresIn: JWT.EXPIRATION_TIME,
      });
      const userId = foundUser!.userId;
      return res.status(200).json({token, userId});
    }
    return res.status(400).json({ message: "Credentials does not match" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, userName, email, password } =
    req.body;
  const userRepository = getCustomRepository(UserRepository);

  try {
    const foundUser = await userRepository.findOne({ where: { email } });
    if (foundUser) res.status(404).json({ message: "Email already exists" });

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.save(
      new User({
        name,
        userName,
        email,
        password: encryptedPassword,
      })
    );
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userRepository = getCustomRepository(UserRepository);
  try {
    const foundUser = await userRepository.findOne(req.params.userId);

    if (!foundUser) {
      res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await userRepository.save({
      ...foundUser,
      description: req.body.description,
      profilePictureUrl: req.body.profilePictureUrl,
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};
