import { NextResponse } from 'next/server';

export async function GET() {
  // Return a simple 204 No Content response for favicon
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'image/x-icon',
    },
  });
}
