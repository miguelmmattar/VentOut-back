import { prisma } from "@/config";
import { DateFilter } from "@/protocols";

import { ReportParams, ReportsList } from "@/services/report-service";
import { callFilter } from "@/utils/date-utils";
import { MyEmotions, MyReports, MySymptoms } from "@prisma/client";

async function createReport(date: Date, text: string, userId: number): Promise<number> {
    const newReport = await prisma.myReports.create({
        data: {
            userId,
            date,
            text,
            updatedAt: new Date(),
        }
    });

    return newReport?.id;
}

async function findUserReports(userId: number): Promise<ReportsList> {
    const userReports = await prisma.myReports.findMany({
        orderBy: [
            {
              date: 'desc',
            },
        ],
        select: {
            id: true,
            date: true,
        },
        where: {
            userId,
        }, 
    });

    return userReports;
}

async function findById(reportId: number): Promise<MyReports> {
    const myReport = prisma.myReports.findUnique({
        where: {
            id: reportId,
        }, include: {
            MyEmotions: {
                include: {
                    Emotions: true,
                },
            },      
            MySymptoms: {
                include: {
                    Symptoms: {
                        include: {
                            Spots: true
                        }
                    },
                },
            }    
        }
    });

    return myReport;
}

const reportRepository = {
    createReport,
    findUserReports,
    findById,
};

export default reportRepository;