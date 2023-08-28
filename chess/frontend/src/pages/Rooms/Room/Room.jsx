import { useSelector } from 'react-redux'
import { deleteRoom } from '../../../redux/Chess/chessSlice'
import { useDispatch } from 'react-redux'
import socket from '../../../socket/socket'
import { showAlert } from '../../../redux/Alert/alertSlice'
import avatars from '../../../assets/avatars'
import './Room.css'

const Room = (room) => {
    const dispatch = useDispatch()
    const { currentRoom } = useSelector((store) => store.chess)
    const { name, author, id, setJoinModal, date } = room

    const username = author.username || 'Guest'
    const avatarId = author.avatarId || 16

    return (
        <div className='room'>
            <div className='room-author'>
                <img src={avatars[avatarId]} alt='' />
                <h3>{username}</h3>
            </div>
            <div className='room-info'>
                <h3 className='room-name'>{name}</h3>
                <h3 className='room-date'>{date}</h3>
            </div>
            {id === currentRoom.id ? (
                <button
                    className='hoverScale remove-btn'
                    onClick={() => {
                        socket.emit('removeRoom', id)
                        dispatch(deleteRoom())
                        dispatch(showAlert({ text: 'Room has been deleted', color: 'green' }))
                    }}
                >
                    Delete
                </button>
            ) : (
                <button className='hoverScale join-btn' onClick={() => setJoinModal({ show: true, room })}>
                    Join
                </button>
            )}
        </div>
    )
}

export default Room
