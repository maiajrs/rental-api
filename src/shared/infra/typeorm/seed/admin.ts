import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);
  await connection.query(
    `INSERT INTO USERS(id, name, password, email, driver_license, "isAdmin", created_at) 
       values('${id}', 'name_admin', '${password}', 'admin@mail.com', 'ABD-1234', 'true', 'now()')`
  );

  await connection.close()
}

create().then(() => console.log("admin criado com sucesso!"))
