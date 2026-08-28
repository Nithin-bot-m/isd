import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "ISD Info Solutions API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
}

export async function POST() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405, headers: { Allow: "GET" } });
}