import { prisma } from "@/config";
import { DateFilter } from "@/protocols";

import { ReportParams } from "@/services/report-service";
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

async function findFiltered(userId: number, filter: DateFilter): Promise<MyReports[]> {
    const filteredReports = await prisma.myReports.findMany({
        orderBy: [
            {
              date: 'desc',
            },
        ],
        where: {
            userId,
            date: {
                gte: new Date(callFilter(filter)),
            }
        }, include: {
            MyEmotions: {
                include: {
                    Emotions: true,
                },
            },
                  
            MySymptoms: {
                include: {
                    Symptoms: true,
                },
            }    
        }
    });

    return filteredReports;
}

const reportRepository = {
    createReport,
    findFiltered,
};

export default reportRepository;