'use client'
import { HeroUIProvider } from '@heroui/react'
import {
	IntlError,
	IntlErrorCode,
	NextIntlClientProvider,
	type AbstractIntlMessages,
	type Locale,
} from 'next-intl'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

interface Props {
	locale: Locale
	messages?: AbstractIntlMessages | undefined
}

function getMessageFallback({
	namespace,
	key,
	error,
}: {
	namespace: string
	key: string
	error: IntlError
}) {
	const path = [namespace, key].filter(part => part != null).join('.')

	return error.code === IntlErrorCode.MISSING_MESSAGE
		? error.code
		: 'Dear developer, please fix this message: ' + path
}

export function Providers({
	children,
	messages,
	locale,
}: PropsWithChildren<Props>) {
	return (
		<HeroUIProvider>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				<NextIntlClientProvider
					timeZone='Europe/Moscow'
					locale={locale}
					messages={messages}
					getMessageFallback={getMessageFallback}
				>
					{children}
				</NextIntlClientProvider>
			</ThemeProvider>
		</HeroUIProvider>
	)
}
