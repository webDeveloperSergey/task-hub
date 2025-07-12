import type { PropsWithChildren, ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard',
}

interface Props {
	modals: ReactNode
}

export default function DashboardLayout({
	children,
	modals,
}: PropsWithChildren<Props>) {
	return (
		<div className='grid grid-cols-[270px_1fr] h-screen'>
			<Sidebar />
			<main>{children}</main>
			{modals}
		</div>
	)
}
