export default function handleOnlinceChess(socket) {
    socket.on('give_up', ({ id, color }) => {
        socket.emit('give_up', color)
        socket.to(id).emit('give_up', color)
    })

    socket.on('cancel_game', (id) => {
        socket.emit('cancel_game')
        socket.to(id).emit('cancel_game')
    })

    socket.on('suggest_draw', (id) => {
        socket.to(id).emit('suggest_draw')
    })
    socket.on('decline_draw', (id) => {
        socket.emit('decline_draw')
        socket.to(id).emit('decline_draw')
    })
    socket.on('accept_draw', (id) => {
        socket.emit('accept_draw')
        socket.to(id).emit('accept_draw')
    })

    socket.on('restart_timer', (id) => {
        socket.emit('restart_timer')
        socket.to(id).emit('restart_timer')
    })
    socket.on('clear_timer', (id) => {
        socket.emit('clear_timer')
        socket.to(id).emit('clear_timer')
    })

    socket.on('switch_ready', ({ id, number }) => {
        socket.emit('switch_ready', number)
        socket.to(id).emit('switch_ready', number)
    })
    socket.on('restart_online_chess', (id) => {
        socket.emit('restart_online_chess')
        socket.to(id).emit('restart_online_chess')
    })
    socket.on('update_online_chess', ({ chess, id }) => {
        socket.emit('update_online_chess', chess)
        socket.to(id).emit('update_online_chess', chess)
    })
}
