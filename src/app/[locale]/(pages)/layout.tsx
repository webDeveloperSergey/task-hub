import { SITE_NAME } from '@/constants'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import '../../globals.css'
import { Providers } from './Providers'

const poppinsSans = Poppins({
	variable: '--poppins-sans',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	icons: {
		icon: 'images/favicon.svg',
		shortcut: 'images/favicon.svg',
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Super task',
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${poppinsSans.variable} antialiased`}>
				<Providers locale={locale} messages={messages}>
					{children}
				</Providers>
			</body>
		</html>
	)
}
