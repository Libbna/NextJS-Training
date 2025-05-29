import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    product: 'Laptop',
    price: 999,
  };

  const response = NextResponse.json(data);

  // Cache for 5 minutes (300 seconds)
  response.headers.set('Cache-Control', 'public, max-age=300');

  return response;
}
