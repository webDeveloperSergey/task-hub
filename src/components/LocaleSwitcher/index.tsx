import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Select, SelectItem, type SharedSelection } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LocaleSwitcher() {
	const locale = useLocale()

	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()

	const localeOptionsData = routing.locales.map(locale => ({
		key: locale,
		label: locale.toUpperCase(),
	}))

	const changeLocale = (selectedKeys: SharedSelection) => {
		const nextLocale = Array.from(selectedKeys).join(', ').replace(/_/g, '')

		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			{ pathname, params },
			{ locale: nextLocale }
		)
	}

	return (
		<Select
			classNames={{
				trigger: 'bg-content1 w-25 cursor-pointer',
			}}
			defaultSelectedKeys={[locale]}
			onSelectionChange={selectedKeys => changeLocale(selectedKeys)}
			items={localeOptionsData}
			renderValue={items => {
				console.log(items, 'items')
				return items.map(item => (
					<div key={item.key} className='flex items-center gap-2'>
						<Icon
							className='text-xl shrink-0'
							icon={`circle-flags:lang-${item.key}`}
						/>
						{item.data?.label}
					</div>
				))
			}}
		>
			{localeOption => (
				<SelectItem key={localeOption.key} textValue={localeOption.label}>
					<div className='flex gap-2 items-center text-xs'>
						<Icon
							className='text-xl'
							icon={`circle-flags:lang-${localeOption.key}`}
						/>
						{localeOption.label}
					</div>
				</SelectItem>
			)}
		</Select>
	)
}
