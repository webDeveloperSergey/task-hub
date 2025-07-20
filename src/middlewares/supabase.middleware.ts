import { updateSession } from '@/utils/supabase/middleware'
import { NextRequest } from 'next/server'

export async function supabaseMiddleware(request: NextRequest) {
	return await updateSession(request)
}
