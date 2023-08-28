import { useSelector } from 'react-redux'
import { Cells, Pieces, Promotion, Notation, Indicators } from './'
import './ChessBoard.css'

export default function Chess() {
    const { online } = useSelector((store) => store.chess.chessBoard)
    const { color } = useSelector((store) => store.chess.currentRoom)

    const styles = { rotate: (online && color === 'b' ? 180 : 0) + 'deg' }

    return (
        <div className='chess' style={styles}>
            <Cells />
            <Pieces />
            <Indicators />
            <Notation />
            <Promotion />
        </div>
    )
}
