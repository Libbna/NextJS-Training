// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    message: 'Form received!',
    data: data,
  });
}
