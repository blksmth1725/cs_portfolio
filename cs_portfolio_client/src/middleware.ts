import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value;
  const isAuthPage = request.nextUrl.pathname === '/login';
  const isHomePage = request.nextUrl.pathname === '/home';
  const isRootPage = request.nextUrl.pathname === '/';

  // If user is on auth page but has token, redirect to home
  if (isAuthPage && authToken) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // If user is trying to access protected routes without token, redirect to login
  if ((isHomePage || isRootPage) && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home', '/login']
};
