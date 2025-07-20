import { DashboardPages } from '@/app/config/dashboard-pages'
import { getServerAuth } from '@/utils/supabase/get-server-auth'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
	const user = await getServerAuth()

	if (user) redirect(DashboardPages.BASE)

	return children
}
