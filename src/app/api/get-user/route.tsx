import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies(); // Reads cookies from request

  const user = cookieStore.get('user');

  return NextResponse.json({
    message: user ? `Welcome back, ${user.value}` : 'User not found in cookies',
  });
}
