import { Card, CardBody, CardHeader } from '@heroui/react'
import { useState } from 'react'
import { Chart } from './Chart'
import {
	monthlyData,
	staticPeriods,
	yearlyData,
} from './data/project-chart.data'
import { ProjectChartHeader } from './ProjectChartHeader'
import type { IStatisticPeriod } from './types/chart.types'

export function ProjectChart() {
	const [currentStaticPeriod, setCurrentStaticPeriod] =
		useState<IStatisticPeriod>(staticPeriods[0])

	const currentDataChart =
		currentStaticPeriod.label === 'Yearly' ? yearlyData : monthlyData

	return (
		<Card className='p-3'>
			<CardHeader>
				<ProjectChartHeader
					currentStaticPeriod={currentStaticPeriod}
					setCurrentStaticPeriod={setCurrentStaticPeriod}
				/>
			</CardHeader>

			<CardBody>
				<Chart dataChart={currentDataChart} />
			</CardBody>
		</Card>
	)
}
