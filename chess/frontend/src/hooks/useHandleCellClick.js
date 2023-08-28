import { movePiece, setSelected } from '../redux/Chess/chessSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function useHandleCellClick(x, y) {
    const dispatch = useDispatch()
    const { nextMoves } = useSelector((store) => store.chess.chessBoard)
    const { id } = useSelector((store) => store.chess.currentRoom)

    return nextMoves.map((i) => i.toString()).includes([x, y].toString())
        ? () => dispatch(movePiece({ x2: x, y2: y, id }))
        : () => dispatch(setSelected(null))
}
