import { prisma } from "@/config";
import { NewSessionParams, NewUserParams } from "@/services/authentication-service";
import { Prisma, Session } from "@prisma/client";
import dayjs from "dayjs";

async function findByEmail(email: string) {
  const user: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  return prisma.user.findUnique(user);
}

async function createUser(data: NewUserParams) {
  return prisma.user.create({
    data,
  });
}

async function createSession(data: NewSessionParams) {
  return prisma.session.create({
    data,
  });
}

async function closeSession(userId: number) {
  let closedSession: Session | null;

  await prisma.$transaction(async (tx) => {
    const session = await prisma.session.findFirst({
      where: {
        userId,
      }
    });

    if(!session) {
      return closedSession;
    }
  
    closedSession = await prisma.session.update({
      where: {
        id: session.id,
      },
      data: {
        closedAt: dayjs().toDate(),
      }
    });
  });

  return closedSession;
}

const authenticationRepository = {
  findByEmail,
  createUser,
  createSession,
  closeSession,
};

export default authenticationRepository;