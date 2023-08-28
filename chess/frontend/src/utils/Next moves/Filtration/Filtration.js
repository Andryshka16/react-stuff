import pieceIsPinned from './PieceIsPinned'
import findPiece from '../../Find Piece'
import isUnderAttack from '../../isUnderAttack'
import castlingMoves from './Castling'
import pinFilter from './pinFilter'

const inRange = (x, y) => 0 <= x && x < 8 && 0 <= y && y < 8
const turns = { w: 'b', b: 'w' }

export default function filter([x, y], nextMoves, chessBoard) {
    const { gameField, turn, coverMoves } = chessBoard

    const king = findPiece(turn + 'K', gameField)
    let [color, piece] = gameField[y][x]

    let newMoves = nextMoves.filter(([x, y]) => inRange(x, y) && gameField[y][x][0] !== color)

    if (piece === 'K') {
        newMoves = newMoves.filter((move) => !isUnderAttack(move, gameField, turns[turn]).length)
        newMoves.push(...castlingMoves([x, y], chessBoard))
    }

    if (piece === 'P') newMoves = newMoves.filter(([a, b]) => !(a === x && gameField[b][a] !== '0'))

    if (coverMoves.length && piece !== 'K') {
        let saves = coverMoves.map((elm) => elm.toString())
        newMoves = newMoves.filter((move) => saves.includes(move.toString()))
    }

    if (pieceIsPinned([x, y], gameField)) newMoves = newMoves.filter((move) => pinFilter(move, [x, y], king))

    return newMoves
}
