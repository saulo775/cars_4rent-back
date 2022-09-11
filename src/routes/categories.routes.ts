import { Request, Response, Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.sendStatus(201);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
  const categories = categoriesRepository.list();
  return res.status(200).json(categories);
});

export default categoriesRoutes;
