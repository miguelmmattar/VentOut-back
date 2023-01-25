// import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import dayjs from "dayjs";
import { invalidCredentialsError } from "../errors/invalid-credentials-error";

async function signUp(params: SignUpParams): Promise<SignUpResult> {
  const { email, name } = params;

  checkNewUserOrFail(email);

  const { id } = await createUser(email, name);

  return {
    id,
    email,
    name,
  }
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
    const user = await userRepository.findByEmail(email);
    if (!user) throw invalidCredentialsError();

    return user;
}

async function checkNewUserOrFail(email: string) {
    const user = await userRepository.findByEmail(email);
    if (user) throw invalidCredentialsError();
}

async function createUser(email: string, name: string) {
    const newUser = await userRepository.create({
        name,
        email,
        updatedAt: dayjs().toDate(),
    })
    return newUser;
}

export type SignInParams = Pick<User, "email">;

export type SignUpParams = Pick<User, "email" | "name">;

export type NewUserParams = Pick<User, "email" | "name" | "updatedAt">;

type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
};

type SignUpResult = Pick<User, "id" | "email" | "name">;
  
type GetUserOrFailResult = Pick<User, "id" | "email" >;
  
 const authenticationService = {
    signUp,
};
  
export default authenticationService;