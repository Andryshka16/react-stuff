export default function findPiece(piece, gameField) {
    const promoted = ['Q', 'B', 'R', 'N']

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++)
            if (gameField[y][x] === piece) return [x, y, piece]
            else if (piece[1] === 'P')
                for (let i of promoted) {
                    const promotedPawn = piece[0] + i + piece.slice(1, 3)
                    if (gameField[y][x] === promotedPawn) return [x, y, piece]
                }
    }
    return [-1, -1, piece]
}
