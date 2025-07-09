'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			className='p-2 rounded-full bg-content1 shadow-sm cursor-pointer'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Icon icon='hugeicons:sun-03' className='text-xl' />
			) : (
				<Icon icon='hugeicons:moon-02' className='text-xl' />
			)}
		</button>
	)
}
