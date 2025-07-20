export class DashboardPages {
	static BASE = '/dashboard'

	static TASK_EDIT(id: string) {
		return `${DashboardPages.BASE}/task/${id}/edit`
	}

	static DASHBOARD = DashboardPages.BASE
	static MESSAGES = `${DashboardPages.BASE}/messages`
	static INSIGHT = `${DashboardPages.BASE}/insight`
	static TEAM = `${DashboardPages.BASE}/team`
	static SCHEDULE = `${DashboardPages.BASE}/schedule`
	static REPORT = `${DashboardPages.BASE}/report`
	static SETTINGS = `${DashboardPages.BASE}/settings`
}
