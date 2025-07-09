import { CardHeading } from '@/components/ui/CardHeading'
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
import { useState, type Dispatch, type SetStateAction } from 'react'
import { staticPeriods } from './data/project-chart.data'
import type { IStatisticPeriod } from './types/chart.types'

interface Props {
	currentStaticPeriod: IStatisticPeriod
	setCurrentStaticPeriod: Dispatch<SetStateAction<IStatisticPeriod>>
}

export function ProjectChartHeader({
	currentStaticPeriod,
	setCurrentStaticPeriod,
}: Props) {
	const tDashboard = useTranslations('Dashboard.statistics')

	const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(
		new Set([currentStaticPeriod.label])
	)
	const [isOpenDropdown, setIsOpenDropdown] = useState(false)

	const selectedValue = Array.from(selectedKeys).join(', ').replace(/_/g, '')

	const setCurrentPeriod = (keys: SharedSelection) => {
		setSelectedKeys(keys)

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
						{tDashboard(selectedValue.toLowerCase())}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					disallowEmptySelection
					aria-label='Single selection example'
					selectedKeys={selectedKeys}
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
