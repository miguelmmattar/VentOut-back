import { Router } from "express";


import { createOrUpdateMood, getTodaysMood } from "@/controllers";
import { validateBody } from "@/middlewares";
import { postMoodSchema } from "@/schemas";
import { authenticateToken } from "@/middlewares";

const moodRouter = Router();

moodRouter
    .all("/*", authenticateToken)
    .get("/today", getTodaysMood)
    .post("", validateBody(postMoodSchema), createOrUpdateMood);

export { moodRouter };