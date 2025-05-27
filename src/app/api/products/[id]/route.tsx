// app/api/products/[id]/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; }; }
) {
  const { id } = params;

  // Simulated data lookup
  const product = { id, name: `Product ${id}`, price: 499 };

  return NextResponse.json(product);
}

// app/api/products/[id]/route.ts

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string; }; }
// ) {
//   const { id } = params;

//   // Delete logic here
//   return new Response(`Product ${id} deleted successfully`, {
//     status: 200,
//   });
// }