import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	User,
} from '@heroui/react'
import { Icon } from '@iconify/react'

export function Account() {
	return (
		// <div className='flex justify-between items-center bg-[#ede9fd] dark:bg-[#2e2e2e] py-2 px-2.5 text-xs rounded-full'>
		// 	<div className='flex gap-2'>
		// 		<span className='block w-9 h-9 bg-primary rounded-full'></span>

		// 		<div>
		// 			<h2 className='font-semibold'>Awe Std</h2>
		// 			<span className='text-xs text-gray-500 font-medium'>
		// 				awestd@gmail.com
		// 			</span>
		// 		</div>
		// 	</div>

		// 	<ChevronDown strokeWidth={1.25} color='#818385' size={18} />
		// </div>

		<Dropdown backdrop='blur' placement='bottom-start'>
			<DropdownTrigger className='cursor-pointer'>
				<div className='flex items-center justify-between'>
					<User
						as='button'
						avatarProps={{
							isBordered: true,
							src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
						}}
						className='transition-transform'
						description='awestd@gmail.com'
						name='Awe Std'
						classNames={{
							description: 'text-xs text-gray-500 font-medium',
							name: 'font-medium',
						}}
					/>
					<Icon
						icon='hugeicons:arrow-down-01'
						className='text-xl text-gray-400'
					/>
				</div>
			</DropdownTrigger>
			<DropdownMenu aria-label='User Actions' variant='flat'>
				<DropdownSection showDivider>
					<DropdownItem key='settings'>My Settings</DropdownItem>
					<DropdownItem key='team_settings'>Team Settings</DropdownItem>
					<DropdownItem key='analytics'>Analytics</DropdownItem>
					<DropdownItem key='system'>System</DropdownItem>
					<DropdownItem key='configurations'>Configurations</DropdownItem>
				</DropdownSection>
				<DropdownSection>
					<DropdownItem
						className='text-warning'
						startContent={
							<Icon icon='hugeicons:help-circle' className='text-xl' />
						}
						color='warning'
						key='help_and_feedback'
					>
						Help & Feedback
					</DropdownItem>
					<DropdownItem
						className='text-danger'
						startContent={
							<Icon
								icon='hugeicons:logout-01'
								className='text-danger text-xl'
							/>
						}
						key='logout'
						color='danger'
					>
						Log Out
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	)
}
