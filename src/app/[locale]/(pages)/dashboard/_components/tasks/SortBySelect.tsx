import { useTasksStore } from '@/store/tasks/tasks.store'
import { Select, SelectItem, type SharedSelection } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'

export default function SortBySelect() {
	const tDashboard = useTranslations('Dashboard.tasks')

	// === Get data from Store
	const dueSorting = useTasksStore(state => state.dueSorting)

	const currentSortByDueDate = useTasksStore(
		state => state.currentSortByDueDate
	)
	const setCurrentSortByDueDate = useTasksStore(
		state => state.setCurrentSortByDueDate
	)
	// ===

	const changeSortBy = (keys: SharedSelection) => {
		const currentSortBy = dueSorting.find(
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
			selectedKeys={[currentSortByDueDate.value]}
			onSelectionChange={selectedKeys => changeSortBy(selectedKeys)}
			items={dueSorting}
			disallowEmptySelection
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
