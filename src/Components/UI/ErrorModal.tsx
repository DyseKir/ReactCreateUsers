import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './ErrorModal.module.scss'

interface ErrorModalProps {
	title: string
	message: string
	onClose: () => void
}

const ErrorModal: React.FC<ErrorModalProps> = props => {
	return (
		<div className={classes.backdrop} onClick={props.onClose}>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onClose}>Close</Button>
				</footer>
			</Card>
		</div>
	)
}

export default ErrorModal
