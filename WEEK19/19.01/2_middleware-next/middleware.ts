//require a global middleware in next.js

import { NextResponse, NextRequest } from 'next/server'

let requestCount = 0;

export function middleware(req: NextRequest) {
    requestCount++;
    const res = NextResponse.next();
    console.log("Number of requests: " + requestCount);
    return res;
}


//runs own all routes
//need to restrict to particualr routes >>selecting routes...very weird