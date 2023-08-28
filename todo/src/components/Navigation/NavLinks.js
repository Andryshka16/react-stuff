import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
	const buttons = [
		{ text: 'Главная', link: '/' },
		{ text: 'Информация', link: '/info' }
	]

	const [active, setActive] = useState('Главная')

	return (
		<div style={{ display: 'flex', marginLeft: '20px' }}>
			{buttons.map(({ text, link }) => {
				const styles = { color: text === active ? 'white' : 'rgba(200, 200,200)' }

				return (
					<NavLink to={link} key={text} className={'navComponent'} onClick={() => setActive(text)}>
						<h2 className={'navlink'} style={styles}>
							{text}
						</h2>
					</NavLink>
				)
			})}
		</div>
	)
}
