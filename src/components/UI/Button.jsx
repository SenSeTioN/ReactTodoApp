import styles from './Button.module.scss'

function Button(props) {
	const { children, disabled = false } = props

	return (
		<button {...props} className={styles.button} disabled={disabled}>
			{children}
		</button>
	)
}
export default Button
