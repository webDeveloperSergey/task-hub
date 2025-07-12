export class Pages {
	static BASE = '/dashboard'

	static TASK_EDIT(id: string) {
		return `${Pages.BASE}/task/${id}/edit`
	}

	static DASHBOARD = Pages.BASE
	static MESSAGES = `${Pages.BASE}/messages`
	static INSIGHT = `${Pages.BASE}/insight`
	static TEAM = `${Pages.BASE}/team`
	static SCHEDULE = `${Pages.BASE}/schedule`
	static REPORT = `${Pages.BASE}/report`
	static SETTINGS = `${Pages.BASE}/settings`
}
