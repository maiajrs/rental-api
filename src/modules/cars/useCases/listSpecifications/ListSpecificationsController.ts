import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListCategoriesController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const especification = this.listSpecificationsUseCase.execute();

    return res.status(201).json({ especification });
  }
}

export { ListCategoriesController };
