import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { AuthForm } from '../_components/AuthForm'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return (
		<div>
			<AuthForm />
		</div>
	)
}
