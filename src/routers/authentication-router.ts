import { signOutPut, singInPost, singUpPost } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema, signOutSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter
    .post("/sign-up", validateBody(signUpSchema), singUpPost)
    .post("/sign-in", validateBody(signInSchema), singInPost)
    .put("/sign-out", validateBody(signOutSchema), signOutPut);

export { authenticationRouter };
