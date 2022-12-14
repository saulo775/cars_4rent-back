import express from "express";
import swaggerUi from "swagger-ui-express";

import router from "./routes";
import swaggerFile from "./swagger.json";
import "./database";

const app = express();
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3336, () => {
  console.log("Server running on port 3336");
});
