import { DashboardPages } from '@/app/config/dashboard-pages'
import type { IMenuItem } from '../types/menu.types'

export const MAIN_MENU: IMenuItem[] = [
	{
		icon: 'hugeicons:dashboard-square-02',
		label: 'dashboard',
		href: DashboardPages.DASHBOARD,
	},
	{
		icon: 'hugeicons:message-01',
		label: 'messages',
		href: DashboardPages.MESSAGES,
	},
	{
		icon: 'hugeicons:chart-01',
		label: 'statistics',
		href: DashboardPages.INSIGHT,
	},
	{
		icon: 'hugeicons:add-team',
		label: 'team',
		href: DashboardPages.TEAM,
	},
	{
		icon: 'hugeicons:calendar-01',
		label: 'schedule',
		href: DashboardPages.SCHEDULE,
	},
	{
		icon: 'hugeicons:notebook-01',
		label: 'report',
		href: DashboardPages.REPORT,
	},
	{
		icon: 'hugeicons:settings-02',
		label: 'settings',
		href: DashboardPages.SETTINGS,
	},
]
