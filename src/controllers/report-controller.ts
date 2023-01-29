import reportService, { ReportParams } from "@/services/report-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postReport(req: Request, res: Response) {
    let { date, emotions, symptoms, text } = req.body as ReportParams;
    const { userId } = res.locals;
    
    if(!date || !text || !userId ! || !symptoms || !emotions || !symptoms[0] || !emotions[0]) {
        return res.status(httpStatus.BAD_REQUEST).send({});
    }

    try {
        await reportService.createNewReport({ date, emotions, symptoms, text }, userId);

        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
    }
}