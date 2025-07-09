import type { PropsWithChildren } from 'react'

interface Props {
	title: string
}

export function SidebarHeading({ title, children }: PropsWithChildren<Props>) {
	return (
		<div className='flex flex-col gap-3'>
			<span className='text-neutral-400'>{title}</span>

			<div>{children}</div>
		</div>
	)
}
