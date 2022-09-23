import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" }).single("file");

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/", (request, response) => {
  createCategoryController().handle(request, response);
});

categoriesRoutes.post("/import", upload, (request, response) => {
  importCategoriesController.handle(request, response);
});

export default categoriesRoutes;
