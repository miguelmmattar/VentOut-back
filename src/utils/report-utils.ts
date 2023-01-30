import { Report } from "@/services/report-service";
import { InternetModule } from "@faker-js/faker";
import { SymptomType } from "@prisma/client";
import { report } from "process";

function processReportData(reportData: RawData): Report {
    const physicalSymptoms = reportData.MySymptoms.filter((symptom) => symptom.Symptoms.type === SymptomType.PHYSICAL);
    const emotionalSymptoms = reportData.MySymptoms.filter((symptom) => symptom.Symptoms.type === SymptomType.EMOTIONAL);

    let result: Report = {
        text: reportData.text,
        date: reportData.date,
        emotions: reportData.MyEmotions.map((emotion) => ({
            name: emotion.Emotions.name, 
            color: emotion.Emotions.color,
        })),
        physicalSymptoms: physicalSymptoms.map((symptom) => ({
            name: symptom.Symptoms.name,
            color: symptom.Symptoms.Spots.color,
        })),
        emotionalSymptoms: emotionalSymptoms.map((symptom) => ({
            name: symptom.Symptoms.name,
            color: symptom.Symptoms.Spots.color,
        })),
    }
    
    return result;
}

type RawData = {    
    date: Date,
    text: string,
    MyEmotions: {
        Emotions: {
            color: string,
            name: string,
        };
    }[];
    MySymptoms: {
        Symptoms: {
            type: SymptomType,
            name: string,
            Spots: {
                color: string,
            }
        }
    }[]
}

const reportUtils = {
    processReportData,
};

export default reportUtils;