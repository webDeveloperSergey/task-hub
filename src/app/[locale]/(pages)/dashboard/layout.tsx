import type { PropsWithChildren, ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'
import { getServerAuth } from '@/utils/supabase/get-server-auth'
import { redirect } from 'next/navigation'
import { PublicPages } from '@/app/config/public-pages'

interface Props {
	modals: ReactNode
}

export default async function DashboardLayout({
	children,
	modals,
}: PropsWithChildren<Props>) {
	const user = await getServerAuth()

	if (!user) redirect(PublicPages.LOGIN)

	return (
		<div className='grid grid-cols-[270px_1fr] h-screen'>
			<Sidebar />
			<main>{children}</main>
			{modals}
		</div>
	)
}
