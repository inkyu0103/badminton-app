import type { User as FullUser } from '@prisma/client';

export type CreateUser = Omit<FullUser, 'id' | 'createdAt' | 'updatedAt'>;
export type User = Omit<FullUser, 'createdAt' | 'updatedAt' | 'password'>;

export interface LoginFormData {
  email: string;
  password: string;
}

export type RequestWithUser = Request & { user: User };
