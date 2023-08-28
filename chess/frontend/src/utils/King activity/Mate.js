import getNextMoves from '../Next moves/NextMoves'

export default function checkMate(chessBoard) {
    const { gameField, turn, checkStatus, coverMoves, castling, enpassing } = chessBoard

    const { king, checksArray } = checkStatus
    const kingEscape = getNextMoves(king, { gameField, turn, castling, coverMoves, enpassing })

    if (checksArray.length > 1) return !kingEscape.length

    for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
            const moves = getNextMoves([x, y], { gameField, turn, castling, coverMoves, enpassing })
            if (gameField[y][x][0] === turn && moves.length) return false
        }

    return true
}
