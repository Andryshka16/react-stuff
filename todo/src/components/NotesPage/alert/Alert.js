import { useContext, useEffect } from 'react'
import { alertContext } from './AlertState'
import { CSSTransition } from 'react-transition-group'

export default function Alert() {
	const [alert, { hide }] = useContext(alertContext)

	useEffect(() => {
		let timeout
		if (alert.visible) {
			timeout = setTimeout(hide, 1500)
		}

		return () => clearTimeout(timeout)
	}, [alert])

	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350
			}}
			classNames={{
				enter: 'alert-enter',
				enterActive: 'alert-entering',
				exit: 'alert-exit',
				exitActive: 'alert-exiting'
			}}
			mountOnEnter
			unmountOnExit
		>
			<div className={'alert'} style={alert.style} onClick={hide}>
				<strong>{alert.text}</strong>
			</div>
		</CSSTransition>
	)
}
