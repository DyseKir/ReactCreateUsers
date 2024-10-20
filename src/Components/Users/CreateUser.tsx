import React, { FormEvent, useState } from 'react'
import Card from '../UI/Card'
import classes from './CreateUser.module.scss'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

interface CreateUserProps {
	onCreateUser: (name: string, age: number) => void
}

const CreateUser: React.FC<CreateUserProps> = props => {
	const [inputName, setInputName] = useState('')
	const [inputAge, setInputAge] = useState('')
	const [error, setError] = useState<{ title: string; message: string } | null>(
		null
	)

	const createUserHandler = (event: FormEvent) => {
		event.preventDefault()
		if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			})
			return
		}
		if (+inputAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			})
			return
		}
		props.onCreateUser(inputName, +inputAge)

		setInputName('')
		setInputAge('')
	}

	const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputName(e.target.value)
	}

	const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputAge(e.target.value)
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<div>
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
					<input
						id='name'
						type='text'
						value={inputName}
						onChange={nameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='number'
						value={inputAge}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add new User</Button>
				</form>
			</Card>
		</div>
	)
}

export default CreateUser
