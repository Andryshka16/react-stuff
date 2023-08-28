import getNextMoves from '../Next moves/NextMoves'

export default function checkDraw(chessBoard) {
    const { gameField, turn, castling, coverMoves, enpassing } = chessBoard
    for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
            const moves = getNextMoves([x, y], { gameField, turn, castling, coverMoves, enpassing })
            if (gameField[y][x][0] === turn && moves.length) return false
        }

    return true
}
