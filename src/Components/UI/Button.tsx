import React from 'react'
import classes from './Button.module.scss'

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<button
			className={classes.button}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
