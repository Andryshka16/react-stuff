import { useDispatch, useSelector } from 'react-redux'
import { movePiece, setSelected } from '../../../redux/Chess/chessSlice'
import getNextMoves from '../../../utils/Next moves/NextMoves'
import useStartDragging from './DragAndDrop'
import chessPieces from '../../../assets/chessPieces'

const scales = { P: 0.6, B: 0.8, Q: 0.85, K: 0.8 }
const marginTop = { P: '-8px', Q: '3px', R: '-3px', N: '-3px' }

export default function Piece({ x, y }) {
    const dispatch = useDispatch()

    const { id, color } = useSelector((store) => store.chess.currentRoom)
    const { gameField, nextMoves, turn, online, castling, coverMoves, enpassing } = useSelector(
        (store) => store.chess.chessBoard
    )

    const nextMovesArray = getNextMoves([x, y], { gameField, turn, castling, coverMoves, enpassing })
    const startFollowing = useStartDragging([x, y])
    const nextMovesInclude = ([x, y]) => nextMoves.map((i) => i.toString()).includes([x, y].toString())

    const piece = gameField[y][x]
    const name = piece.slice(0, 2)
    const pieceID = piece.slice(2)

    const scale = scales[name[1]] || 0.7
    const pointerEvents =
        ((!nextMovesArray.length || name[0] !== turn) && !nextMovesInclude([x, y])) ||
        (online && color !== turn)
            ? 'none'
            : 'all'

    const styles = {
        top: `${y * 80}px`,
        left: `${x * 80}px`,
        pointerEvents,
        transform: `scale(${scale})`,
        marginTop: marginTop[name[1]],
        rotate: (online && color === 'b' ? 180 : 0) + 'deg'
    }

    const handleMouseOver = (event) => (event.target.style.transform = `scale(${scale * 1.2})`)
    const handleMouseOut = (event) => (event.target.style.transform = `scale(${scale})`)

    function handleMouseClick(event) {
        if (event.button !== 0) return

        if (name[0] === turn && !nextMovesInclude([x, y])) {
            const piece = { x1: x, y1: y, name: name + pieceID }
            dispatch(setSelected({ piece, nextMoves: nextMovesArray }))

            if (nextMovesArray.length) startFollowing(event, nextMovesArray)
        } else if (nextMovesInclude([x, y])) dispatch(movePiece({ x2: x, y2: y, id }))
    }

    return (
        <img
            src={chessPieces[name]}
            alt=''
            className={'piece'}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseClick}
        ></img>
    )
}
