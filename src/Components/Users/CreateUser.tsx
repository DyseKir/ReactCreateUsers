import React, { FormEvent, useState, useRef } from 'react'
import Card from '../UI/Card'
import classes from './CreateUser.module.scss'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

interface CreateUserProps {
	onCreateUser: (name: string, age: number) => void
}

const CreateUser: React.FC<CreateUserProps> = props => {
	const nameInputRef = useRef<HTMLInputElement>(null)
	const ageInputRef = useRef<HTMLInputElement>(null)

	const [error, setError] = useState<{ title: string; message: string } | null>(
		null
	)

	const createUserHandler = (event: FormEvent) => {
		event.preventDefault()

		const enteredName = nameInputRef.current!.value
		const enteredUserAge = ageInputRef.current!.value

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			})
			return
		}
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			})
			return
		}

		props.onCreateUser(enteredName, +enteredUserAge)

		// Очищаем инпуты после добавления пользователя
		nameInputRef.current!.value = ''
		ageInputRef.current!.value = ''
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onClose={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={createUserHandler}>
					<label htmlFor='name'>Name</label>
					<input id='name' type='text' ref={nameInputRef} />
					<label htmlFor='age'>Age</label>
					<input id='age' type='number' min='1' step='1' ref={ageInputRef} />
					<Button type='submit'>Add new User</Button>
				</form>
			</Card>
		</>
	)
}

export default CreateUser
