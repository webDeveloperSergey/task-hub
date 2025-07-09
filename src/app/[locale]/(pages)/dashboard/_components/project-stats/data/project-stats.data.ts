import type { IProjectStat } from '../types/project-stats.type'

export const PROJECT_STATS_DATA: IProjectStat[] = [
	{
		id: 1,
		number: 92,
		label: 'activeProjects',
		bgColor: 'bg-violet-300',
		icon: '/images/project-stats/active-projects.svg',
		type: 'number',
	},
	{
		id: 2,
		number: 35,
		label: 'onGoingProjects',
		bgColor: 'bg-amber-200',
		icon: '/images/project-stats/ongoing-projects.svg',
		type: 'number',
	},
	{
		id: 3,
		number: 1149,
		label: 'workingHours',
		bgColor: 'bg-pink-300',
		icon: '/images/project-stats/working-hours.svg',
		type: 'date',
	},
]
