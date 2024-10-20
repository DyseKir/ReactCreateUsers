import React, { useState } from 'react'
import './App.css'
import CreateUser from './Components/Users/CreateUser'
import UserList from './Components/Users/UserList'

interface User {
	name: string
	age: number
	id: string
}

function App() {
	const [usersList, setUsersList] = useState<User[]>([])

	const createUserHandler = (name: string, age: number) => {
		setUsersList(prevUserList => {
			return [
				...prevUserList,
				{ name, age, id: Math.random().toString() }, // Генерируем id здесь
			]
		})
	}

	return (
		<div>
			<CreateUser onCreateUser={createUserHandler} />
			<UserList users={usersList} />
		</div>
	)
}

export default App
