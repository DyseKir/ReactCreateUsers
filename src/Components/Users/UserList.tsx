import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.scss'

interface UserListProps {
	users: { name: string; age: number; id: string }[]
}

const UserList: React.FC<UserListProps> = props => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map(user => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList
