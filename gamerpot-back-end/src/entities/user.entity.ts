import { Comment } from './comment.entity';
import { Game } from './game.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'assets/profile_picture.png' })
  profilePictureUrl: string;

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @ManyToMany(() => Game, (game) => game.savedBy, { eager: true })
  @JoinTable()
  wishlist: Game[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
