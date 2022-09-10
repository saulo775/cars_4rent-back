import { Request, Response, Router } from "express";

import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(409).json({ error: "category already exists" });
  }

  categoriesRepository.create({ name, description });

  return res.sendStatus(201);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
  const categories = categoriesRepository.list();
  return res.status(200).json(categories);
});

export default categoriesRoutes;
