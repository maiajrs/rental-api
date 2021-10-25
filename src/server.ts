import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specifationsRoutes } from "./routes/especification.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specifationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
