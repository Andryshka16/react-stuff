import { useDispatch, useSelector } from 'react-redux'
import { showAlert } from '../redux/Alert/alertSlice'
import { initializeRoom } from '../redux/Chess/chessSlice'
import socket from '../socket/socket'

export default function useCreateRoom() {
    const { username, avatarId } = useSelector((store) => store.auth.user)
    const dispatch = useDispatch()

    return ({ name, password }) => {
        const time = new Date()

        const id = time.getTime()
        const date = time.toLocaleTimeString()
        const author = {
            username: username || 'Guest',
            avatarId: avatarId || 16
        }
        const pieceColor = ['w', 'b'][Math.floor(Math.random() * 2)]
        const newRoom = { name, password, author, id, date, pieceColor }

        if (name.trim() && password.trim()) {
            socket.emit('createRoom', newRoom)
            socket.emit('joinRoom', { id })
            dispatch(showAlert({ text: 'Room has been created.', color: 'green' }))
            dispatch(initializeRoom(newRoom))
        }
    }
}
