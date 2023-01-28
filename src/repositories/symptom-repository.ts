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

const symptomRepository = {
    findAllPhysical,
    findAllEmotional,
};

export default symptomRepository;