import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteRoom } from '../../../../../redux/Chess/chessSlice'
import socket from '../../../../../socket/socket'

export default function QuitButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useSelector((store) => store.chess.currentRoom)

    return (
        <button
            className='leave hoverScale'
            onClick={() => {
                socket.emit('leave_room', id)
                dispatch(deleteRoom())
                navigate('/')
            }}
        >
            QUIT
        </button>
    )
}
