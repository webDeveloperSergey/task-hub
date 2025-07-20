import z from 'zod'

export const useValidateAuth = () => {
	const AuthScheme = z.object({
		email: z.email(),
	})

	return { AuthScheme }
}

export default useValidateAuth
