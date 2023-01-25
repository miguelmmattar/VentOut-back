import { SymptomType, PrismaClient } from "@prisma/client";
import initialData from "./initialData";
const prisma = new PrismaClient();

async function seedMoods() {
    const mood = await prisma.moods.findFirst();
    
    if (mood) return;
    
    const moods = await Promise.all(initialData.newMoods.map(async (item) => (
        await prisma.moods.create({
            data: {
                name: item.name,
                color: item.color,
            },
        }) 
    )));
         
    console.log({ moods });
}

async function seedSpots() {
    const spot = await prisma.spots.findFirst();
    
    if (spot) return;
    
    const spots = await Promise.all(initialData.newSpots.map(async (item) => (
        await prisma.spots.create({
            data: {
                name: item.name,
                color: item.color,
            },
        }) 
    )));
         
    console.log({ spots });
}

async function seedEmotions() {
    const emotion = await prisma.emotions.findFirst();
    
    if (emotion) return;
    
    const emotions = await Promise.all(initialData.newEmotions.map(async (item) => (
        await prisma.emotions.create({
            data: {
                name: item.name,
                color: item.color,
            },
        }) 
    )));
         
    console.log({ emotions });
}

async function seedSymptoms() {
    const symptom = await prisma.symptoms.findFirst();
    
    if (symptom) return;
    
    const physicalSymptoms = await Promise.all(initialData.newPhysicalSymptoms.map(async (item) => (
        await prisma.symptoms.create({
            data: {
                name: item.name,
                type: SymptomType.PHYSICAL,
                spotId: item.spotId,
            },
        }) 
    )));

    const emotionalSymptoms = await Promise.all(initialData.newEmotionalSymptoms.map(async (item) => (
        await prisma.symptoms.create({
            data: {
                name: item.name,
                type: SymptomType.EMOTIONAL,
                spotId: item.spotId,
            },
        }) 
    )));

    const symptoms = physicalSymptoms.concat(emotionalSymptoms);
         
    console.log({ symptoms });
}

const spotId = {
    root: 1,
    sacral: 2,
    solarPlexus: 3,
    heart: 4,
    throat: 5,
    front: 6,
    crown: 7,
}

export default {
    seedMoods,
    seedSpots,
    seedEmotions,
    seedSymptoms,
    spotId,
};