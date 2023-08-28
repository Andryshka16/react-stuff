import { useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../../../../socket/socket'

export default function Button() {
    const { readyPlayers, id, status } = useSelector((store) => store.chess.currentRoom)
    const [ready, setReady] = useState(false)

    function handleClick() {
        if (readyPlayers === 1 && !ready) {
            socket.emit('restart_online_chess', id)
        } else {
            socket.emit('switch_ready', { id, number: ready ? -1 : 1 })
            setReady((prev) => !prev)
        }
    }

    const styles = {
        backgroundColor: ready ? 'green' : 'rgb(105, 105, 105)',
        pointerEvents: status === 3 ? 'none' : 'all',
        opacity: status === 3 ? '0.8' : '1'
    }

    return (
        <button style={styles} className='hoverScale play-again' onClick={handleClick}>
            Play again? <h4>{readyPlayers + '/2'}</h4>
        </button>
    )
}
