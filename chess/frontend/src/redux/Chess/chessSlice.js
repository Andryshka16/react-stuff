import { createSlice } from '@reduxjs/toolkit'

import chessBoard from './chessBoard/initialState'
import currentRoom from './currentRoom/initialState'
import practice from './practice/initialState'

import chessBoardReducer from './chessBoard/reducers'
import currentRoomReducer from './currentRoom/reducers'
import practiceReducer from './practice/reducers'

const initialState = {
    chessBoard,
    currentRoom,
    practice
}

const chessSLice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        ...chessBoardReducer,
        ...practiceReducer,
        ...currentRoomReducer,
        resetChess: () => initialState
    }
})

export default chessSLice.reducer

export const {
    setSelected,
    setCheckStatus,
    setChessStatus,
    setCoverMoves,
    setChess,
    cancelPromoted,
    movePiece
} = chessSLice.actions

export const {
    initializeRoom,
    handleConnection,
    connectTo,
    newMessage,
    setReadyPlayers,
    setOpponentLeft,
    setDrawStatus,
    restartTimer,
    clearTimer,
    setOnlineChess,
    restartOnlineChess,
    deleteRoom
} = chessSLice.actions

export const { setView, resetPracticeChessBoard } = chessSLice.actions

export const { resetChess } = chessSLice.actions
