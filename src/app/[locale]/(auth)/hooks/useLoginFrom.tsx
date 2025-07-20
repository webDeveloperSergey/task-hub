import { useState, type FormEvent } from 'react'
import type z from 'zod'
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

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = Object.fromEntries(new FormData(event.currentTarget))

		const errors = validate()

		console.log(errors, 'errors')
		if (errors) {
			setShowErrors(true)
			return
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
