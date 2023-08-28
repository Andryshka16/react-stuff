import { createContext, useState } from 'react'

export const NotesContext = createContext(null)

export default function Notes({ children }) {
	const [notes, setNotes] = useState([{ text: 'Programming', date: new Date() }])

	return <NotesContext.Provider value={[notes, setNotes]}>{children}</NotesContext.Provider>
}
