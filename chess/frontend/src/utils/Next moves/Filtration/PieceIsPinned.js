import findPiece from '../../Find Piece'

const inRange = (x, y) => 0 <= x && x < 8 && 0 <= y && y < 8
const turns = { w: 'b', b: 'w' }

export default function pieceIsPinned(piece, gameField) {
    const [x1, y1] = piece
    const kingColor = gameField[y1][x1][0]
    const [x2, y2] = findPiece(kingColor + 'K', gameField)
    const color = turns[kingColor]

    const pieceIsKing = x1 === x2 && y1 === y2
    const onOneLine = x1 === x2 || y1 === y2 || Math.abs((x2 - x1) / (y2 - y1)) === 1

    if (pieceIsKing || !onOneLine) return false

    const kX = x1 > x2 ? -1 : x1 < x2 ? 1 : 0
    const kY = y1 > y2 ? -1 : y1 < y2 ? 1 : 0

    for (let i = 1; x1 + kX * i !== x2 || y1 + kY * i !== y2; i++)
        if (gameField[y1 + i * kY][x1 + i * kX] !== '0') return false

    for (let i = 1; inRange(x1 - kX * i, y1 - kY * i); i++) {
        let piece = gameField[y1 - kY * i][x1 - kX * i].slice(0, 2)

        const Q = color + 'Q' === piece
        const R = color + 'R' === piece && (kX === 0 || kY === 0)
        const B = color + 'B' === piece && kX && kY

        if (Q || R || B) return true
        else if (piece !== '0') return false
    }

    return false
}
