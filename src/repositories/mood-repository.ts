import dayjs from "dayjs";

import { prisma } from "@/config";
import { invalidDataError } from "@/errors";
import { MoodFilter } from "@/protocols";
import { MoodParams } from "@/services/mood-service";
import { callFilter, filters } from "@/utils/moodUtils";
import { Prisma, Moods, MyMoods } from "@prisma/client";

async function findByUserId(userId: number) {
    const userMoods = await prisma.myMoods.findMany({
        where: {
            userId,
        }, include: {
            Moods: true,
        }
    });

    return userMoods;
}

async function findFiltered(userId: number, filter: MoodFilter) {    
    const filterdMoods = await prisma.myMoods.findMany({
        where: {
            userId,
            createdAt: {
                gte: new Date(callFilter(filter)),
            }
        }, include: {
            Moods: true,
        }
    });
    
    return filterdMoods;
}

async function upsert(newMood: MoodParams, name: string) {
    let previousMoodId: number | undefined = undefined;
    let result: MyMoods;

    await prisma.$transaction(async (tx) => {
        const { id } = await prisma.moods.findFirst({
            where: {
                name,
            },
            select: {
                id: true,
            }
        });

        if(!id) {
            throw invalidDataError();
        }
    
        const todayMood = await prisma.myMoods.findFirst({
            where: {
                userId: newMood.userId,
                createdAt: {
                    gte: new Date(callFilter({date: newMood.updatedAt, param: filters.day})),   
                }
            }
        });

        if(todayMood) {
            //previousMoodId = todayMood.id;

            result = await prisma.myMoods.update({
                where: {
                    id: todayMood.id,
                },
                data: {
                    moodId: id,
                    updatedAt: new Date(),
                }
            });
        } else {
            result = await prisma.myMoods.create({
                data: {
                    userId: newMood.userId,
                    moodId: id,
                    updatedAt: new Date(),
                }
            });
        }

        

        /* result = await prisma.myMoods.upsert({
            where: {
                id: previousMoodId,
            },
            create: {
                userId: newMood.userId,
                moodId: id,
                updatedAt: new Date(),
            },
            update: {
                moodId: id,
                updatedAt: new Date(),
            } 
        }); */
    });
    
    return result;
}

const moodRepository = {
    findByUserId,
    findFiltered,
    upsert,
};

export default moodRepository;