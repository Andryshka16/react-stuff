import { useSelector } from 'react-redux'
import Draw from './Draw/Draw'
import Flag from './Surrender/Flag'
import './Actions.css'

const Actions = () => {
    const { chessStatus } = useSelector((store) => store.chess.chessBoard)

    return (
        <div className='actions' style={{ pointerEvents: chessStatus ? 'none' : 'all' }}>
            <Draw />
            <Flag />
        </div>
    )
}

export default Actions
