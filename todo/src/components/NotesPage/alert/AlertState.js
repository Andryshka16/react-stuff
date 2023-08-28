import { createContext, useContext, useReducer } from 'react'
import reducer, { HIDE_ALERT, SHOW_COMPLETION, SHOW_REMOVING, EMPTY } from './reducer'
import newNote from '../Notes/newNote'
import { NotesContext } from '../Notes/NotesState'

export const alertContext = createContext(null)

export default function AlertState({ children }) {
	const [alert, dispatch] = useReducer(reducer, {})
	const [notes, setNotes] = useContext(NotesContext)

	const hide = () =>
		dispatch({
			type: HIDE_ALERT
		})

	const invalidText = () =>
		dispatch({
			type: EMPTY,
			payload: { text: 'Введите корректное название заметки!' }
		})

	const addNote = (value) => {
		setNotes([...notes, newNote(value, notes.length + 1)])
		dispatch({
			type: SHOW_COMPLETION,
			payload: { text: 'Заметка была успешно добавлена' }
		})
	}

	const removeNote = (id) => {
		setNotes(notes.filter((_, index) => id !== index))
		dispatch({
			type: SHOW_REMOVING,
			payload: { text: 'Заметка была успешно удалена' }
		})
	}
	const completeNote = (id) => {
		setNotes(notes.filter((_, index) => id !== index))
		dispatch({
			type: SHOW_COMPLETION,
			payload: { text: 'Заметка была успешно выполнена' }
		})
	}

	return (
		<alertContext.Provider value={[alert, { hide, invalidText, removeNote, completeNote, addNote }]}>
			{children}
		</alertContext.Provider>
	)
}
