import React from 'react'
import classes from './UserList.module.scss'
import Card from '../UI/Card'

interface User {
	name: string
	age: number
	id: string
}

interface UserListProps {
	users: User[]
}

const UserList: React.FC<UserListProps> = props => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map(user => (
					<li key={user.id}>
						{user.name} - {user.age} years old
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList
