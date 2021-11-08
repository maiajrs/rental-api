interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  avatar?: string;
  id?: string;
  driver_license: string;
}

export { ICreateUserDTO };
