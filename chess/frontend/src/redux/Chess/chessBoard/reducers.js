import movePiece from './movePiece'

const chessBoardReducers = {
    setSelected: ({ chessBoard }, { payload }) => {
        const { piece, nextMoves } = payload || {}
        chessBoard.selected = piece
        chessBoard.nextMoves = nextMoves || []
    },
    setCheckStatus: ({ chessBoard }, { payload }) => {
        chessBoard.checkStatus = payload
    },
    setChessStatus: ({ currentRoom, chessBoard }, { payload }) => {
        const { chessMoves } = chessBoard
        currentRoom.timer = null
        currentRoom.drawStatus = null
        currentRoom.chessBoard.chessStatus = payload
        if (chessMoves.length) chessMoves[chessMoves.length - 1].move += '+'
    },
    setCoverMoves: ({ chessBoard }, { payload }) => {
        chessBoard.coverMoves = payload
    },
    setChess: (state, { payload }) => {
        state.chessBoard = payload
    },
    cancelPromoted: ({ chessBoard }) => {
        const { x1, y1, x2, y2, name, eaten } = chessBoard.promoted
        chessBoard.gameField[y1][x1] = name
        chessBoard.gameField[y2][x2] = eaten
        chessBoard.promoted = null
    },
    movePiece
}

export default chessBoardReducers
