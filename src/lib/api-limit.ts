import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { prisma }  from "@/lib/db";

import {MAX_FREE_COUNTS} from "../../constants";

export const increaseApiLimit = async () => {
    const session =  await getAuthSession();

    if (!session?.user){
        return;
    }

    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId : session.user.id
        }
    });

    if (userApiLimit) {
        await prisma.userApiLimit.update({
            where : {userId: session.user.id},
            data : { count: userApiLimit.count + 1}
        });
    } else {
        await prisma.userApiLimit.create({
            data : { userId : session.user.id, count: 1}
        });
    }
};

export const checkApiLimit = async () => {
    const session =  await getAuthSession();

    if (!session?.user){
        return false;
    }

    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId : session.user.id
        }
    });

    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false
    }
};


export const getApiLimitCount = async () => {
    const session =  await getAuthSession();

    if (!session?.user){
        return 0;
    }

    const userApiLimit = await prisma.userApiLimit.findUnique({
        where: {
            userId : session.user.id
        }
    });

    if (!userApiLimit){
        return 0;
    }

    return userApiLimit.count;
}