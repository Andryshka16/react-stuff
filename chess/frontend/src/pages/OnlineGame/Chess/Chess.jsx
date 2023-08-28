import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChess } from '../../../redux/Chess/chessSlice'
import ChessBoard from '../../../components/Chessboard/ChessBoard'
import Chat from './Chat/Chat'
import { GameOver } from '../../../components/Chessboard'

export default function Chess() {
    const { chessBoard } = useSelector((store) => store.chess.currentRoom)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setChess(chessBoard))
    }, [chessBoard])

    return (
        <div style={{ display: 'flex', position: 'relative' }}>
            <ChessBoard />
            <GameOver />
            <Chat />
        </div>
    )
}
