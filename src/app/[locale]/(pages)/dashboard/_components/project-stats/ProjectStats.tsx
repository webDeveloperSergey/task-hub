import { useProjectsStore } from '@/store/projects/projects.store'
import { ProjectStatsCard } from './ProjectStatsCard'

export function ProjectStats() {
	// === Get data from Store
	const projectStats = useProjectsStore(state => state.projectStats)
	// ===

	return (
		<div className='flex flex-col gap-4'>
			{projectStats.map(projectStat => (
				<ProjectStatsCard
					key={`${projectStat.label}-${projectStat.id}`}
					projectStat={projectStat}
				/>
			))}
		</div>
	)
}
