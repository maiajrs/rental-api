import { AppErrors } from "@errors/AppErrors";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUserCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticationUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let craeteUserUseCase: CreateUserUserCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    craeteUserUseCase = new CreateUserUserCase(usersRepositoryInMemory);
  });
  it("it should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "name test",
      password: "1234password-test",
      email: "user@mail.com",
      driver_license: "1234-license",
    };
    await craeteUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("it should not be able to authenticate a non-existent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "nao-existe",
        password: "nao-existe",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });
  it("it should not be able to authenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      name: "name test",
      password: "1234password-test",
      email: "user@mail.com",
      driver_license: "1234-license",
    };
    await craeteUserUseCase.execute(user);

    expect(async () => {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "wrong-password",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });
});
