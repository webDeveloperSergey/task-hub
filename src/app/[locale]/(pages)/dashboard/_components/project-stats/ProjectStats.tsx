import { PROJECT_STATS_DATA } from './data/project-stats.data'
import { ProjectStatsCard } from './ProjectStatsCard'

export function ProjectStats() {
	return (
		<div className='flex flex-col gap-4'>
			{PROJECT_STATS_DATA.map(projectStat => (
				<ProjectStatsCard
					key={`${projectStat.label}-${projectStat.id}`}
					projectStat={projectStat}
				/>
			))}
		</div>
	)
}
