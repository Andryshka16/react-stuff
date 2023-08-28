import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import socket from '../../../../../socket/socket'
import './Timer.css'

const Timer = () => {
    const { timer, color, id } = useSelector((store) => store.chess.currentRoom)
    const { turn } = useSelector((store) => store.chess.chessBoard)
    const [time, setTime] = useState(0)

    const updateTime = () => {
        const difference = new Date().getTime() - timer
        if (difference >= 15000) socket.emit('cancel_game', id)
        else setTime(Math.floor(difference / 1000))
    }

    useEffect(() => {
        if (timer) {
            const interval = setInterval(updateTime, 1)
            return () => clearInterval(interval)
        }
    }, [timer])

    const styles = { backgroundColor: color === turn ? '#00a917' : '#686868' }

    return (
        timer && (
            <div className='timer' style={styles}>
                {15 - time} seconds to make a move
            </div>
        )
    )
}

export default Timer
