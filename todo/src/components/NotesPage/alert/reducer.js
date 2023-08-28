export const HIDE_ALERT = 'HIDE_ALERT'
export const SHOW_COMPLETION = 'SHOW_COMPLETION'
export const SHOW_REMOVING = 'SHOW_REMOVING'
export const EMPTY = 'EMPTY'

const styles = {
	[SHOW_COMPLETION]: { backgroundColor: '#A0FF95FF' },
	[SHOW_REMOVING]: { backgroundColor: 'rgb(255,195,151)' },
	[EMPTY]: { backgroundColor: '#ff9595' }
}

export default function reducer(state, action) {
	if (action.type === HIDE_ALERT) {
		return { ...state, visible: false }
	}
	return {
		...action.payload,
		visible: true,
		style: styles[action.type]
	}
}
