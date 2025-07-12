'use client'

import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
	id: string
}

export default function TaskModalEditClient({ id }: Props) {
	const router = useRouter()

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const [test, setTest] = useState(true)

	return (
		// <div className='w-20 h-20 fixed flex itemes-center justify-center'>
		// 	<Button onPress={() => router.back()}>Back</Button>
		// </div>

		<Modal
			backdrop={'blur'}
			isOpen={test}
			onOpenChange={onOpenChange}
			classNames={{
				closeButton: 'hidden',
			}}
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className='flex flex-col gap-1'>
							Modal Title
						</ModalHeader>
						<ModalBody>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
							<p>
								Magna exercitation reprehenderit magna aute tempor cupidatat
								consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
								incididunt cillum quis. Velit duis sit officia eiusmod Lorem
								aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
								consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
								et. Culpa deserunt nostrud ad veniam.
							</p>
						</ModalBody>
						<ModalFooter>
							<Button
								color='danger'
								variant='light'
								onPress={() => {
									setTest(false)

									setTimeout(() => router.back(), 300) // Ждем пока отработает анимация, а потом убираем роут
								}}
							>
								Close
							</Button>
							<Button color='primary' onPress={onClose}>
								Action
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
