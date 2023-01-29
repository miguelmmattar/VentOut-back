import { prisma } from "@/config";

import { ReportParams } from "@/services/report-service";

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

const reportRepository = {
    createReport,
};

export default reportRepository;