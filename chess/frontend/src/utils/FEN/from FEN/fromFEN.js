import gameFielFromFEN from './gameFieldFromFEN'
import initialState from '../../../redux/Chess/chessBoard/initialState'

export default function fromFEN(fen) {
    try {
        const [field, turn, castlingOptions, [letter, digit]] = fen.split(' ')

        const gameField = gameFielFromFEN(field)

        const k = turn === 'b' ? 1 : -1
        const enpassing = letter === '-' ? null : { x2: 'abcdefgh'.indexOf(letter), y2: 8 - (+digit + k) }
        const castling = castlingOptions === '-' ? '' : castlingOptions

        const { previousStates, chessMoves, ...initialGameBoard } = initialState
        const chessBoard = { ...initialGameBoard, gameField, turn, castling, enpassing, fen }

        return { ...chessBoard, previousStates: [chessBoard], chessMoves: [] }
    } catch (error) {
        return null
    }
}
