import type { IDueSorting, ITask, TTaskStatus } from '@/types/tasks.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { DUE_SORTING, STATUSES_TASK_TABS, TASKS } from './tasks.data'

interface IStateTasks {
	filteredTasks: ITask[]
	statusesTaskTabs: TTaskStatus[]
	dueSorting: IDueSorting[]
	currentTaskStatus: TTaskStatus
	currentSortByDueDate: IDueSorting
}

interface IActionsTasks {
	setCurrentTaskStatus: (status: TTaskStatus) => void
	setCurrentSortByDueDate: (sort: IDueSorting) => void
}

export const useTasksStore = create<IStateTasks & IActionsTasks>()(
	persist(
		set => ({
			filteredTasks: TASKS,
			statusesTaskTabs: STATUSES_TASK_TABS,
			currentTaskStatus: 'all',
			dueSorting: DUE_SORTING,
			currentSortByDueDate: {
				value: 'asc',
				label: 'dueAscSort',
				icon: 'hugeicons:sort-by-up-02',
			},

			setCurrentTaskStatus: status =>
				set(state => ({
					currentTaskStatus: status,
					filteredTasks: computeFilteredTasks(
						status,
						state.currentSortByDueDate
					),
				})),

			setCurrentSortByDueDate: sortBy =>
				set(state => ({
					currentSortByDueDate: sortBy,
					filteredTasks: computeFilteredTasks(state.currentTaskStatus, sortBy),
				})),
		}),
		{
			name: 'tasks-storage',
		}
	)
)

const computeFilteredTasks = (status: TTaskStatus, sortBy: IDueSorting) => {
	const filtered = TASKS.filter(task => {
		switch (status) {
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

	return filtered.sort((a, b) => {
		const dueDateA = new Date(a.dueDate).getTime()
		const dueDateB = new Date(b.dueDate).getTime()

		if (sortBy.value === 'asc') {
			return dueDateA - dueDateB
		} else {
			return dueDateB - dueDateA
		}
	})
}
