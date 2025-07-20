import { getServerAuth } from '@/utils/supabase/get-server-auth'
import { redirect } from 'next/navigation'
import { PublicPages } from '../config/public-pages'

export default async function Home() {
	const user = await getServerAuth()

	if (!user) redirect(PublicPages.LOGIN)

	return null
}
