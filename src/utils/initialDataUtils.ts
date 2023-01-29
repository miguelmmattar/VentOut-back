import { InitialEmotionData, InitialSymptomData } from "@/services/initial-data-service";
import { Emotions, Spots, Symptoms } from "@prisma/client";

function handleSymptomData(symptoms: (Symptoms & {Spots: Spots;})[]): InitialSymptomData[] {
    return symptoms.map(item => ({
        value: item.id,
        label: item.name,
        type: item.type,
        spotId: item.spotId,
        color: item.Spots.color,
    }));
}

function handleEmotionData(emotions: Emotions[]): InitialEmotionData[] {
    return emotions.map(item => ({
        value: item.id,
        label: item.name,
        color: item.color,
    }));
}

const initialDataUtils = {
    handleSymptomData,
    handleEmotionData
};

export default initialDataUtils;