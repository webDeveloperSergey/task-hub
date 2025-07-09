'use client'

import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Heading } from '@/components/ui/Heading'
import { Search } from '@/components/ui/Search'
import { Image } from '@heroui/react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { ProjectChart } from './project-chart/ProjectChart'
import { ProjectStats } from './project-stats/ProjectStats'
import { Tasks } from './tasks/Tasks'

const DynamicThemeToggle = dynamic(
	() => import('@/components/ui/ThemeToggle').then(mod => mod.ThemeToggle),
	{ ssr: false }
)

export function Dashboard() {
	const tDashboard = useTranslations('Dashboard.header')

	return (
		<div className='grid grid-cols-[2.5fr_1fr]'>
			<div className='flex flex-col gap-8 p-5'>
				<div className='flex items-center justify-between'>
					<div className='min-w-1/6'>
						<Heading>{tDashboard('title')}</Heading>
					</div>

					<Search
						value=''
						onChange={() => {}}
						placeholder={tDashboard('searchPlaceholder')}
					/>

					<div className='flex items-center gap-4'>
						<LocaleSwitcher />
						<DynamicThemeToggle />
					</div>
				</div>

				<div className='grid grid-cols-[1fr_2.5fr] gap-6'>
					<ProjectStats />

					<ProjectChart />
				</div>

				<div>
					<Tasks />
				</div>
			</div>

			<div className='flex flex-col h-screen'>
				<Image
					alt='Chat preview'
					src='/images/chat-preview.jpg'
					radius='none'
				/>
				<div className='h-full bg-[#3C3494] text-white flex justify-center items-center'>
					CHAT
				</div>
			</div>
		</div>
	)
}
