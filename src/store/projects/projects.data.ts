import type {
	IChartDataPoint,
	IProjectStat,
	IStatisticPeriod,
} from '@/types/projects.type'

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

export const YEARLY_DATA: IChartDataPoint[] = [
	{ period: 'Jan', value: 19 },
	{ period: 'Feb', value: 14 },
	{ period: 'Mar', value: 27 },
	{ period: 'Apr', value: 38 },
	{ period: 'May', value: 35 },
	{ period: 'Jun', value: 20 },
	{ period: 'Jul', value: 23 },
	{ period: 'Aug', value: 15 },
	{ period: 'Sep', value: 36 },
	{ period: 'Oct', value: 12 },
	{ period: 'Nov', value: 29 },
	{ period: 'Dec', value: 20 },
]

export const MONTHLY_DATA: IChartDataPoint[] = [
	{ period: 'Week 1', value: 12 },
	{ period: 'Week 2', value: 9 },
	{ period: 'Week 3', value: 25 },
	{ period: 'Week 4', value: 16 },
]

export const STATIC_PERIOD: IStatisticPeriod[] = [
	{
		value: 'yearly',
		label: 'Yearly',
	},
	{
		value: 'monthly',
		label: 'Monthly',
	},
]
