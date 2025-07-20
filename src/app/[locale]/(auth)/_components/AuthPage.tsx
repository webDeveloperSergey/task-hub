'use client'

import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Card, Image } from '@heroui/react'
import dynamic from 'next/dynamic'
import { LoginForm } from './LoginForm'
const DynamicThemeToggle = dynamic(
	() => import('@/components/ui/ThemeToggle').then(mod => mod.ThemeToggle),
	{ ssr: false }
)

export function AuthPage() {
	return (
		<div className='flex h-screen px-12'>
			<Card className='grid grid-cols-[0.8fr_1fr] max-w-300 max-h-180 m-auto'>
				<div className='flex flex-col w-full items-center pt-25 gap-10'>
					<div>
						<h1 className='text-4xl font-bold'>Welcom back</h1>
						<p className='text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>

					<LoginForm />
				</div>

				<div className='relative'>
					<div className='flex gap-4 items-center absolute right-5 top-5 z-5'>
						<LocaleSwitcher />
						<DynamicThemeToggle />
					</div>
					<Image
						className='relative z-2'
						alt='Auth img'
						src='/images/chat-preview.jpg'
						radius='none'
					/>
				</div>
			</Card>
		</div>
	)
}
