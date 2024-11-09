import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');
  const userType = req.cookies.get('user_type') || 'visitor';
  const url = req.nextUrl.clone();

  if (url.pathname === '/visitor' || !token) {
    return NextResponse.next();
  }

  if (userType === 'user' && url.pathname.startsWith('/admin')) {
    url.pathname = '/403';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*', '/profile', '/visitor'] };
