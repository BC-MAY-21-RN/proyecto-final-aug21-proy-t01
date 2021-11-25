import express from "express";
import { authenticate } from "../middleware/authentication";
import {
  getUser,
  getUsers,
  signUp,
  signIn,
  updateUser,
} from "../controllers/user";

export const UserRouter = () => {
  const router = express.Router();

  router.get("/users", authenticate, getUsers);

  router.get("/:userId", authenticate, getUser);

  router.put("/:userId", authenticate, updateUser);

  router.post("/register", signUp);

  router.post("/login", signIn);

  return { router };
};
