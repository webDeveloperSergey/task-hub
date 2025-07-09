import { USERS } from '@/app/[locale]/(pages)/dashboard/users.data'
import dayjs from 'dayjs'
import type { ITask, TTaskStatus } from '../types/tasks.type'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App User Flow Whit Admin Panel',
		icon: 'hugeicons:airplane-01',
		dueDate: dayjs().add(5, 'day').toDate(),
		users: [USERS[0], USERS[1], USERS[2]],
		subTasks: [
			{ id: '1.1', title: 'Design wireframes', isCompleted: true },
			{ id: '1.2', title: 'Create user personas', isCompleted: true },
			{ id: '1.3', title: 'Define user journey', isCompleted: false },
			{ id: '1.4', title: 'Conduct user testing', isCompleted: false },
		],
		comments: [
			'This is a comment on the task.',
			'Another comment on the task.',
			'Yet another comment on the task.',
		],
		assets: [
			'https://example.com/asset1.png',
			'https://example.com/asset2.png',
			'https://example.com/asset3.png',
		],
		links: ['https://example.com/link1', 'https://example.com/link2'],
	},
	{
		id: '2',
		title: 'E-commerce Website Redesign',
		icon: 'hugeicons:shopping-basket-03',
		dueDate: dayjs().add(10, 'day').toDate(),
		users: [USERS[3], USERS[4], USERS[5]],
		subTasks: [
			{ id: '2.1', title: 'Update homepage layout', isCompleted: true },
			{ id: '2.2', title: 'Improve product pages', isCompleted: true },
			{ id: '2.3', title: 'Enhance checkout process', isCompleted: true },
			{ id: '2.3', title: 'Enhance checkout process', isCompleted: false },
		],
		comments: [
			'Initial design concepts are ready.',
			'Feedback needed on the new layout.',
		],
		assets: ['https://example.com/asset4.png'],
		links: ['https://example.com/link3'],
	},
	{
		id: '3',
		title: 'Mobile App Feature Development',
		icon: 'hugeicons:mobile-programming-01',
		dueDate: dayjs().add(15, 'day').toDate(),
		users: [USERS[6], USERS[7], USERS[8]],
		subTasks: [
			{ id: '3.1', title: 'Implement login feature', isCompleted: true },
			{ id: '3.2', title: 'Add push notifications', isCompleted: true },
			{ id: '3.3', title: 'Integrate payment gateway', isCompleted: true },
			{ id: '3.3', title: 'Integrate payment gateway', isCompleted: true },
		],
		comments: ['Login feature is implemented.', 'Push notifications are next.'],
		assets: [],
		links: [],
	},
]

export const STATUSES_TASK_TABS: TTaskStatus[] = [
	'all',
	'not-started',
	'in-progress',
	'done',
]
