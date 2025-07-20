import { NextRequest } from 'next/server'
import { intlMiddleware } from './middlewares/intl.middleware'
import { supabaseMiddleware } from './middlewares/supabase.middleware'

export async function middleware(request: NextRequest) {
	const supabaseResponse = await supabaseMiddleware(request)

	if (supabaseResponse) return intlMiddleware(request)

	return intlMiddleware(request)
}

export const config = {
	matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
}
