import { useSelector } from 'react-redux'
import PlayButton from './Buttons/PlayButton'
import QuitButton from './Buttons/QuitButton'
import './GameOver.css'

export default function GameOver() {
    const { color } = useSelector((store) => store.chess.currentRoom)
    const { chessStatus } = useSelector((store) => store.chess.chessBoard)

    if (!chessStatus) return

    const text = ['w', 'b'].includes(chessStatus) && (chessStatus === color ? 'You lost!' : 'You won!')
    const styles = chessStatus === 'Cancelled' ? { marginBottom: '40px' } : {}

    return (
        <div className='gameover-shadow'>
            <h1 style={styles}>{text || chessStatus}</h1>
            {chessStatus !== 'Cancelled' && <PlayButton />}
            <QuitButton />
        </div>
    )
}
