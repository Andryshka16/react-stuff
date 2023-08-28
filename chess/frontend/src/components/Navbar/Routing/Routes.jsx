import { NavLink } from 'react-router-dom'
import './Routes.css'

const options = [
    { link: '/', name: 'Rooms' },
    { link: '/chess', name: 'Chess' },
    { link: '/practice', name: 'Practice' }
]

const Options = () => {
    return (
        <div className='options'>
            {options.map(({ link, name }) => (
                <NavLink to={link} className='option hoverUnderline' key={link}>
                    <h2>{name}</h2>
                </NavLink>
            ))}
        </div>
    )
}

export default Options
