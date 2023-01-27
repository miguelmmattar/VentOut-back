import { Request, Response } from "express";
import httpStatus from "http-status";

import moodService, { UpsertMoodParams } from "@/services/mood-service";
import { MoodFilter } from "@/protocols";

export async function getTodaysMood(req: Request, res: Response) {
    const { userId } = res.locals;
    const { filterDate, filterParam } = req.query as { filterDate: string, filterParam: string };

    if(!userId || !filterDate || !filterParam) {
        return res.status(httpStatus.BAD_REQUEST).send({});
    }

    const filter: MoodFilter = {
        date: new Date(filterDate),
        param: filterParam,
    }

    try {
        const result = await moodService.findTodaysMood({ userId, filter });

        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send({});
    }
}

export async function createOrUpdateMood(req: Request, res: Response) {
    let { newMood, name } = req.body as UpsertMoodParams;
    const { userId } = res.locals;
    
    if(!newMood || !name || !userId) {
        return res.status(httpStatus.BAD_REQUEST).send({});
    }

    newMood.updatedAt = new Date(newMood.updatedAt);
    newMood.userId = userId;

    try {
        await moodService.upsertMood({ newMood, name });

        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        console.log(error);
        return res.status(httpStatus.BAD_REQUEST).send({});
    }
}