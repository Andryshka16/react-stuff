import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../../redux/Authorization/authSlice'
import { resetChess } from '../../../../redux/Chess/chessSlice'
import logoutIcon from '../../../../assets/icons/logout-icon.png'
import avatars from '../../../../assets/avatars'
import socket from '../../../../socket/socket'
import './MiniProfile.css'

const MiniProfile = () => {
    const dispatch = useDispatch()
    const { avatarId, username } = useSelector((store) => store.auth.user)
    const { id } = useSelector((store) => store.chess.currentRoom)

    return (
        <div className='authorized-profile'>
            <NavLink to='/profile' className='navlink'>
                <div className='profile-preview'>
                    <img src={avatars[avatarId]} className='avatar' alt='' />
                    <h2 className='name'>{username}</h2>
                </div>
            </NavLink>
            <img
                src={logoutIcon}
                alt=''
                className='hoverScale logout-icon'
                onClick={() => {
                    socket.emit('leave_room', id)
                    dispatch(resetChess())
                    dispatch(logout())
                }}
            />
        </div>
    )
}

export default MiniProfile
