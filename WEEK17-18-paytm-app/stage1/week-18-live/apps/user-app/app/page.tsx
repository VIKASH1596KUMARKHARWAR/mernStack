import {PrismaClient} from "@repo/db/client"
const client =new PrismaClient();

export default function page(){
  return <div className="border-b text-center text-2xl">
    hi their 
  </div>
}