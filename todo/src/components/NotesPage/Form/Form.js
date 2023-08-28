import React, { useContext, useState } from 'react'
import { alertContext } from '../alert/AlertState'

export default function Form() {
	const [value, setValue] = useState('')

	const [alert, { invalidText, addNote }] = useContext(alertContext)

	function submitNote(event) {
		event.preventDefault()

		if (!value.trim() || (value.length > 20 && !value.includes(' '))) {
			invalidText()
		} else {
			addNote(value)
		}

		setValue('')
	}

	return (
		<form action='src/components/NotesPage/Form/Form' onSubmit={submitNote}>
			<input
				type='text'
				value={value}
				className={'notesInput'}
				placeholder={'New note'}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={'submitNote'} onClick={submitNote}>
				Add
			</button>
		</form>
	)
}
