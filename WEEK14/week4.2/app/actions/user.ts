//server action is just seems like a function call
//no body >>> just as a parameter 
"use server"
import client from "@/db";  // Assuming you have a Prisma client instance exported from '@/db'

export default async function solve(username: string, password: string) {
    try {
        // Create the user in the database
        const user = await client.user.create({
            data: {
                username: username,
                password: password,  // No hashing for now as per your request
            },
        });

        // Return the created user as the response
        return { message: "User created successfully", user };
    } catch (error) {
        console.error('Error creating user:', error);
        return { message: "Error creating user", error: error.message };  // Return error details in the response
    }
}
