import { addToast } from '@heroui/react'
import { useState, type FormEvent } from 'react'
import type z from 'zod'
import { signInWithEmail } from '../actions'
import useValidateLogin from './useValidateLogin'

export const initFormState = {
	email: '',
}

const useLoginFrom = () => {
	const { AuthScheme } = useValidateLogin()

	const [userFormData, setUserFormData] = useState<
		Partial<z.infer<typeof AuthScheme>>
	>({})

	const [showErrors, setShowErrors] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const formData = {
		...initFormState,
		...userFormData,
	}

	const validate = () => {
		const res = AuthScheme.safeParse(formData)
		if (res.success) return undefined
		return res.error.format()
	}

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		setIsLoading(true)

		event.preventDefault()
		const data: Partial<z.infer<typeof AuthScheme>> = Object.fromEntries(
			new FormData(event.currentTarget)
		)

		const errors = validate()

		console.log(errors, 'errors')

		if (errors) {
			setShowErrors(true)
			return
		}

		try {
			addToast({
				title: 'We received an email',
				description: 'A login link has been sent to your email.',
				color: 'success',
			})

			await signInWithEmail({ email: data.email || '' })
		} catch (error) {
			addToast({
				title: 'Sooting went wrong ...',
				description: 'Failed to send OTP link',
				color: 'danger',
			})
		} finally {
			setIsLoading(false)
			setUserFormData({})
		}
	}

	const errors = showErrors ? validate() : undefined

	return {
		setUserFormData,
		onSubmit,
		formData,
		errors,
		isLoading,
	}
}

export default useLoginFrom
