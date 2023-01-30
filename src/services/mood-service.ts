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

async function upsertMood(params: UpsertMoodParams) {
    const { newMood, name } = params;

    await moodRepository.upsert(newMood, name);
}

export type MoodParams = Pick<MyMoods, "userId" | "updatedAt">;

export type TodaysMoodParams = {
    userId: number,
    filter: DateFilter,
}

export type UpsertMoodParams ={
    newMood: MoodParams,
    name: string,
};

const moodService = {
    findTodaysMood,
    upsertMood,
};

export default moodService;