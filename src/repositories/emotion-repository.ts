import { prisma } from "@/config";
import { MyEmotions, Emotions } from "@prisma/client";

async function findAll() {
    const emotions = await prisma.emotions.findMany({});

    return emotions;
}

async function createEmotion(emotionId: number, reportId: number): Promise<MyEmotions> {
    const newEmotion = await prisma.myEmotions.create({
        data: {
            emotionId,
            reportId,
            updatedAt: new Date(),
        }
    });

    return newEmotion;
}

const emotionRepository = {
    findAll,
    createEmotion,
};

export default emotionRepository;