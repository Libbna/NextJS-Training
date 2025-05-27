import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const shouldRedirect = true;

  if (shouldRedirect) {
    return NextResponse.redirect(new URL('/special', request.url));
  }

  return NextResponse.json({ message: 'No redirect needed' });
}
