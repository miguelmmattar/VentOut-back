import { prisma } from "@/config";
import { MyEmotions, Emotions } from "@prisma/client";

async function findAll() {
    const emotions = await prisma.emotions.findMany({});

    return emotions;
}

const emotionRepository = {
    findAll,
};

export default emotionRepository;