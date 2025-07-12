import { Pages } from '@/app/config/pages'
import type { IMenuItem } from '../types/menu.types'

export const MAIN_MENU: IMenuItem[] = [
	{
		icon: 'hugeicons:dashboard-square-02',
		label: 'dashboard',
		href: Pages.DASHBOARD,
	},
	{
		icon: 'hugeicons:message-01',
		label: 'messages',
		href: Pages.MESSAGES,
	},
	{
		icon: 'hugeicons:chart-01',
		label: 'statistics',
		href: Pages.INSIGHT,
	},
	{
		icon: 'hugeicons:add-team',
		label: 'team',
		href: Pages.TEAM,
	},
	{
		icon: 'hugeicons:calendar-01',
		label: 'schedule',
		href: Pages.SCHEDULE,
	},
	{
		icon: 'hugeicons:notebook-01',
		label: 'report',
		href: Pages.REPORT,
	},
	{
		icon: 'hugeicons:settings-02',
		label: 'settings',
		href: Pages.SETTINGS,
	},
]
