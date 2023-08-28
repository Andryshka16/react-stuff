import { bishopMoves, rookMoves, knightMoves, kingMoves, pawnMoves, queenMoves } from './Piece moves/'
import filter from './Filtration/Filtration'

export default function getNextMoves([x, y], chessBoard) {
    if (chessBoard.gameField[y][x] === '0') return []

    const steps = {
        K: kingMoves,
        N: knightMoves,
        Q: queenMoves,
        B: bishopMoves,
        P: pawnMoves,
        R: rookMoves
    }

    let piece = chessBoard.gameField[y][x][1]
    const getMoves = steps[piece]

    const pieceMoves = getMoves([x, y], chessBoard)
    const filtered = filter([x, y], pieceMoves, chessBoard)

    return filtered
}
