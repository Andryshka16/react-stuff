import { useDispatch } from 'react-redux'
import {
    clearTimer,
    restartOnlineChess,
    restartTimer,
    setChessStatus,
    setDrawStatus,
    setOnlineChess,
    setReadyPlayers
} from '../../redux/Chess/chessSlice'
import socket from '../socket'

export default function useHandleOnlineChess() {
    const dispatch = useDispatch()
    return () => {
        socket.on('suggest_draw', () => dispatch(setDrawStatus('received')))
        socket.on('decline_draw', () => dispatch(setDrawStatus(null)))
        socket.on('accept_draw', () => dispatch(setChessStatus('Draw!')))

        socket.on('give_up', (resigned) => dispatch(setChessStatus(resigned)))
        socket.on('cancel_game', () => {
            dispatch(setChessStatus('Cancelled'))
            dispatch(clearTimer())
        })

        socket.on('restart_timer', () => dispatch(restartTimer()))
        socket.on('clear_timer', () => dispatch(clearTimer()))

        socket.on('switch_ready', (number) => dispatch(setReadyPlayers(number)))
        socket.on('update_online_chess', (chess) => dispatch(setOnlineChess(chess)))
        socket.on('restart_online_chess', () => dispatch(restartOnlineChess()))
    }
}
