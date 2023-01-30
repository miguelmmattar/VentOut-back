import { InitialEmotionData, InitialSymptomData } from "@/services/data-service";
import { Emotions, MyEmotions, MyReports, MySymptoms, Spots, Symptoms } from "@prisma/client";
import { number, string } from "joi";

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

function concatData(emotions: FilteredEmotions[], symptoms:FilteredSymptoms[]) {
    let result: ConcatedData = {
        symptoms: [],
        emotions: [],
    };

    emotions.forEach((item) => {
        if (item.MyEmotions.length > 0) {
            result.emotions.push({
                name: item.name,
                color: item.color,
                value: item.MyEmotions.length,
            })
        }
    });

    symptoms.forEach((item) => {
        let mySymptoms = item.Symptoms.filter((subItem) => (subItem.MySymptoms.length > 0))
        result.symptoms.push({
                name: item.name,
                color: item.color,
                value: mySymptoms.length,
            })
    });

    return result;
}

export type ConcatedData = {
    symptoms: FilteredData[],
    emotions: FilteredData[],
}

type FilteredData = {
    name: string,
    color: string,
    value: number,
};

export type FilteredEmotions = {
    MyEmotions: {
        MyReports: MyReports;
    }[];
    name: string;
    color: string;
}

export type FilteredSymptoms = {
    Symptoms: {
        MySymptoms: MySymptoms[]        
    }[];
    name: string;
    color?: string;
}

const dataUtils = {
    handleSymptomData,
    handleEmotionData,
    concatData,
};

export default dataUtils;