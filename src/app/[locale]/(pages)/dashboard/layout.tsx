import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div className='grid grid-cols-[270px_1fr] h-screen'>
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}
