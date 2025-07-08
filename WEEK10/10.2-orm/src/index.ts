/*
The Prisma Client is an auto-generated, type-safe database client 
provided by Prisma. It serves as the primary tool for interacting 
with your database in your application code. With Prisma Client, 
you can perform CRUD (Create, Read, Update, Delete) operations 
and execute database queries in a clean, type-safe, and intuitive 
way.
 */


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username, //email:username if in schema its email which i have doen wrong
            password,
            firstName,
            lastName
        }, select: {
            id: true,
            password: true
        },
    })
    console.log(res);
}

// insertUser("admin3", "1234567", "harkirat2", "singh2");



interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singhdsn"
})

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

getUser("admin1");