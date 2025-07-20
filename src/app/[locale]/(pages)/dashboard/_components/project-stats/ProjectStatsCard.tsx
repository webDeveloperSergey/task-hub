import { TYPES_STAT, type IProjectStat } from '@/types/projects.type'
import { formatMinutes } from '@/utils/format-minutes'
import { Image } from '@heroui/react'
import cn from 'clsx'
import { useTranslations } from 'next-intl'

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatsCard({ projectStat }: Props) {
	const tDashboard = useTranslations('Dashboard.statistics')

	return (
		<div
			className={cn(
				'flex justify-between p-5 rounded-2xl dark:text-[#101010]',
				projectStat.bgColor
			)}
		>
			<div>
				<h3 className='text-4xl font-medium'>
					{projectStat.type === TYPES_STAT.DATE
						? formatMinutes(projectStat.number)
						: projectStat.number}
				</h3>
				<span className='text-sm'>{tDashboard(projectStat.label)}</span>
			</div>

			<div className='flex-shrink-0'>
				<Image
					alt={projectStat.label}
					width={80}
					height={80}
					src={projectStat.icon}
				/>
			</div>
		</div>
	)
}
