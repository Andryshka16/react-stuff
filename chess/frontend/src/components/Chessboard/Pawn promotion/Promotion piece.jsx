import { useDispatch, useSelector } from 'react-redux'
import { movePiece } from '../../../redux/Chess/chessSlice'
import chessPieces from '../../../assets/chessPieces'

const scales = { Q: 0.85, B: 0.8 }
const marginTop = { Q: '3px', R: '-2px', N: '-2px' }

export default function PromotionPiece({ index, name }) {
    const dispatch = useDispatch()
    const { turn, online, promoted } = useSelector((store) => store.chess.chessBoard)
    const { id, color } = useSelector((store) => store.chess.currentRoom)

    const transformation = turn + name
    const scale = scales[name] || 0.7
    const [x, y] = [index % 2, Math.floor(index / 2)]
    const { x2, y2 } = promoted

    const styles = {
        top: `${y * 80}px`,
        left: `${x * 80}px`,
        transform: `scale(${scale})`,
        transition: '170ms',
        rotate: (online && color === 'b' ? 180 : 0) + 'deg',
        marginTop: marginTop[name]
    }

    const handleMouseOver = (event) => (event.target.style.transform = `scale(${scale * 1.2})`)
    const handleMouseOut = (event) => (event.target.style.transform = `scale(${scale})`)

    const handleMouseClick = (event) => {
        event.stopPropagation()
        dispatch(movePiece({ x2, y2, transformation, id }))
    }

    return (
        <img
            src={chessPieces[transformation]}
            alt=''
            className={'piece'}
            style={styles}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleMouseClick}
        ></img>
    )
}
