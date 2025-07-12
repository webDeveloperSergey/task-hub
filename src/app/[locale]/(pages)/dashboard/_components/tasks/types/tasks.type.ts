import type { IProfile } from '@/components/Sidebar/types/profile.type'

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	icon: string
	dueDate: Date
	users: IProfile[]
	subTasks: ISubTask[]
	comments: string[]
	assets: string[]
	links: string[]
}

export type TTaskStatus = 'all' | 'not-started' | 'in-progress' | 'done'

export interface IDueSorting {
	value: TSortBy
	label: string
	icon: string
}

export type TSortBy = 'asc' | 'desc'
