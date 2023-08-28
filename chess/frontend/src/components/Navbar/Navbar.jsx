import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import SignIn from './Authorization/SignIn/SignInButton'
import MiniProfile from './Authorization/MiniProfile/MiniProfile'
import Routes from './Routing/Routes'
import './Navbar.css'

const Navbar = () => {
    const { authorized } = useSelector((store) => store.auth)
    return (
        <nav>
            <NavLink to={'/'} className='title'>
                <h1>Lapchess</h1>
            </NavLink>
            <Routes />
            {!authorized ? <SignIn /> : <MiniProfile />}
        </nav>
    )
}

export default Navbar
