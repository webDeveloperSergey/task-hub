'use server'

import { DashboardPages } from '@/app/config/dashboard-pages'
import { createClientFromServer } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signInWithEmail({ email }: { email: string }) {
	const supabase = await createClientFromServer()

	const { error } = await supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: false,
			emailRedirectTo: DashboardPages.BASE,
		},
	})

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}
