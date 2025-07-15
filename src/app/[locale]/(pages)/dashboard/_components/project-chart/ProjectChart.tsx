import { Card, CardBody, CardHeader } from '@heroui/react'
import { Chart } from './Chart'
import { ProjectChartHeader } from './ProjectChartHeader'

export function ProjectChart() {
	return (
		<Card className='p-3'>
			<CardHeader>
				<ProjectChartHeader />
			</CardHeader>

			<CardBody>
				<Chart />
			</CardBody>
		</Card>
	)
}
