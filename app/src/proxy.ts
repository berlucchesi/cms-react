import { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    console.log('deve acontecer alguma coisa aqui...', request.nextUrl.pathname, request.nextUrl.searchParams)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
    ]
}