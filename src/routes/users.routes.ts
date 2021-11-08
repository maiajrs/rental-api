import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

try {
  const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

  const createUserController = new CreateUserController();
  const updateUserAvatarController = new UpdateUserAvatarController();

  usersRoutes.post("/", createUserController.handle);
  usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
  );
} catch (error) {
  console.log(`O erro está aqui: ${error.messase}`);
}

export { usersRoutes };
