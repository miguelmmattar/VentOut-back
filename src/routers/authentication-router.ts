import { singUpPost } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter
    .post("/sign-up", validateBody(signUpSchema), singUpPost);

export { authenticationRouter };
