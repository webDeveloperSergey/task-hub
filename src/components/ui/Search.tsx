import { Input } from '@heroui/react'
import { SearchIcon } from 'lucide-react'

interface Props {
	value: string
	onChange: () => void
	placeholder?: string
}

export function Search({
	value,
	onChange,
	placeholder = 'Search soothing...',
}: Props) {
	return (
		<Input
			className='max-w-sm'
			classNames={{
				inputWrapper: 'bg-content1',
			}}
			radius='full'
			placeholder={placeholder}
			startContent={<SearchIcon strokeWidth={1.5} />}
			// type='search'
		/>
	)
}
