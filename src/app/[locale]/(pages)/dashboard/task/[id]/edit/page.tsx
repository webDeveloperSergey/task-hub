import { DashboardPages } from '@/app/config/dashboard-pages'
import Link from 'next/link'

interface Props {
	params: Promise<{ id: string }>
}

export default async function TaskEditPage({ params }: Props) {
	const { id } = await params

	return (
		<div className='p-6'>
			<div>
				<Link href={DashboardPages.DASHBOARD}>Back to Dashboard</Link>
			</div>
		</div>
	)
}
