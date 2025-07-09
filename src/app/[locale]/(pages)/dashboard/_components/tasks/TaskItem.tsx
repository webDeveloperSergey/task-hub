import { ProgressBar } from '@/components/ui/ProgressBar'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { Avatar, AvatarGroup, Button, Tooltip } from '@heroui/react'
import { Icon } from '@iconify/react'
import dayjs from 'dayjs'
import type { ITask } from './types/tasks.type'

type Props = {
	task: ITask
}

export function TaskItem({ task }: Props) {
	const completedSubtasks = task.subTasks.filter(
		subTask => subTask.isCompleted
	).length
	const totalSubtasks = task.subTasks.length
	const progress = Math.round((completedSubtasks / totalSubtasks) * 100)

	return (
		<Card className=' min-w-[300px] p-1'>
			<CardHeader className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<span className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[var(--light-primary)]'>
						<Icon
							icon={task.icon}
							className='text-primary dark:text-white text-2xl'
						/>
					</span>
					<div>
						<h3 className='font-medium text-sm'>{task.title}</h3>
						<span className='text-xs text-gray-400'>
							{/* TODO: Check for valid entry */}
							Due: {dayjs(task.dueDate).diff(dayjs(), 'day')} days
						</span>
					</div>
				</div>
				<AvatarGroup isBordered>
					{task.users.map(user => (
						<Avatar size='sm' key={user.id} src={user.avatarPath} />
					))}
				</AvatarGroup>
			</CardHeader>

			<CardBody>
				<ProgressBar progress={progress} />
			</CardBody>

			<CardFooter className='flex justify-between items-center'>
				<div className='flex gap-2'>
					<span className='flex gap-1 text-xs'>
						<Icon
							icon='hugeicons:comment-01'
							className='text-gray-400 text-xl'
						/>
						{task.comments.length}
					</span>

					<span className='flex gap-1 text-xs'>
						<Icon icon='hugeicons:image-01' className='text-gray-400 text-xl' />
						{task.assets.length}
					</span>

					<span className='flex gap-1 text-xs'>
						<Icon icon='hugeicons:link-04' className='text-gray-400 text-xl' />
						{task.links.length}
					</span>
				</div>
				<div className='flex gap-2'>
					<Tooltip
						showArrow
						size='sm'
						color='primary'
						content={'Add new subTask'}
					>
						<Button color='primary' size='sm' radius='full' isIconOnly>
							<Icon icon='hugeicons:plus-sign' className='text-xl' />
						</Button>
					</Tooltip>

					<Tooltip showArrow size='sm' color='primary' content={'Edit card'}>
						<Button
							className='border-1'
							color='primary'
							variant='bordered'
							size='sm'
							radius='full'
							isIconOnly
						>
							<Icon icon='hugeicons:pencil-edit-01' className='text-xl' />
						</Button>
					</Tooltip>
				</div>
			</CardFooter>
		</Card>
	)
}
