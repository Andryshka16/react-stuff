import isUnderAttack from '../../isUnderAttack'

const turns = { w: 'b', b: 'w' }

export default function castlingMoves([x, y], chessBoard) {
    const { gameField, castling, turn } = chessBoard
    let castlingMoves = []
    const color = turns[turn]

    for (let rook of [x - 4, x + 3]) {
        const side = rook < 4 ? 'q' : 'k'
        const king = [4, y]

        if (
            x !== 4 ||
            !castling.includes(color === 'b' ? side.toUpperCase() : side) ||
            isUnderAttack(king, gameField, color).length
        )
            continue

        let k = rook > 4 ? 1 : -1
        const cell1 = [4 + k, y]
        const cell2 = [4 + 2 * k, y]

        if (
            isUnderAttack(cell1, gameField, color).length ||
            isUnderAttack(cell2, gameField, color).length ||
            gameField[y][4 + k] !== '0' ||
            gameField[y][4 + 2 * k] !== '0' ||
            (k < 0 && gameField[y][1] !== '0')
        )
            continue

        castlingMoves.push([rook, y])
    }

    return castlingMoves
}
