import { Pages } from '@/app/config/pages'
import type { IMenuItem } from '../types/menu.types'

export const MAIN_MENU: IMenuItem[] = [
	{
		icon: 'hugeicons:dashboard-square-02',
		label: 'Dashboard',
		href: Pages.DASHBOARD,
	},
	{
		icon: 'hugeicons:message-01',
		label: 'Messages',
		href: Pages.MESSAGES,
	},
	{
		icon: 'hugeicons:chart-01',
		label: 'Insight',
		href: Pages.INSIGHT,
	},
	{
		icon: 'hugeicons:add-team',
		label: 'Team',
		href: Pages.TEAM,
	},
	{
		icon: 'hugeicons:calendar-01',
		label: 'Schedule',
		href: Pages.SCHEDULE,
	},
	{
		icon: 'hugeicons:notebook-01',
		label: 'Report',
		href: Pages.REPORT,
	},
	{
		icon: 'hugeicons:settings-02',
		label: 'Settings',
		href: Pages.SETTINGS,
	},
]
