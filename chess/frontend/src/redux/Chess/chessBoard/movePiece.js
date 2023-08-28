import toFEN from '../../../utils/FEN/to FEN/toFEN'
import moveNotation from '../../../utils/MoveNotation'
import findPiece from '../../../utils/Find Piece'
import isUnderAttack from '../../../utils/isUnderAttack'
import checkMate from '../../../utils/King activity/Mate'
import checkDraw from '../../../utils/King activity/Draw'
import getCoverMoves from '../../../utils/King activity/getCoverMoves'

import socket from '../../../socket/socket'

const turns = { w: 'b', b: 'w' }

export default function movePiece({ chessBoard, currentRoom, practice }, { payload }) {
    const { x2, y2, id, transformation } = payload
    const { turn, gameField, selected, promoted } = chessBoard

    const { x1, y1, name } = selected || promoted
    const [color, piece] = name

    const pawnPromoted = !promoted && piece === 'P' && (y2 === 7 || y2 === 0)
    const castling = piece === 'K' && Math.abs(x2 - x1) > 1
    const enPassing = piece === 'P' && x1 !== x2 && gameField[y2][x2] === '0'

    const eaten = promoted?.eaten || gameField[enPassing ? y1 : y2][x2]

    const isPawn = name[1] === 'P'
    const madeTwoSteps = Math.abs(y2 - y1) === 2
    const hasPawnsOnSide =
        (x2 < 7 && gameField[y2][x2 + 1].slice(0, 2) === turns[color][0] + 'P') ||
        (x2 > 0 && gameField[y2][x2 - 1].slice(0, 2) === turns[color][0] + 'P')

    if (castling) {
        const k = x2 > x1 ? 1 : -1
        gameField[y1][4 + k] = color + 'R' + (k > 0 ? 2 : 1)
        gameField[y1][4 + 2 * k] = color + 'K'
        gameField[y1][4] = '0'
        gameField[y1][k > 0 ? 7 : 0] = '0'
    } else {
        if (enPassing) gameField[y1][x2] = '0'
        gameField[y2][x2] = promoted ? transformation + name.slice(1) : name
        gameField[y1][x1] = '0'
    }

    if (piece === 'K') {
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'K' : 'k', '')
        chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'Q' : 'q', '')
    }

    if (piece === 'R')
        if (x1 === 0) chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'Q' : 'q', '')
        else if (x1 === 7) chessBoard.castling = chessBoard.castling.replace(color === 'w' ? 'K' : 'k', '')

    chessBoard.enpassing = isPawn && madeTwoSteps && hasPawnsOnSide ? { x2, y2 } : null

    if (pawnPromoted) {
        chessBoard.promoted = { x1, y1, x2, y2, name, eaten }
    } else {
        const opposite = turns[turn]
        const king = findPiece(opposite + 'K', gameField)
        const checksArray = isUnderAttack(king, gameField, turn)

        chessBoard.lastMoves = [
            [x1, y1],
            [x2, y2]
        ]
        chessBoard.turn = opposite
        chessBoard.checkStatus = null
        chessBoard.selected = null
        chessBoard.coverMoves = []
        chessBoard.nextMoves = []
        chessBoard.promoted = null
        chessBoard.fen = toFEN(chessBoard)

        const move = moveNotation({ name, eaten, x1, y1, x2, y2, gameField, transformation })
        chessBoard.chessMoves.push({ fen: chessBoard.fen, move, turn })

        if (checksArray.length) {
            const checkStatus = { king, checksArray }
            chessBoard.checkStatus = checkStatus
            chessBoard.chessMoves[chessBoard.chessMoves.length - 1].move += '+'
            chessBoard.coverMoves = getCoverMoves({ gameField, checkStatus })

            if (checkMate(chessBoard)) {
                currentRoom.drawStatus = null
                chessBoard.chessStatus = opposite
                chessBoard.chessMoves[chessBoard.chessMoves.length - 1].move += '+'
            }
        } else if (checkDraw(chessBoard)) {
            currentRoom.drawStatus = null
            chessBoard.chessStatus = 'Draw!'
        }

        const { previousStates: prevStates, chessMoves, ...prevBoard } = chessBoard
        const { view } = practice

        chessBoard.previousStates.push(prevBoard)

        if (chessBoard.online) {
            if (chessMoves.length === 1) socket.emit('restart_timer', id)
            else if (chessMoves.length === 2) socket.emit('clear_timer', id)

            if (currentRoom.drawStatus === 'received') socket.emit('decline_draw', id)
            socket.emit('update_online_chess', { chess: chessBoard, id })
        } else {
            chessBoard.chessMoves = [...chessMoves.slice(0, view), chessMoves.at(-1)]
            chessBoard.previousStates = [...prevStates.slice(0, view + 1), prevStates.at(-1)]

            practice.view = chessBoard.previousStates.length - 1
            practice.chessBoard = chessBoard
        }
    }
}
