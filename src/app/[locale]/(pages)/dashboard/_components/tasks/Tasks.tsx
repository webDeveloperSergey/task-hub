import { Tab, Tabs } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { DUE_SORTING, STATUSES_TASK_TABS, TASKS } from './data/tasks.data'
import SortBySelect from './SortBySelect'
import { TaskItem } from './TaskItem'
import type { IDueSorting, TTaskStatus } from './types/tasks.type'

export function Tasks() {
	const tDashboard = useTranslations('Dashboard.tasks')

	const [currentTaskStatus, setCurrentTaskStatus] = useState<TTaskStatus>('all')
	const [currentSortByDueDate, setCurrentSortByDueDate] = useState<IDueSorting>(
		DUE_SORTING[0]
	)

	const filteredTasks = useMemo(() => {
		const filtered = TASKS.filter(task => {
			switch (currentTaskStatus) {
				case 'not-started':
					return task.subTasks.every(subTask => !subTask.isCompleted)
				case 'in-progress':
					return task.subTasks.some(subTask => !subTask.isCompleted)
				case 'done':
					return task.subTasks.every(subTask => subTask.isCompleted)
				default:
					return true
			}
		})

		const sortedTasks = filtered.sort((a, b) => {
			const dueDateA = new Date(a.dueDate).getTime()
			const dueDateB = new Date(b.dueDate).getTime()

			if (currentSortByDueDate.value === 'asc') {
				return dueDateA - dueDateB
			} else {
				return dueDateB - dueDateA
			}
		})

		return sortedTasks
	}, [currentTaskStatus, currentSortByDueDate])

	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-center justify-between'>
				<h2 className='flex gap-1 font-medium text-xl'>
					<span>{tDashboard('lastTasks')}</span>
					<span className='font-normal text-gray-400'>
						({filteredTasks.length})
					</span>
				</h2>

				<div className='flex gap-6'>
					<Tabs
						aria-label='Task Statuses Tabs'
						radius='lg'
						classNames={{
							tabList: 'bg-content1',
						}}
						color='primary'
						selectedKey={currentTaskStatus}
						onSelectionChange={key => setCurrentTaskStatus(key as TTaskStatus)}
					>
						{STATUSES_TASK_TABS.map(status => (
							<Tab
								key={status}
								title={tDashboard(status)}
								className='capitalize'
							/>
						))}
					</Tabs>

					<SortBySelect
						currentSortByDueDate={currentSortByDueDate}
						setCurrentSortByDueDate={setCurrentSortByDueDate}
					/>
				</div>
			</div>

			<div className='grid grid-cols-3 gap-4'>
				{filteredTasks.length === 0 && (
					<p className='text-gray-500'>
						{tDashboard('notFoundTaskWhitStatus')}
					</p>
				)}
				{filteredTasks.map(task => (
					<TaskItem key={task.id} task={task} />
				))}
			</div>
		</div>
	)
}
