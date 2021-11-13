import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  repository: User[] = [];

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      password,
      email,
      driver_license,
    });

    this.repository.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.repository.find((user) => user.email === email);
    return user;
  }
  async findById(id: string): Promise<User> {
    const user = this.repository.find((user) => user.id === id);

    return user;
  }
}

export { UsersRepositoryInMemory };
