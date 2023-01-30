import { notFoundError } from "@/errors";
import { DateFilter } from "@/protocols";
import moodRepository from "@/repositories/mood-repository";
import { Moods, MyMoods } from "@prisma/client";

async function findTodaysMood(params: TodaysMoodParams): Promise<Moods> {
    const { userId, filter } = params;
  
    const moods = await moodRepository.findFiltered(userId, filter);
    
    if(!moods[0]) {
        return;
    }

    return moods[0].Moods;
}

async function findUserMoods(userId: number): Promise<UserMoods[]> {  
    const moods = await moodRepository.findByUserId(userId);

    if(!moods) {
        throw notFoundError();
    }

    let result: UserMoods[] = moods.map((mood) => ({
        mood: mood.Moods.name,
        color: mood.Moods.color,
        date: mood.createdAt
    }));

    return result;
}

async function upsertMood(params: UpsertMoodParams) {
    const { newMood, name } = params;

    await moodRepository.upsert(newMood, name);
}

export type MoodParams = Pick<MyMoods, "userId" | "updatedAt">;

export type TodaysMoodParams = {
    userId: number,
    filter: DateFilter,
}

export type UpsertMoodParams = {
    newMood: MoodParams,
    name: string,
};

export type UserMoods = {
    mood: string,
    color: string,
    date: string | Date
}

const moodService = {
    findTodaysMood,
    upsertMood,
    findUserMoods,
};

export default moodService;