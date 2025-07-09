'use client'
import { Card } from '@heroui/react'
import { Account } from './_components/Account'
import { Menu } from './_components/Menu'
import { Projects } from './_components/Projects'
import { SidebarHeading } from './_components/SidebarHeading'

// flex flex-col gap-7 px-4 py-10 bg-[var(--gray)]
export function Sidebar() {
	return (
		<Card radius='none' className='gap-7 px-4 py-10'>
			<SidebarHeading title='Account'>
				<Account />
			</SidebarHeading>

			<SidebarHeading title='Main Menu'>
				<Menu />
			</SidebarHeading>

			<SidebarHeading title='Projects'>
				<Projects />
			</SidebarHeading>
		</Card>
	)
}
