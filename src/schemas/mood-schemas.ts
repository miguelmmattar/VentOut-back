import Joi from "joi";

import { MoodParams, UpsertMoodParams } from "@/services/mood-service";

export const postMoodSchema = Joi.object<UpsertMoodParams>({
    name: Joi.string().min(1).required(),
    newMood: Joi.object<MoodParams>({
      updatedAt: Joi.date().required(),
    }),
  });