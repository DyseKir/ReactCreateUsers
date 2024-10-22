import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './ErrorModal.module.scss'
import ReactDOM from 'react-dom'

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onClose} />
}

const Modal = props => {
	return (
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
	)
}

interface ErrorModalProps {
	title: string
	message: string
	onClose: () => void
}

const ErrorModal: React.FC<ErrorModalProps> = props => {
	return (
		<>
			<Backdrop onClose={props.onClose} />
			<Modal
				title={props.title}
				message={props.message}
				onClose={props.onClose}
			/>
		</>
	)
}

export default ErrorModal
