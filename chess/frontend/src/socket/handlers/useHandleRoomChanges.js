import { useDispatch } from 'react-redux'
import { newRoom, removeRoom, updateRooms } from '../../redux/Rooms/RoomsSlice'
import { handleConnection, setOpponentLeft } from '../../redux/Chess/chessSlice'
import { newMessage } from '../../redux/Chess/chessSlice'
import socket from '../socket'
import { showAlert } from '../../redux/Alert/alertSlice'

export default function useHandleRoomChanges() {
    const dispatch = useDispatch()
    return () => {
        socket.on('update_rooms', (rooms) => dispatch(updateRooms(rooms)))

        socket.on('somebodyJoined', (person) => {
            dispatch(showAlert({ text: `${person.username} joined your room!`, color: 'green' }))
            dispatch(handleConnection(person))
        })

        socket.on('newMessage', (message) => dispatch(newMessage(message)))

        socket.on('opponent_left', () => {
            dispatch(setOpponentLeft())
        })
    }
}
