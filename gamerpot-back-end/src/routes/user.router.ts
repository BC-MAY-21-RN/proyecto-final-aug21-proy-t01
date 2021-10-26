import express from 'express';
import { UserRepository } from '../repositories/user.repository';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/user.entity';

export const UserRouter = () => {
  const userRepository = getCustomRepository(UserRepository);
  const router = express.Router();

  router.get('/users', async (req, res) => {
    const users = await userRepository.find();
    return res.send(users).status(200);
  });

  router.post('/users', async (req, res) => {
    const data = req.body;
    try {
      const newUser = await userRepository.save(new User(data));
      return res.status(200).json(newUser);
    } catch(error) {
      return res.status(500).json(error);
    }
  });

  return {router};
}
