import React from 'react'
import Notes from './Notes/Notes'
import Form from './Form/Form'
import Alert from './alert/Alert'
import AlertState from './alert/AlertState'

export default function NotesPage() {
	return (
		<AlertState>
			<Alert />
			<Form />
			<Notes />
		</AlertState>
	)
}
