import { Select, SelectItem, type SharedSelection } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import { useState, type Dispatch, type SetStateAction } from 'react'
import { DUE_SORTING } from './data/tasks.data'
import type { IDueSorting } from './types/tasks.type'

interface Props {
	currentSortByDueDate: IDueSorting
	setCurrentSortByDueDate: Dispatch<SetStateAction<IDueSorting>>
}

export default function SortBySelect({
	currentSortByDueDate,
	setCurrentSortByDueDate,
}: Props) {
	const tDashboard = useTranslations('Dashboard.tasks')

	const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(
		new Set([currentSortByDueDate.label])
	)

	const changeSortBy = (keys: SharedSelection) => {
		setSelectedKeys(keys)

		const currentSortBy = DUE_SORTING.find(
			sortBy => sortBy.value === keys.currentKey
		)

		if (!currentSortBy) return

		setCurrentSortByDueDate(currentSortBy)
	}

	return (
		<Select
			classNames={{
				trigger: 'bg-content1 w-45 cursor-pointer',
			}}
			defaultSelectedKeys={['asc']}
			onSelectionChange={selectedKeys => changeSortBy(selectedKeys)}
			items={DUE_SORTING}
			renderValue={items => {
				return items.map(item => (
					<div key={item.key} className='flex items-center gap-2'>
						<Icon className='text-xl shrink-0' icon={`${item.data?.icon}`} />
						{tDashboard(item.data?.label || '')}
					</div>
				))
			}}
		>
			{sortByOption => (
				<SelectItem key={sortByOption.value} textValue={sortByOption.label}>
					<div className='flex gap-2 items-center text-xs'>
						<Icon className='text-xl' icon={`${sortByOption.icon}`} />
						{tDashboard(sortByOption.label)}
					</div>
				</SelectItem>
			)}
		</Select>
	)
}
