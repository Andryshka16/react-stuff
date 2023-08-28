import React, { useContext } from 'react'

import Note from './Note'
import { NotesContext } from './NotesState'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Notes() {
	const [notes] = useContext(NotesContext)

	return (
		<TransitionGroup component={'div'} className={'notesList'} unmountOnExit>
			{notes.map((note, index) => (
				<CSSTransition
					key={note.date}
					timeout={{
						enter: 1000,
						exit: 700
					}}
					classNames={'note-animation'}
				>
					<Note {...note} id={index} />
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}
