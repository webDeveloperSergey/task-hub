interface Props {
	active?: boolean
	payload?: { value: number }[]
}

export function ProjectChartTooltip({ active, payload }: Props) {
	if (!active || !payload || payload.length === 0) return null

	return (
		<div className='bg-primary px-4 py-1 text-white rounded-2xl text-xs font-medium'>
			{payload[0].value} Projects
		</div>
	)
}
