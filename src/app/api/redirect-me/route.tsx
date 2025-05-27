import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const headers = request.headers;

  // Read a custom header
  const userRole = headers.get('x-user-role'); // e.g. 'admin', 'guest', etc.

  if (userRole === 'admin') {
    const response = NextResponse.redirect(new URL('/special', request.url));
    response.headers.set('X-Processed', 'true'); // Set a custom response header
    return response;
  }

  return NextResponse.json(
    { message: 'Access denied: only admins are redirected.' },
    {
      status: 403,
      headers: {
        'X-Processed': 'true',
      },
    }
  );
}
