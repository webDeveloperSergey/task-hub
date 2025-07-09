import type { PropsWithChildren } from 'react'

interface Props {
	title: string
}

export function CardHeading({ title, children }: PropsWithChildren<Props>) {
	return (
		<div className='flex justify-between w-full'>
			<h2 className='text-2xl'>{title}</h2>
			{children}
		</div>
	)
}
