import type { IChartDataPoint, IStatisticPeriod } from '../types/chart.types'

export const yearlyData: IChartDataPoint[] = [
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

export const monthlyData: IChartDataPoint[] = [
	{ period: 'Week 1', value: 12 },
	{ period: 'Week 2', value: 9 },
	{ period: 'Week 3', value: 25 },
	{ period: 'Week 4', value: 16 },
]

export const staticPeriods: IStatisticPeriod[] = [
	{
		value: 'yearly',
		label: 'Yearly',
	},
	{
		value: 'monthly',
		label: 'Monthly',
	},
]
