import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUserCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUserCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUserCase(usersRepositoryInMemory);
  });
  it("should be able to create a new user", async () => {
    const user = {
      name: "name test",
      password: "1234password-test",
      email: "email@mail.com",
      driver_license: "1234-license",
    };
    await createUserUseCase.execute(user);
    const userCreated = await usersRepositoryInMemory.findByEmail(user.email);
    expect(userCreated).toHaveProperty("id");
  });
});
