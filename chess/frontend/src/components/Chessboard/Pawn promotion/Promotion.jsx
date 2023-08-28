import { useDispatch, useSelector } from 'react-redux'
import { cancelPromoted } from '../../../redux/Chess/chessSlice'
import PromotionPiece from './Promotion piece'
import './Promotion.css'

function getChoices([x, y]) {
    if (y === 0) {
        return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
    } else if (y === 7) {
        return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
    }
}

export default function Promotion() {
    const dispatch = useDispatch()
    const { promoted } = useSelector((store) => store.chess.chessBoard)

    if (!promoted) return

    let { x2, y2 } = promoted
    const choices = getChoices([x2, y2])

    const styles = {
        left: `${(x2 < 7 ? x2 : x2 - 1) * 80}px`,
        top: `${(y2 < 7 ? y2 : y2 - 1) * 80}px`
    }

    return (
        <div className={'promotion-shadow'} onClick={() => dispatch(cancelPromoted())}>
            <div className={'promotion'} style={styles}>
                {choices.map((piece, id) => (
                    <PromotionPiece key={piece} name={piece} index={id} />
                ))}
            </div>
        </div>
    )
}
