import type {
	IChartDataPoint,
	IProjectStat,
	IStatisticPeriod,
} from '@/types/projects.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
	MONTHLY_DATA,
	PROJECT_STATS_DATA,
	STATIC_PERIOD,
	YEARLY_DATA,
} from './projects.data'

interface IStateProjects {
	projectStats: IProjectStat[]
	yearlyData: IChartDataPoint[]
	monthlyData: IChartDataPoint[]
	staticPeriods: IStatisticPeriod[]
	currentStaticPeriod: IStatisticPeriod
}

interface IActionsTasks {
	setCurrentStaticPeriod: (period: IStatisticPeriod) => void
}

export const useProjectsStore = create<IStateProjects & IActionsTasks>()(
	persist(
		set => ({
			projectStats: PROJECT_STATS_DATA,
			yearlyData: YEARLY_DATA,
			monthlyData: MONTHLY_DATA,
			staticPeriods: STATIC_PERIOD,
			currentStaticPeriod: STATIC_PERIOD[0],

			setCurrentStaticPeriod: period =>
				set(state => ({
					currentStaticPeriod: period,
				})),
		}),
		{ name: 'projects-stats-storage' }
	)
)
