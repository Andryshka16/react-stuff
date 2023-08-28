import initialState from './initialState'
const turns = { w: 'b', b: 'w' }

const reducers = {
    initializeRoom: ({ currentRoom }, { payload: room }) => {
        currentRoom.id = room.id
        currentRoom.author = room.author
        currentRoom.color = room.pieceColor
        currentRoom.status = 1
    },
    handleConnection: ({ currentRoom }, { payload: person }) => {
        currentRoom.timer = new Date().getTime()
        currentRoom.opponent = person
        currentRoom.status = 2
    },
    connectTo: ({ currentRoom }, { payload: { room, person } }) => {
        currentRoom.timer = new Date().getTime()
        currentRoom.id = room.id
        currentRoom.author = person
        currentRoom.opponent = room.author
        currentRoom.color = room.pieceColor === 'w' ? 'b' : 'w'
        currentRoom.status = 2
    },
    setOpponentLeft: ({ currentRoom }) => {
        currentRoom.chat.push({ type: 'alert', text: 'Opponent left' })
        currentRoom.timer = null
        currentRoom.status = 3
        currentRoom.chessBoard.chessStatus = 'Cancelled'
    },
    newMessage: ({ currentRoom }, { payload }) => {
        currentRoom.chat.push(payload)
    },
    setReadyPlayers: ({ currentRoom }, { payload }) => {
        currentRoom.readyPlayers += payload
    },
    setDrawStatus: ({ currentRoom }, { payload }) => {
        currentRoom.drawStatus = payload
    },
    restartOnlineChess: ({ currentRoom }) => {
        currentRoom.chessBoard = initialState.chessBoard
        currentRoom.timer = new Date().getTime()
        currentRoom.readyPlayers = 0
        currentRoom.chat = []
        currentRoom.drawStatus = null
        currentRoom.color = turns[currentRoom.color]
    },
    setOnlineChess: ({ currentRoom }, { payload }) => {
        currentRoom.chessBoard = payload
    },
    restartTimer: ({ currentRoom }) => {
        currentRoom.timer = new Date().getTime()
    },
    clearTimer: ({ currentRoom }) => {
        currentRoom.timer = false
    },
    deleteRoom: (state) => {
        state.currentRoom = initialState
    }
}

export default reducers
