import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const response = NextResponse.json({ message: 'User cookie set!' });

  // Set a cookie: name = 'user', value = 'John', expires in 7 days
  response.cookies.set({
    name: 'user',
    value: 'John',
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
