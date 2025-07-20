'use client'

import { DashboardPages } from '@/app/config/dashboard-pages'
import { PublicPages } from '@/app/config/public-pages'
import { createClient } from '@/utils/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function ConfirmPage() {
	const params = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const verifyToken = async () => {
			const token_hash = params.get('token_hash')

			if (!token_hash) return router.replace(PublicPages.LOGIN)

			const { error } = await createClient().auth.verifyOtp({
				type: 'email',
				token_hash,
			})

			if (error) return router.replace(PublicPages.LOGIN)

			router.replace(DashboardPages.BASE)
		}

		verifyToken()
	}, [])

	return <p>Verify your email... Please wait.</p>
}
