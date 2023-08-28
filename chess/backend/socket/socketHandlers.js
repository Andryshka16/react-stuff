import handleOnlinceChess from './handlers/handleOnlineChess.js'
import handleRoomChanges from './handlers/handleRoomChanges.js'

export const players = {}
export const rooms = []

export const setID = (socket, id) => {
    players[socket.id] = id
}

export default function socketHandlers(socket) {
    setID(socket, null)

    socket.on('disconnect', () => {
        socket.to(players[socket.id]).emit('opponent_left')
        delete players[socket.id]
        socket.broadcast.emit('change_online', Object.keys(players).length)
    })

    socket.emit('change_online', Object.keys(players).length)
    socket.broadcast.emit('change_online', Object.keys(players).length)

    socket.emit('update_rooms', rooms)
    socket.broadcast.emit('update_rooms', rooms)

    handleRoomChanges(socket)
    handleOnlinceChess(socket)
}
