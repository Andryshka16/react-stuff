import { useSelector } from 'react-redux'
import PlayerInfo from './PlayerInfo/PlayerInfo'
import Chess from './Chess/Chess'
import './OnlineGame.css'

const content = {
    0: 'Create room or join one to play chess!',
    1: 'Waiting for somebody to join your room...'
}

const OnlineGame = () => {
    const { status, author, opponent } = useSelector((store) => store.chess.currentRoom)

    if (status >= 2)
        return (
            <div className='online-game'>
                <PlayerInfo user={opponent} />
                <Chess />
                <PlayerInfo user={author} />
            </div>
        )
    else return <h1 className='h1-info'>{content[status]}</h1>
}

export default OnlineGame
