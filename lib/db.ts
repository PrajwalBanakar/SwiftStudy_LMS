import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

// assign new prismaclient if there is no globalThis.prisma

export const db = globalThis.prisma || new PrismaClient();

//Assign globalThis.prisma to db

if(process.env.NODE_ENV != "production") globalThis.prisma = db;

// using globalThis because it is not detected in hot reload.
// It would cause overflow and create new prismaclient everytime I save while I'm developing the app
// if I use export const db = new PrismaClient();