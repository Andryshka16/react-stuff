import gameFieldToFen from './gameFieldToFEN'

const letters = 'abcdefgh'

export default function toFEN(chess) {
    const { gameField, turn, castling, enPassing } = chess
    const { x2, y2 } = enPassing || {}

    const k = turn === 'b' ? 1 : -1
    const enpsg = enPassing ? `${letters[x2] + (8 - (y2 + k))}` : '-'
    const field = gameFieldToFen(gameField)

    return field + ' ' + turn + ' ' + castling + ' ' + enpsg
}
