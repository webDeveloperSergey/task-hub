import { Chip } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MAIN_MENU } from '../data/main-menu.data'

export function Menu() {
	const tDashboard = useTranslations('Dashboard.menu')

	return (
		<div className='flex flex-col gap-4 text-gray-500 pl-2'>
			{MAIN_MENU.map((link, index) => (
				<Link
					key={`${link.href}-${index}`}
					href={link.href}
					className='flex justify-between items-center hover:text-gray-900 transition-colors dark:hover:text-gray-200'
				>
					<span className='flex items-center gap-x-2 text-sm '>
						<Icon icon={link.icon} className='text-xl' />
						<span>{tDashboard(link.label)}</span>
					</span>

					{link.label === 'messages' && (
						<Chip className='text-primary dark:text-white bg-light-primary text-xs font-medium rounded-lg'>
							4
						</Chip>
					)}
				</Link>
			))}
		</div>
	)
}
