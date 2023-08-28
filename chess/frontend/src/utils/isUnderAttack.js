const inRange = (x, y) => 0 <= x && x < 8 && 0 <= y && y < 8

export default function isUnderAttack([x, y], gameField, color) {
    const checks = []

    function checkCell([x, y], piece, i) {
        let name = gameField[y][x].slice(0, 2)
        //  && name !== (color === ('w' ? 'b' : 'w') + 'K')
        if (name !== '0') {
            const kingCheck = name === color + 'K' && Math.abs(i) === 1
            const queenCheck = name === color + 'Q' || name === color + piece
            const pawnCheck =
                piece === 'B' && name === color + 'P' && (color === 'w' ? 1 : -1) === i

            if (kingCheck || queenCheck || pawnCheck) checks.push([x, y])

            return true
        }
    }
    // Rook check

    for (let i = 1; x + i < 8; i++) if (checkCell([x + i, y], 'R', i)) break
    for (let i = 1; x - i >= 0; i++) if (checkCell([x - i, y], 'R', i)) break
    for (let i = 1; y + i < 8; i++) if (checkCell([x, y + i], 'R', i)) break
    for (let i = 1; y - i >= 0; i++) if (checkCell([x, y - i], 'R', i)) break

    // Bishop check

    for (let i = 1; x + i < 8 && y + i < 8; i++) if (checkCell([x + i, y + i], 'B', i)) break
    for (let i = 1; x - i >= 0 && y - i >= 0; i++) if (checkCell([x - i, y - i], 'B', -i)) break
    for (let i = 1; y + i < 8 && x - i >= 0; i++) if (checkCell([x - i, y + i], 'B', i)) break
    for (let i = 1; y - i >= 0 && x + i < 8; i++) if (checkCell([x + i, y - i], 'B', -i)) break

    let knights = [
        [x - 2, y - 1],
        [x - 1, y + 2],
        [x - 2, y + 1],
        [x + 1, y + 2],
        [x + 2, y - 1],
        [x - 1, y - 2],
        [x + 2, y + 1],
        [x + 1, y - 2]
    ]

    knights = knights.filter(([a, b]) => inRange(a, b))

    knights.forEach(([a, b]) => {
        const piece = gameField[b][a]
        if (piece[1] === 'N' && piece[0] === color) checks.push([a, b])
    })

    return checks
}
