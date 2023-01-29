import { prisma } from "@/config";
import { MySymptoms, Symptoms, SymptomType } from "@prisma/client";

async function findAllPhysical() {
    const physicalSymptoms = await prisma.symptoms.findMany({
        where : {
            type: SymptomType.PHYSICAL,
        },
        include: {
            Spots: true,
        },
    });

    return physicalSymptoms;
}

async function findAllEmotional() {
    const emtionalSymptoms = await prisma.symptoms.findMany({
        where : {
            type: SymptomType.EMOTIONAL,
        },
        include: {
            Spots: true,
        },
    });

    return emtionalSymptoms;
}

async function createSymptom(symptomId: number, reportId: number): Promise<MySymptoms> {
    const newSymptom = await prisma.mySymptoms.create({
        data: {
            symptomId,
            reportId,
            updatedAt: new Date(),
        }
    });

    return newSymptom;
}

const symptomRepository = {
    findAllPhysical,
    findAllEmotional,
    createSymptom,
};

export default symptomRepository;