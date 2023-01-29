import { notFoundError } from "@/errors";
import emotionRepository from "@/repositories/emotion-repository";
import symptomRepository from "@/repositories/symptom-repository";
import { Emotions, SymptomType } from "@prisma/client";
import initialDataUtils from '../utils/initialDataUtils';


async function loadInitialData(): Promise<InitialData> {
    try {
        const emotions = await emotionRepository.findAll();
        const physicalSymptoms = await symptomRepository.findAllPhysical();
        const emotionalSymptoms = await symptomRepository.findAllEmotional();

        if( !emotions[0] || !physicalSymptoms[0] || !emotionalSymptoms[0]) {
            throw notFoundError();
        }

        let result = {
            emotions: initialDataUtils.handleEmotionData(emotions),
            physicalSymptoms: initialDataUtils.handleSymptomData(physicalSymptoms),
            emotionalSymptoms: initialDataUtils.handleSymptomData(emotionalSymptoms),
        }

        return result;

    } catch (error) {
        throw notFoundError();
    }    
}

export type InitialData = {
    emotions: InitialEmotionData[],
    physicalSymptoms: InitialSymptomData[],
    emotionalSymptoms: InitialSymptomData[],
};

export type InitialSymptomData = {
    value: number,
    label: string,
    type: SymptomType,
    spotId: number,
    color: string,
};

export type InitialEmotionData = {
    value: number,
    label: string,
    color: string,
};

const initialDataService = {
    loadInitialData,
};

export default initialDataService;