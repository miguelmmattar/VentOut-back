import authenticationService, { SignInParams, SignUpParams } from "@/services/authentication-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

/* export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) { 
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
} */

export async function singUpPost(req: Request, res: Response) {
    const { name, email } = req.body as SignUpParams;
  
    try {
      const result = await authenticationService.signUp({ name, email });
      console.log(result);
  
      return res.status(httpStatus.OK).send(result);
    } catch (error) { 
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }