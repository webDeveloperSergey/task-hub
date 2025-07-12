import TaskModalEditClient from './TaskModalEditClient'

interface Props {
	params: Promise<{ id: string }>
}

export default async function TaskEditModal({ params }: Props) {
	const { id } = await params

	return <TaskModalEditClient id={id} />
}
