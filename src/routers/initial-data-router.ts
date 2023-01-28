import { Router } from "express";

import { getInitialData } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const initialDataRouter = Router();

initialDataRouter
    .all("/*", authenticateToken)
    .get("", getInitialData);

export { initialDataRouter };