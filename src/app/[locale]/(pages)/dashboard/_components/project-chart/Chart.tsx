import { useProjectsStore } from '@/store/projects/projects.store'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { ProjectChartTooltip } from './ProjectChartTooltip'

export function Chart() {
	const { theme } = useTheme()

	// === Get data from Store
	const currentStaticPeriod = useProjectsStore(
		state => state.currentStaticPeriod
	)
	const yearlyData = useProjectsStore(state => state.yearlyData)
	const monthlyData = useProjectsStore(state => state.monthlyData)
	// === Get data from Store

	const dataChart =
		currentStaticPeriod.label === 'Yearly' ? yearlyData : monthlyData

	const maxData = useMemo(() => {
		if (!dataChart || dataChart.length === 0) return

		let maxValue = 0
		let maxPeriod = ''

		dataChart.forEach(point => {
			if (point.value > maxValue) {
				maxValue = point.value
				maxPeriod = point.period
			}
		})

		return { value: maxValue, period: maxPeriod }
	}, [dataChart])

	return (
		<ResponsiveContainer width='100%' height={280}>
			<AreaChart
				data={dataChart}
				margin={{ top: 10, right: 10, left: -35, bottom: 0 }}
			>
				<defs>
					<linearGradient id='colorGradient' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#735cee' stopOpacity={0.3} />
						<stop offset='95%' stopColor='#735cee' stopOpacity={0} />
					</linearGradient>
				</defs>

				<CartesianGrid
					strokeDasharray='0'
					vertical={false}
					stroke={theme === 'dark' ? '#525252' : '#F3F4F6'}
				/>

				<XAxis
					dataKey='period'
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: '0.8rem', fill: '#9CA3AF' }}
					padding={{ left: 20, right: 20 }}
				/>

				<YAxis
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: '0.8rem', fill: '#9CA3AF' }}
					domain={[0, 'dataMax + 10']}
				/>

				<Tooltip content={<ProjectChartTooltip />} cursor={false} />

				{maxData && (
					<ReferenceLine
						x={maxData.period}
						stroke='#6366F1'
						strokeDasharray='5 5'
						strokeWidth={1.5}
						opacity={0.8}
					/>
				)}

				<Area
					type='bump'
					dataKey='value'
					stroke='#6366F1'
					strokeWidth={2}
					fillOpacity={1}
					fill='url(#colorGradient)'
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
