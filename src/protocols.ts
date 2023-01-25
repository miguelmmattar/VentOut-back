import { Emotions, Moods, Spots, Symptoms } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
  };

export type RequestError = {
status: number,
data: object | null,
statusText: string,
name: string,
message: string,
};

export type LoginParams = {
  email: string,
  password: string,
}

export type RegisterParams = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
};

export type NewMood = Omit<Moods, "id">

export type NewEmotion = Omit<Emotions, "id">

export type NewSymptom = Omit<Symptoms, "id" | "type">