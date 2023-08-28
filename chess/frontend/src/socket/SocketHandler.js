import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setOnlineUsers } from '../redux/Online/onlineUsersSlice'
import useHandleRoomChanges from './handlers/useHandleRoomChanges'
import useHandleOnlineChess from './handlers/useHandleOnlineChess'
import socket from './socket'

function SocketHandler({ children }) {
    const dispatch = useDispatch()
    const handleRoomChanges = useHandleRoomChanges()
    const handleOnlineChess = useHandleOnlineChess()

    useEffect(() => {
        socket.on('change_online', (connected) => dispatch(setOnlineUsers(connected)))
        handleRoomChanges()
        handleOnlineChess()
    }, [socket])

    return children
}

export default SocketHandler
