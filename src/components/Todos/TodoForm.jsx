import { useState } from 'react'
import styles from './TodoForm.module.scss'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
	const [text, setText] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input type='text' placeholder='Enter new todo' value={text} onChange={(e) => setText(e.target.value)} />
				<Button type='submit' title='Submit'>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default TodoForm
