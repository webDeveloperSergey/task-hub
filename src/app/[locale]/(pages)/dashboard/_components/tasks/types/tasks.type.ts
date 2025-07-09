import type { IProfile } from '@/components/Sidebar/types/profile.type'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

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
