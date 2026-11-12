import { Router } from "express";

import * as controller from "../controller/notinhas.controller.ts";

export const notinhasRouter = Router();

notinhasRouter.get("/", controller.listar);
notinhasRouter.post("/", controller.criar);