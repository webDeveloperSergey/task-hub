import { cn } from '@heroui/react'
import { CheckCircle } from 'lucide-react'
import { useMemo } from 'react'

export const ProgressBar = ({ progress }: { progress: number }) => {
	const clamped = Math.min(100, Math.max(0, progress))

	const progressText = useMemo(() => {
		if (clamped >= 100) {
			return (
				<span className='flex text-sm items-center'>
					<CheckCircle className='mr-1.5' />
					Done
				</span>
			)
		}
		return `${clamped}%`
	}, [clamped])

	const colorProgressBar = useMemo(() => {
		if (clamped >= 100) return 'bg-emerald-500'
		if (clamped >= 75) return 'bg-amber-400'
		if (clamped >= 50) return 'bg-primary'
		if (clamped >= 25) return 'bg-rose-400'

		return 'bg-neutral-500'
	}, [clamped])

	return (
		<div className='bg-primary/12 relative h-12 w-full overflow-hidden rounded-full'>
			<div
				className={cn(
					'bg-primary flex h-full cursor-default items-center justify-center rounded-full bg-[length:56px_56px] font-medium text-white',
					colorProgressBar,
					{
						'animate-stripes': clamped < 100,
					}
				)}
				style={{
					width: `${clamped}%`,
					backgroundImage:
						'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0.15) 20px, transparent 20px, transparent 40px)',
				}}
			>
				{progressText}
			</div>
		</div>
	)
}
