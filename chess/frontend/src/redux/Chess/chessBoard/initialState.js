const gameField = [
    ['bR1', 'bN1', 'bB1', 'bQ', 'bK', 'bB2', 'bN2', 'bR2'],
    ['bP1', 'bP2', 'bP3', 'bP4', 'bP5', 'bP6', 'bP7', 'bP8'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['wP1', 'wP2', 'wP3', 'wP4', 'wP5', 'wP6', 'wP7', 'wP8'],
    ['wR1', 'wN1', 'wB1', 'wQ', 'wK', 'wB2', 'wN2', 'wR2']
]

const gameBoard = {
    gameField,
    turn: 'w',
    castling: 'KQkq',
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',
    selected: null,
    checkStatus: null,
    chessStatus: null,
    promoted: null,
    enpassing: null,
    lastMoves: [],
    nextMoves: [],
    coverMoves: []
}

const initialState = {
    ...gameBoard,
    previousStates: [gameBoard],
    chessMoves: []
}

export default initialState
