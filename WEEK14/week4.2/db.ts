import { PrismaClient } from '@prisma/client'
console.log("inside db.ts")

// Create the Prisma client singleton function
const prismaClientSingleton = () => {
    console.log("Prisma client instantiated")
    return new PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// Use the global prisma if it exists or instantiate a new one
const prisma = globalThis.prisma ?? prismaClientSingleton()

// Assign prisma to the global object if in development mode
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export default prisma
