import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutes = pathname.startsWith("/adminprogrize") || pathname.startsWith("/api/adminprogrize");

  if (!protectedRoutes) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  const adminUser = process.env.ADMIN_PANEL_USER || "admin";
  const adminPass = process.env.ADMIN_PANEL_PASSWORD || "";

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Admin"',
      },
    });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  if (username !== adminUser || password !== adminPass) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Admin"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/adminprogrize/:path*", "/api/adminprogrize/:path*"],
};
