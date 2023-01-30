import { invalidDataError, notFoundError, requestError } from "@/errors";
import { incomingEmotion, incomingSymptom } from "@/protocols";
import emotionRepository from "@/repositories/emotion-repository";
import reportRepository from "@/repositories/report-repository";
import symptomRepository from "@/repositories/symptom-repository";
import { Emotions, MyReports, Symptoms } from "@prisma/client";
import httpStatus from "http-status";

async function createNewReport(params: ReportParams, userId: number) {
    const reportId = await reportRepository.createReport(new Date(params.date), params.text, userId);

    if(!reportId) {
        throw requestError(httpStatus.INTERNAL_SERVER_ERROR, httpStatus["500_MESSAGE"]);
    }

    const newEmotions = await Promise.all(params.emotions.map(async (emotion) => (
        await emotionRepository.createEmotion(emotion.value, reportId)
    )));

    const newSymptoms = await Promise.all(params.symptoms.map(async (symptom) => (
        await symptomRepository.createSymptom(symptom.value, reportId)
    )));

    if(!newEmotions || !newSymptoms) {
        throw requestError(httpStatus.INTERNAL_SERVER_ERROR, httpStatus["500_MESSAGE"]);
    }
}

async function loadUserReports(userId: number): Promise<ReportsList> {
    const userReports = await reportRepository.findUserReports(userId);

    if(!userReports) {
        throw notFoundError;
    }

    return userReports;
}

export type ReportsList = Pick<MyReports, "id" | "date">[];

export type ReportParams = {
    date: Date | string,
    emotions: incomingEmotion[],
    symptoms: incomingSymptom[],
    text: string,
};

const reportService = {
    createNewReport,
    loadUserReports,
};

export default reportService;