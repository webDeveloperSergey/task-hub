import { CardHeading } from '@/components/ui/CardHeading'
import { useProjectsStore } from '@/store/projects/projects.store'
import {
	Button,
	cn,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	type SharedSelection,
} from '@heroui/react'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function ProjectChartHeader({}) {
	const tDashboard = useTranslations('Dashboard.statistics')

	// === Get data from Store
	const currentStaticPeriod = useProjectsStore(
		state => state.currentStaticPeriod
	)
	const setCurrentStaticPeriod = useProjectsStore(
		state => state.setCurrentStaticPeriod
	)
	const staticPeriods = useProjectsStore(state => state.staticPeriods)
	// ===

	const [isOpenDropdown, setIsOpenDropdown] = useState(false)

	const setCurrentPeriod = (keys: SharedSelection) => {
		const currentPeriod = staticPeriods.find(
			staticPeriod => staticPeriod.label === keys.currentKey
		)

		if (!currentPeriod) return

		setCurrentStaticPeriod(currentPeriod)
	}

	return (
		<CardHeading title={tDashboard('projectStatistic')}>
			<Dropdown onOpenChange={isOpen => setIsOpenDropdown(isOpen)}>
				<DropdownTrigger>
					<Button
						variant='bordered'
						radius='full'
						className='border-1'
						size='sm'
						endContent={
							<ChevronDown
								strokeWidth={1.25}
								size={18}
								className={cn('transition-transform duration-500', {
									'rotate-180': isOpenDropdown === true,
								})}
							/>
						}
					>
						{tDashboard(currentStaticPeriod.value.toLowerCase())}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					disallowEmptySelection
					aria-label='Single selection example'
					selectedKeys={[currentStaticPeriod.label]}
					selectionMode='single'
					variant='flat'
					onSelectionChange={keys => setCurrentPeriod(keys)}
				>
					{staticPeriods.map(staticPeriod => (
						<DropdownItem key={staticPeriod.label}>
							{tDashboard(staticPeriod.label.toLowerCase())}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</CardHeading>
	)
}
