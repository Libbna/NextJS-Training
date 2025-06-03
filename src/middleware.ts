import { match } from "assert";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  // ---custom matcher config 
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // export const config = {
  //   matcher: "/profile",

  // conditional statements
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/login", request.url));
  // }

  // cookies and header in middleware

  if (request.nextUrl.pathname === '/profile') {
    const response = NextResponse.next();
    response.cookies.set("theme", "dark");

    response.headers.set("X-Custom-Header", "MyCustomValue");
    return response;
  }

  return NextResponse.next();

}