import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppErrors } from "@shared/errors/AppErrors";
import { NextFunction, Request, Response } from "express";

export async function checkUserAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.user;
  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);
  if (!user.isAdmin) {
    throw new AppErrors("forbidden", 403);
  }
  next();
}
