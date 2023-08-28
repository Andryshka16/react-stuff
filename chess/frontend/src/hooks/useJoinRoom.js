import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showAlert } from '../redux/Alert/alertSlice'
import { connectTo } from '../redux/Chess/chessSlice'
import socket from '../socket/socket'

export default function useHandlePlayButton(room, reset) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { username, avatarId } = useSelector((store) => store.auth.user)

    const person = {
        avatarId: avatarId || 16,
        username: username || 'Guest'
    }

    return (data) => {
        if (data.password === room.password) {
            socket.emit('joinRoom', { id: room.id, person })
            socket.emit('removeRoom', room.id)
            dispatch(connectTo({ room, person }))
            navigate('/chess')
        } else {
            dispatch(showAlert({ text: 'Wrong password!' }))
        }
        reset()
    }
}
