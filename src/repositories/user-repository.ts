import { prisma } from "@/config";
import { NewUserParams } from "@/services/authentication-service";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string) {
  const user: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  return prisma.user.findUnique(user);
}

async function create(data: NewUserParams) {
  return prisma.user.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;