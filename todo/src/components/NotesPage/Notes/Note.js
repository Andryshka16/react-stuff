import { useContext } from 'react'
import { alertContext } from '../alert/AlertState'
import { CSSTransition } from 'react-transition-group'

export default function Note({ text, date, id }) {
	const [alert, { removeNote, completeNote }] = useContext(alertContext)

	return (
		<CSSTransition timeout={500} classNames={'note-animation'}>
			<div className={'note'}>
				<div className={'titleAndDate'}>
					<strong className={'notesText'}>
						{id + 1}. {text}
					</strong>
					<small className={'notesDate'}>{date.toLocaleDateString()}</small>
				</div>

				<div style={{ display: 'flex' }}>
					<button className={'noteBtn completeNote'} onClick={() => completeNote(id)}>
						&#10004;
					</button>

					<button className={'noteBtn removeNote'} onClick={() => removeNote(id)}>
						&#10006;
					</button>
				</div>
			</div>
		</CSSTransition>
	)
}
