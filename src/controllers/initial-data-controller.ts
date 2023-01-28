import { Request, Response } from "express";
import httpStatus from "http-status";

import initialDataService from "@/services/initial-data-service";

export async function getInitialData(req: Request, res: Response) {
    try {
        const result = await initialDataService.loadInitialData();

        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}