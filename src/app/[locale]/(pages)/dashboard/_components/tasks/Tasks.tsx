import { useTasksStore } from '@/store/tasks/tasks.store'
import type { TTaskStatus } from '@/types/tasks.type'
import { Tab, Tabs } from '@heroui/react'
import { useTranslations } from 'next-intl'
import SortBySelect from './SortBySelect'
import { TaskItem } from './TaskItem'

export function Tasks() {
	const tDashboard = useTranslations('Dashboard.tasks')

	// === Get data from Store
	const filteredTasks = useTasksStore(state => state.filteredTasks)
	const currentTaskStatus = useTasksStore(state => state.currentTaskStatus)
	const statusesTaskTabs = useTasksStore(state => state.statusesTaskTabs)
	const setCurrentTaskStatus = useTasksStore(
		state => state.setCurrentTaskStatus
	)
	// ===

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
						{statusesTaskTabs.map(status => (
							<Tab
								key={status}
								title={tDashboard(status)}
								className='capitalize'
							/>
						))}
					</Tabs>

					<SortBySelect />
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
