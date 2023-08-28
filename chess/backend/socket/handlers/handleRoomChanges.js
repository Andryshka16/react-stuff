import { rooms, setID } from '../socketHandlers.js'

export default function handleRoomChanges(socket) {
    socket.on('joinRoom', ({ id, person }) => {
        socket.join(id)
        setID(socket, id)
        socket.to(id).emit('somebodyJoined', person)
    })

    socket.on('leave_room', (id) => {
        socket.leave(id)
        setID(socket, '')
        socket.to(id).emit('opponent_left')
    })

    socket.on('createRoom', (room) => {
        rooms.push(room)
        socket.broadcast.emit('update_rooms', rooms)
        socket.emit('update_rooms', rooms)
    })

    socket.on('removeRoom', (id) => {
        rooms.forEach((room, index) => {
            if (room.id === id) rooms.splice(index, 1)
        })

        socket.broadcast.emit('update_rooms', rooms)
        socket.emit('update_rooms', rooms)
    })

    socket.on('newMessage', ({ message, id }) => {
        socket.emit('newMessage', message)
        socket.to(id).emit('newMessage', message)
    })
}
