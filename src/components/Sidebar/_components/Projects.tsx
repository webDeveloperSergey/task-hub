import cn from 'clsx'
import Link from 'next/link'
import { PROJECTS } from '../data/projects.data'

export function Projects() {
	return (
		<div className='flex flex-col gap-4 pl-2'>
			{PROJECTS.map((project, index) => (
				<Link
					key={`${project.name}-${index}`}
					href={project.name}
					className='flex items-center gap-x-3 group relative'
				>
					<span
						className={cn(
							'block w-2.5 h-2.5 rounded-xs group-hover:w-8 transition-all duration-500 ease-in-out',
							project.color
						)}
					></span>
					<span className='text-gray-500 text-sm group-hover:font-medium transition-all duration-500 ease-in-out'>
						{project.name}
					</span>
				</Link>
			))}
		</div>
	)
}

//absolute z-1 group-hover:w-full group-hover:rounded-md group-hover:h-6 transition-all duration-500 ease-in-out
