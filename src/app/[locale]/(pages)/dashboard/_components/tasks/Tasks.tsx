import { Tab, Tabs } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { STATUSES_TASK_TABS, TASKS } from './data/tasks.data'
import { TaskItem } from './TaskItem'
import type { TTaskStatus } from './types/tasks.type'

export function Tasks() {
	const tDashboard = useTranslations('Dashboard.tasks')

	const [currentTaskStatus, setCurrentTaskStatus] = useState<TTaskStatus>('all')

	const fleeredTasks = useMemo(() => {
		if (!currentTaskStatus) return TASKS

		switch (currentTaskStatus) {
			case 'not-started':
				return TASKS.filter(task =>
					task.subTasks.every(subTask => !subTask.isCompleted)
				)
			case 'in-progress':
				return TASKS.filter(task =>
					task.subTasks.some(subTask => !subTask.isCompleted)
				)
			case 'done':
				return TASKS.filter(task =>
					task.subTasks.every(subTask => subTask.isCompleted)
				)
			default:
				return TASKS
		}
	}, [currentTaskStatus])

	return (
		<div className='flex flex-col gap-6'>
			<div className='flex items-center justify-between'>
				<h2 className='flex gap-1 font-medium text-xl'>
					<span>{tDashboard('lastTasks')}</span>
					<span className='font-normal text-gray-400'>
						({fleeredTasks.length})
					</span>
				</h2>

				<Tabs
					aria-label='Tabs sizes'
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
			</div>

			<div className='grid grid-cols-3 gap-4'>
				{fleeredTasks.length === 0 && (
					<p className='text-gray-500'>No tasks found for this status.</p>
				)}
				{fleeredTasks.map(task => (
					<TaskItem key={task.id} task={task} />
				))}
			</div>
		</div>
	)
}
