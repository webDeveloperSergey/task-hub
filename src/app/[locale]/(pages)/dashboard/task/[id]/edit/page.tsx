import { Pages } from '@/app/config/pages'
import Link from 'next/link'

interface Props {
	params: Promise<{ id: string }>
}

export default async function TaskEditPage({ params }: Props) {
	const { id } = await params

	return (
		<div className='p-6'>
			<div>
				<Link href={Pages.DASHBOARD}>Back to Dashboard</Link>
			</div>
		</div>
	)
}
