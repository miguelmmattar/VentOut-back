import { PrismaClient } from "@prisma/client";
import { NewMoods, NewSpots } from "protocols";
const prisma = new PrismaClient();

async function seedMoods() {
    let mood = await prisma.moods.findFirst();
    
    if (mood) return;

    const newMoods: NewMoods[] = [
        { name: 'Great', color: '#C7FACB' },
        { name: 'Good', color: '#DDEDB7' },
        { name: 'Meh', color: '#FFEDA5' },
        { name: 'Bad', color: '#FFDDAF' },
        { name: 'Angry', color: '#FFD3CA' },
    ];
    
    let moods = await Promise.all(newMoods.map(async (mood) => (
        await prisma.moods.create({
            data: {
                name: mood.name,
                color: mood.color,
            },
        }) 
    )));
         
    console.log({ moods });
}

async function seedSpots() {
    let spot = await prisma.spots.findFirst();
    
    if (spot) return;

    const newSpots: NewSpots[] = [
        { name: 'Crown', color: '#AD61FA' },
        { name: 'Third Eye', color: '#527DFF' },
        { name: 'Throat', color: '#5CE1E6' },
        { name: 'Heart', color: '#7ED957' },
        { name: 'Solar Plexus', color: '#FFDE59' },
        { name: 'Sacral', color: '#FF914D' },
        { name: 'Root', color: '#FF5757' },
    ];
    
    let spots = await Promise.all(newSpots.map(async (spot) => (
        await prisma.moods.create({
            data: {
                name: spot.name,
                color: spot.color,
            },
        }) 
    )));
         
    console.log({ spots });
}

export default {
    seedMoods,
    seedSpots,
};