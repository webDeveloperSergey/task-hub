'use client'

import { Button, Form, Input } from '@heroui/react'
import useLoginFrom from '../hooks/useLoginFrom'

export function LoginForm() {
	const { onSubmit, formData, setUserFormData, errors, isLoading } =
		useLoginFrom()

	return (
		<Form className='w-full space-y-4 px-16' onSubmit={onSubmit}>
			<Input
				isRequired
				label='Email'
				labelPlacement='outside'
				name='email'
				type='email'
				isDisabled={isLoading}
				value={formData.email}
				onChange={e =>
					setUserFormData(prev => ({ ...prev, email: e.target.value }))
				}
			/>

			<div className='flex gap-4 w-full'>
				<Button
					className='w-full'
					color='primary'
					type='submit'
					isLoading={isLoading}
					isDisabled={!!Object.keys(errors || {}).length}
				>
					Send OTP Link
				</Button>
			</div>
		</Form>
	)
}
