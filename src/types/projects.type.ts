export const TYPES_STAT = {
	DATE: 'date',
	NUMBER: 'number',
} as const

export interface IProjectStat {
	id: number
	number: number
	label: string
	bgColor: string
	icon: string
	type: (typeof TYPES_STAT)[keyof typeof TYPES_STAT]
}

export interface IStatisticPeriod {
	value: string
	label: string
}

export interface IChartDataPoint {
	period: string
	value: number
}
