// // import { NextRequest } from "next/server"
// // import {PrismaClient}  from "@prisma/client"
// export async function GET() {
//     return Response.json({ name: "Vikash", email: "vikash@gmail.com" })
// }

// // const client = new PrismaClient();


// // export async function POST(req:NextRequest) {
// //     //extract body
// //     const body = await req.json();
// //     client.user.create({
// //         data:{
// //             username:body.username,
// //             password:body.password
// //         }
// //     })

// //     console.log(body);

// //     return Response.json({msg:"you are logged in" })
// // }



// // export async function PUT() {
// //     return Response.json({ name: "harkirat", email: "harkirat@gmail.com" })
// // }


// // app/api/user/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// // Instantiate Prisma Client once (outside of the handler functions)
// // const client = new PrismaClient();
// import client from "@/db";

// //why hitting the next-server again if the all information resides with u !! why can't you use them
// // export async function GET() {
// //     try {
// //         // Fetch a user from the database (example query)
// //         const user = await client.user.findMany();
// //         return NextResponse.json(user || { message: "User not found" });
// //     } catch (error) {
// //         return NextResponse.json({ message: "Error fetching data", error: error.message }, { status: 500 });
// //     }
// // }

// export async function POST(req: NextRequest) {
//     try {
//         // Extract body from the request
//         const body = await req.json();
//         const user = await client.user.create({
//             data: {
//                 username: body.username,
//                 password: body.password, 
//             },
//         });
//         return NextResponse.json({ message: "User created successfully", user });
//     } catch (error) {
//         return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
//     }
// }

// export async function PUT(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const updatedUser = await client.user.update({
//             where: { id: body.id },
//             data: {
//                 username: body.username,
//                 email: body.email,
//             },
//         });
//         return NextResponse.json({ message: "User updated successfully", user: updatedUser });
//     } catch (error) {
//         return NextResponse.json({ message: "Error updating user", error: error.message }, { status: 500 });
//     }
// }

// // Close the Prisma Client connection gracefully (important for serverless)
// export async function close() {
//     await client.$disconnect();
// }
