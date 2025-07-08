import axios from "axios";
/*
async function getUserData() {
  //lets add a artificial delay
  // await new Promise((r)=>setTimeout(r,5000))
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}
*/


// why hitting the next-server again if the all information resides with u !! why can't you use them
import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import client from "@/db";

export async function getUserData() {
  // Fetch a user from the database  without hitting the hhtp request
  const user = await client.user.findFirst();
  return {
    email:user?.username,
    password:user?.password
  }
}


//async component --not was in react//latest nextjs feature
export default async function Home() {
  const userData = await getUserData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.email}
          </div>

          email: {userData?.password}
        </div>
      </div>
    </div>
  );
}