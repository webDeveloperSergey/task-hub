'use client'
import { Card } from '@heroui/react'
import { Account } from './_components/Account'
import { Menu } from './_components/Menu'
import { Projects } from './_components/Projects'
import { SidebarHeading } from './_components/SidebarHeading'
import { useTranslations } from 'next-intl'

// flex flex-col gap-7 px-4 py-10 bg-[var(--gray)]
export function Sidebar() {
	const tDashboard = useTranslations('Dashboard.menu')

	return (
		<Card radius='none' className='gap-7 px-4 py-10'>
			<SidebarHeading title={tDashboard('account')}>
				<Account />
			</SidebarHeading>

			<SidebarHeading title={tDashboard('mainMenu')}>
				<Menu />
			</SidebarHeading>

			<SidebarHeading title={tDashboard('projects')}>
				<Projects />
			</SidebarHeading>
		</Card>
	)
}
