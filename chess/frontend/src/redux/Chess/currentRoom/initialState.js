import chessBoard from '../chessBoard/initialState'

const initialState = {
    status: 0,
    id: null,
    color: null,
    author: null,
    opponent: null,
    chessBoard: { ...chessBoard, online: true },
    chessStatus: null,
    chat: [],
    drawStatus: null,
    readyPlayers: 0,
}

export default initialState
